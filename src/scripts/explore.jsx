var lunr = require('lunr'),
    React = require('react'),
    ReactDOM = require('react-dom');

var featureIconPrefix = 'images/feature_icons/';

var Explore = React.createClass({
    loadDataFromServer: function() {
      $.ajax({
        url: 'data/indexed_data.json',
        dataType: 'json',
        cache: false,
        success: function(indexed_data) {
          var data = indexed_data.data,
              index = lunr.Index.load(indexed_data.index);
          this.setState({data: data, filteredData: data, searchIndex: index});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(status, err.toString());
        }.bind(this)
      });
    },

    getInitialState: function () {
      return {
        data: [],
        filteredData: [],
        selectedFeatures: [],
        searchTerm: "",
        hoveredFeature: ""
      };
    },

    componentDidMount: function() {
      this.loadDataFromServer();
    },

    filterData: function () {
      var searchTerm = this.state.searchTerm,
          selectedFeatures = this.state.selectedFeatures,
          filteredData, searchResults, ids;
      if (searchTerm === '') {
        filteredData = this.state.data;
      } else {
        // debugger;
        searchResults = this.state.searchIndex.search(searchTerm);
        filteredData = searchResults.map((result) => {
          var datum = this.state.data[result.ref];
          datum.score = result.score;
          return datum;
        }).sort((a, b) => {a.score - b.score});;
      }
      // If any features are selected
      if (selectedFeatures.length > 0) {
        filteredData = filteredData.filter(function (datum) {
          // Must contain all selected features
          for (var i = 0; i < selectedFeatures.length; i++) {
            if (datum.features.indexOf(selectedFeatures[i]) === -1) {
              return false;
            }
          }
          return true;
        });
      }
      this.setState({filteredData: filteredData});
    },

    allFeatures: {
      evaluations: {
        description: "Evaluations",
        icon_url: featureIconPrefix + "evaluations.png",
        explanation: "This icon indicates whether the MSI requires that third party evaluations be used to monitor individual member/company compliance with initiative standards. “Assessments”, “audits,” and “verification processes” were all considered as evaluation processes for the purposes of this data point. For more information on this data point, please see our Project Methodology."
      },
      grievance_mechanisms: {
        description: "Grievance Mechanism",
        icon_url: featureIconPrefix + "grievance_mechanism.png",
        explanation: "This icon indicates whether the MSI provides a grievance mechanism for individuals to file complaints regarding member compliance with legal or initiative standards, resolve allegations of wrongdoing and/or seek remedy for human rights abuses. To satisfy this criterion, MSI grievance mechanisms must evidence a designated process and/or review body (as opposed to a “general feedback” form), and be open to all stakeholders including affected community members. For more information on this data point, please see our Project Methodology."
      },
      human_rights_law_reference: {
        description: "Human Rights Law Reference",
        icon_url: featureIconPrefix + "human_rights_law_reference.png",
        explanation: "This icon indicates whether the MSI explicitly references human rights laws or principles (e.g., the UN Declaration on Human Rights, the ILO Core Conventions or the UN Guiding Principles on Business and Human Rights) in its standards. For more information on this data point, please see our Project Methodology."
      },
      involvement_of_affected_communities: {
        description: "Involvement of Affected Communities",
        icon_url: featureIconPrefix + "involvement_of_affected_communities.png",
        explanation: "Affected communities may be defined as those populations the MSI intends to benefit or protect (laborers, farmers, indigenous groups, etc) in addition to individuals who may be inadvertently impacted by the MSI’s operations and implementation (grassroots activists, contracted researchers, etc). This icon indicates whether the MSI engages these populations in initiatives, interviews or education programs outside of decision-making processes. For more information on this data point, please see our Project Methodology."
      },
      reports: {
        description: "Reports",
        icon_url: featureIconPrefix + "reports.png",
        explanation: "This icon indicates whether the MSI requires that publicly available reports be produced as a result of evaluations of member compliance with initiative standards. Importantly, corporate/member self-reporting does not satisfy this criterion. Reports must be produced by the MSI or by a third party and be available through the initiative webpage. For more information on this data point, please see our Project Methodology."
      },
      sanctions: {
        description: "Sanctions",
        icon_url: featureIconPrefix + "sanctions.png",
        explanation: "This icon indicates whether the MSI has some authority to sanction or hold members accountable for breaches of standards related to MSI activities. Examples of sanctions include the power to suspend or revoke memberships, impose fines, sanction with fines, to withdraw certification, seal, use of logo, or require redress or remedies in other forms. For more information on this data point, please see our Project Methodology."
      },
      standards: {
        description: "Standards",
        icon_url: featureIconPrefix + "standards.png",
        explanation: "For the purposes of this project, Standards are defined as a compulsory set of actions or requirements that companies  and/or governments must follow to meet the aims of the initiative. All MSIs included in this data set are standard-setting."
      }
    },

    generateFeatureBadges: function(features) {
      var size = 40,
          allFeatures = this.allFeatures;
      return features.map(function (feature, i) {
        var icon_url = allFeatures[feature]['icon_url'],
            description = allFeatures[feature]['description'];
        return (
          <img className="row-feature" src={icon_url} alt={description} title={description} height={size} width={size} key={i} />
        );
      });
    },

    renderTableRow: function (datum, i) {
      return (
        <div className="row msi-info" key={i}>
          <div className="large-9 columns">
            <div>
              <h4><a href={datum.website}>{datum.name}</a></h4>
            </div>
            <div>
              <h5>{datum.industry}</h5>
            </div>
            <div>
              {datum.mission}
            </div>
            <div>
              <h5>Stakeholders</h5>
              {datum.stakeholders}
            </div>
          </div>
          <div className="large-2 columns end features-list">
            <div className="launched-text">
              <h5>Launched</h5>
              {datum.launched}
            </div>
            <h5>Elements</h5>
            {this.generateFeatureBadges(datum.features)}
          </div>
        </div>
      );
    },

    renderHoveredFeatureInfo: function () {
      var hoveredFeature = this.allFeatures[this.state.hoveredFeature];
      if (!hoveredFeature) {
        return (
          <div className="hovered-feature-info">
            <h3>The Data</h3>
            In addition to collecting basic data about the identity of each MSI, we have collected and coded data on initiatives based on their scope and mandate, internal decision-making and governance processes, and operations. Use the search bar below to find specific initiatives, or select MSI element icons to filter the search results. For more information about the threshold criteria used for each MSI feature see our Project Methodology.
          </div>
        );
      };
      return (
        <div className="hovered-feature-info">
          <h3>{hoveredFeature.description}</h3>
          {hoveredFeature.explanation}
        </div>
      );
    },

    handleSearchTermChange: function (event) {
      this.setState({
        searchTerm: event.target.value
      }, this.filterData);
    },

    handleToggleFeature: function (featureName) {
      var selectedFeatures = this.state.selectedFeatures;
      var index = selectedFeatures.indexOf(featureName)
      if (index === -1) {
        selectedFeatures = selectedFeatures.concat(featureName);
      } else {
        selectedFeatures.splice(index, 1);
      }
      selectedFeatures.sort();
      this.setState({selectedFeatures: selectedFeatures}, this.filterData);
    },

    handleMouseOnFeature: function (featureName) {
      this.setState({hoveredFeature: featureName});
    },

    handleMouseOffFeature: function () {
      this.setState({hoveredFeature: ''});
    },

    renderSearchResultsSummary: function () {
      var filteredByElement, featuresText, selectedFeatures = this.state.selectedFeatures;
      if (this.state.searchTerm){
        filteredByElement = (
          <div>
            Filtered by seach term <span className="search-term">{this.state.searchTerm}</span>
          </div>
        );
      }
      if (selectedFeatures.length) {
        featuresText = 'With the element' + (selectedFeatures.length === 1 ? ' ' : 's ');
        for (var i = 0; i < selectedFeatures.length; i++) {
            featuresText += '<span class="search-term">' + this.allFeatures[selectedFeatures[i]].description + '</span>';
            if (i < selectedFeatures.length - 2) {
              featuresText += ', ';
            } else if (i === selectedFeatures.length - 2) {
              featuresText += ' and ';
            }
        }
      } else {
        featuresText = 'Matching any elements'
      }
      return (
        <div className="large-4 large-centered columns text-center results-summary">
          <h2>{this.state.filteredData.length} Results</h2>
          {filteredByElement}
          <div dangerouslySetInnerHTML={{__html: featuresText}}>
          </div>
        </div>
      );
    },

    renderSearchBar: function () {
      var allFeatures = this.allFeatures,
          handleToggleFeature = this.handleToggleFeature,
          handleMouseOnFeature = this.handleMouseOnFeature,
          handleMouseOffFeature = this.handleMouseOffFeature,
          selectedFeatures = this.state.selectedFeatures,
          featureNodes = Object.keys(allFeatures).map(function (featureName, index) {
            var description = allFeatures[featureName]['description'],
                explanation = allFeatures[featureName]['explanation'],
                icon_url = allFeatures[featureName]['icon_url'],
                classes = "feature-selector-feature";
            if (selectedFeatures.indexOf(featureName) !== -1) {
              classes += " active";
            }
            return (
              <div
                className={classes}
                key={index}
                onClick={() => {handleToggleFeature(featureName)}}
                onMouseEnter={() => {handleMouseOnFeature(featureName)}}
                onMouseLeave={() => {handleMouseOffFeature()}}
              >
                <img src={icon_url} alt={description} title={description}/>
              </div>
            );
          });
      return (
        <div key={-1} className="search-container row">
          <div className="row">
            <div className="large-7 large-centered columns">
              <input className="search-box" type="search" placeholder="Name of MSI and mission" onChange={this.handleSearchTermChange}/>
            </div>
          </div>
          <div className="row">
            <div className="large-12 large-centered columns">
              <div className="feature-selector">
                  {featureNodes}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-8 large-centered columns">
              <div>
                {this.renderHoveredFeatureInfo()}
              </div>
            </div>
          </div>
          <div className="row">
            {this.renderSearchResultsSummary()}
          </div>
        </div>
      );
    },

    renderInfoBox: function () {
      return (
        <div className="row explore-info">
          <p>In addition to collecting basic data about the identity of each MSI, we have collected and coded data on initiatives based on their scope and mandate, internal decision-making and governance processes, and operations. Use the search bar below to find specific initiatives, or select MSI element icons to filter the search results.</p>
          <p>For more information about the threshold criteria used for each MSI feature see our Project Methodology.</p>
        </div>
      );
    },

    render: function () {
      var generateFeatureBadges = this.generateFeatureBadges;
      var renderTableRow = this.renderTableRow;
      var dataNodes = this.state.filteredData.map(function (datum, i) {
        return renderTableRow(datum, i);
      });
      dataNodes.unshift(this.renderSearchBar());
      return (
        <div className={"msi-info-container tab" + (this.props.activeTab ? ' active-tab' : '')}>
          {/* this.renderInfoBox() */}
          {dataNodes}
        </div>
      );
    }
});

module.exports = Explore;

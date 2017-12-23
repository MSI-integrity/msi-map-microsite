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
        description: "Compliance Evaluations",
        icon_url: featureIconPrefix + "compliance_evaluations.png",
        explanation: "This data point documents whether the MSI  requires evaluations to monitor individual member/company compliance with initiative standards. “Assessments,” “audits,” and “verification processes” were all considered to be evaluation processes for the purposes of this data point. Corporate/member self-evaluation does not satisfy this criterion."
      },
      grievance_mechanisms: {
        description: "External Complaints Mechanisms",
        icon_url: featureIconPrefix + "grievance_mechanism.png",
        explanation: "This data point documents whether the MSI reports that it provides a mechanism for individuals to file complaints regarding member compliance with legal or initiative standards, to resolve allegations of wrongdoing, and to seek a remedy for human rights abuses. An external complaints mechanism is distinct from an internal dispute resolution mechanism that allows initiative members to file complaints about the initiative’s governance or implementation. To satisfy this criterion, external complaints mechanisms must evidence a designated process and/or review body (as opposed to a “general feedback” form), and be open to all stakeholders including affected community members."
      },
      human_rights_law_reference: {
        description: "International Law Reference",
        icon_url: featureIconPrefix + "international_law_reference.png",
        explanation: "This data point documents whether the MSI references international human rights or environmental laws or principles (e.g., the United Nations Declaration on Human Rights, the International Labor Organization Core Conventions, or the United Nations Guiding Principles on Business and Human Rights) in its standards."
      },
      involvement_of_affected_communities: {
        description: "Involvement of Affected Populations",
        icon_url: featureIconPrefix + "involvement_of_affected_populations.png",
        explanation: "Affected populations are the people the MSI intends to benefit or protect (such as laborers, farmers, or indigenous communities) in addition to individuals who may be impacted by the MSI’s operations and implementation (such as civil society activists, or researchers). This data point documents whether the MSI reports that it engages these populations through initiatives, interviews, or education programs."
      },
      reports: {
        description: "Public Reports",
        icon_url: featureIconPrefix + "public_reports.png",
        explanation: "This data point documents whether the MSI requires that publicly available reports be produced as a result of evaluations of member compliance with initiative standards. Corporate/member self-reporting does not satisfy this criterion. Reports must be produced by the MSI or by a third party and be publicly available on the MSI’s webpage."
      },
      sanctions: {
        description: "Sanctions",
        icon_url: featureIconPrefix + "sanctions.png",
        explanation: "This data point documents whether the MSI reports that it has some authority to sanction or hold members accountable for breaches of standards related to MSI activities. Examples of sanctions include the power to suspend or revoke memberships, impose fines, sanction with fines, to withdraw certification, seal, use of the MSI’s logo, or require redress or remedies in other forms."
      },
      standards: {
        description: "Standards",
        icon_url: featureIconPrefix + "standards.png",
        explanation: "For the purposes of this project, Standards are defined as a compulsory set of actions or requirements that companies  and/or governments must follow to meet the aims of the initiative. All MSIs included in this data set are standard-setting."
      }
    },

    generateFeatureBadges: function(features, greyOut) {
      const size = 40,
            allFeatures = this.allFeatures,
            classes = "row-feature" + (greyOut ? " grey-out" : "");
      return features.sort().map(function (feature, i) {
        const icon_url = allFeatures[feature]['icon_url'],
              description = allFeatures[feature]['description'];
        return (
          <img className={classes} src={icon_url} alt={description} title={description} height={size} width={size} key={i} />
        );
      });
    },

    renderTableRow: function (datum, i) {
      return (
        <div className="row msi-info" key={i}>
          <div className="large-9 columns">
            <div>
              <h4><a href={datum.website} target="_blank">{datum.name}</a></h4>
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
            {this.generateFeatureBadges(datum.features, false)}
            {this.generateFeatureBadges(datum.deprecatedFeatures, true)}
          </div>
        </div>
      );
    },

    renderHoveredFeatureInfo: function () {
      var hoveredFeature = this.allFeatures[this.state.hoveredFeature];
      if (!hoveredFeature) {
        return (
          <div className="hovered-feature-info">
            <p>
              Use the search bar above to find specific initiatives, or select MSI element icons to filter the search results.
            </p>
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
          <div className="small-12 columns explore-info">
            <h1>The Database</h1>
            <hr />
            <p>
              This database catalogues basic information about the design characteristics of each MSI’s scope, governance, and implementation structures. The database does not evaluate, rate, or rank MSIs, nor does it assess the impact or effectiveness of MSIs. Therefore, it should not be treated as a “scorecard” or “benchmark” for MSI performance. For more information about the data collection process and the threshold criteria used for each data point, see our <a href="#methodology">Project Methodology</a>.
            </p>
            <strong>
              <p>
                Please contact <a href="mailto:info@msi-integrity.org">MSI Integrity (info@msi-integrity.org)</a> to submit updates or corrections to the database, or to provide suggestions for the database’s development and future uses.
              </p>
              <p>
                MSI researchers, practitioners, or civil society members interested in reviewing project data should contact <a href="mailto:suzanne.katzenstein@duke.edu">Suzanne Katzenstein (suzanne.katzenstein@duke.edu)</a>.
              </p>
            </strong>
          </div>
          <div className="row">
            <div className="large-7 large-centered columns">
              <input className="search-box" type="search" placeholder="Search by MSI name, industry, or mission" onChange={this.handleSearchTermChange}/>
            </div>
          </div>
          <div className="row feature-selector-container">
            <div className="large-10 large-offset-1 large-centered columns">
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

    render: function () {
      var generateFeatureBadges = this.generateFeatureBadges;
      var renderTableRow = this.renderTableRow;
      var dataNodes = this.state.filteredData.map(function (datum, i) {
        return renderTableRow(datum, i);
      });
      return (
        <div className={"msi-info-container tab" + (this.props.activeTab ? ' active-tab' : '')}>
          {this.renderSearchBar()}
          {dataNodes}
        </div>
      );
    }
});

module.exports = Explore;

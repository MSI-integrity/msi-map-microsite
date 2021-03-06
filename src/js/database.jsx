import Lunr from 'lunr';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const featureIconPrefix = 'images/feature_icons/';

const Database = React.createClass({
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
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/indexed_data.json');
    xhr.onload = () => {
      if (xhr.status === 200) {
        const indexedData = JSON.parse(xhr.responseText),
              data = indexedData.data,
              index = Lunr.Index.load(indexedData.index);
        this.setState({data: data, filteredData: data, searchIndex: index});
      } else {
        console.error('failed', xhr.status, xhr.responseText);
      }
    }
    xhr.send();
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
        selectedFeatures = this.state.selectedFeatures;
    var featureNodes = Object.keys(allFeatures).map(function (featureName, index) {
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
          <h1>The MSI Database</h1>
          <hr />
          <p>
            This MSI Database catalogued basic information about the design characteristics of global standard-setting MSIs, including their scope, governance, and implementation structures. Analysis of the data can be found in <Link to={'/report'}>our summary report</Link>; raw data can be downloaded <a href="https://github.com/MSI-integrity/msi-map-microsite/raw/master/data/data.xlsx">here</a> or by <a href="https://www.msi-integrity.org/contact-us/">contacting us</a>.
          </p>
          <p>
            The MSI Database did not evaluate, rate, or rank MSIs, nor did it assess the impact or effectiveness of MSIs. It should not be treated as a “scorecard” or “benchmark” for MSI performance. For more information about the data collection process and the threshold criteria used for each data point, see our <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">Project Methodology</a>.
          </p>
          <p>
            The MSI Database was released in June 2017. In 2020, MSI Integrity released a new report on MSIs, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose</a>, which provides more recent data, current through June 2019, on the MSIs listed in this MSI Database. The MSI Database was not updated to reflect all of this new data; specifically, we updated the names, launch dates, and some mission statements of MSIs, and eliminated five MSIs from the original list of 45 for consistency with our final set of research into MSIs. Two of the five MSIs were removed because they are no longer in operation. We removed another three because their standards focused solely on environmental protection and did not include other specific human rights components, and so were not appropriate for our ongoing analysis. We also note that UTZ has merged with Rainforest Alliance, but we analyzed it separately as, at the time of our research, it still retained separate procedures and processes. For more information about these revisions, see our <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">Project Methodology</a>.
          </p>
          <p>
            Beyond the revisions stated here, the MSI Database was not and will not be updated any further. MSI Integrity is shifting to a new and exciting research focus: looking <a href="https://www.msi-integrity.org/beyond-corporations/">beyond corporations</a> to support the promotion of business models that center workers and communities in their ownership and governance.
          </p>
          <p>
            If you wish to explore more recent data on the 40 MSIs now in our MSI Database, explore our 2020 report, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose</a>.
          </p>
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
    const dataNodes = this.state.filteredData.map((datum, i) => this.renderTableRow(datum, i));
    return (
      <div className={"msi-info-container tab"}>
      {this.renderSearchBar()}
      {dataNodes}
      </div>
    );
  }
});

module.exports = Database;

var Nav = React.createClass({
  goToReportTab: function () {
    window.location.hash = "";
  },

  goToDataTab: function() {
    window.location.hash = "data";
  },

  goToExploreTab: function () {
    window.location.hash = "explore";
  },

  goToQuestionAndAnswerTab: function () {
    window.location.hash = "questions";
  },

  renderMenuItems: function () {
    var itemData = [
      {
        onClick: this.goToReportTab,
        className: this.props.tabElement == Report && 'active',
        text: 'The Report'
      },
      {
        onClick: this.goToDataTab,
        className: this.props.tabElement == Data && 'active',
        text: 'The Data'
      },
      {
        onClick: this.goToExploreTab,
        className: this.props.tabElement == Explore && 'active',
        text: 'Explore'
      },
      {
        onClick: this.goToQuestionAndAnswerTab,
        className: this.props.tabElement == QuestionAndAnswer && 'active',
        text: 'Q&A'
      }
    ];
    return itemData.map(function (datum, i) {
      return (
        <li key={i}>
          <a className={datum.className} onClick={datum.onClick}>{datum.text}</a>
        </li>
      )
    });
  },

  render: function () {
    return (
      <div className="nav">
        <div className="title-bar" data-responsive-toggle="realEstateMenu" data-hide-for="small">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Menu</div>
        </div>
        <div className="top-bar" id="realEstateMenu">
          <div className="top-bar-left">
            <ul className="menu" data-responsive-menu="accordion">
              <li className="menu-text">Mapping Multi-Stakeholder Initiatives</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              {this.renderMenuItems()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

var Report = React.createClass({
    componentDidMount: function () {
      $('.orbit').foundation();
    },

    render: function () {
      return (
        <div>
          <div className="row">
            <div className="small-6 columns">
              <h1>Text Text Text</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
                <ul className="orbit-container">
                  <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                  <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                  <li className="is-active orbit-slide">
                    <img className="orbit-image" src="https://s-media-cache-ak0.pinimg.com/originals/02/65/fe/0265fe0b04f990cb07f1d11c0b15ad4e.jpg" alt="Space" />
                    <figcaption className="orbit-caption">Space, the final frontier.</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://3.bp.blogspot.com/-kTB6PIKLFI8/VXxTiGbf88I/AAAAAAAAc48/mRJmPWszVm0/s400/Adventure%2BTime%2BAppisodev.webp" alt="Space" />
                    <figcaption className="orbit-caption">Lets Rocket!</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://images6.fanpop.com/image/photos/33400000/Adventure-Time-BroFist-ask-the-adventure-time-ocs-33458232-400-250.jpg" alt="Space" />
                    <figcaption className="orbit-caption">Encapsulating</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://vignette3.wikia.nocookie.net/adventuretimebdm/images/6/6a/Atwallwidescreen.jpg/revision/latest?cb=20110516210801" alt="Space" />
                    <figcaption className="orbit-caption">Outta This World</figcaption>
                  </li>
                </ul>
                <nav className="orbit-bullets">
                  <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
                  <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                  <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
                  <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 large-centered columns">
              <h1>Project Description</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

var Data = React.createClass({
    getInitialState: function () {
      return {
        format: 'JSON'
      };
    },

    setFormat: function (format) {
      if (format !== 'JSON' && format !== 'Excel') {
        console.error('format' + format + 'is bad');
      }
      this.setState({format: format});
    },

    fileUri: function () {
      if (this.state.format === 'JSON') {
        return 'data.json';
      } else if (this.state.format === 'Excel') {
        return 'data.xlsx';
      }
    },

    render: function () {
      var formatButtonClasses = "button small",
          jsonButtonClasses = formatButtonClasses,
          excelButtonClasses = formatButtonClasses;

      if (this.state.format === 'JSON') {
        jsonButtonClasses += ' alert';
      }

      if (this.state.format === 'Excel') {
        excelButtonClasses += ' alert';
      }

      return (
        <div>
          <div className="row">
            <div className="small-12 columns">
              <h1>The Data</h1>
            </div>
          </div>
          <div className="row">
            <div className="small-6 columns">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns text-center">
              <div>
                <a href={this.fileUri()} className="button large download-data" download>Download Data</a>
              </div>
              <div>
                <a className={jsonButtonClasses} onClick={() => {this.setFormat('JSON')}}>JSON</a> <a className={excelButtonClasses} onClick={() => {this.setFormat('Excel')}}>Excel</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 columns">
              <h1>About The Researchers</h1>
            </div>
            <div className="small-6 columns">
              <img src="image/org_icons/msi-integrity.png" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <img src="image/org_icons/dhrc-logo.png" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

var Explore = React.createClass({
    loadDataFromServer: function() {
      $.ajax({
        url: 'data.json',
        dataType: 'json',
        cache: false,
        success: function(data) {
          data = this.addIds(data.data);
          var index = this.createSearchIndex(data);
          this.setState({data: data, searchIndex: index});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(status, err.toString());
        }.bind(this)
      });
    },

    getInitialState: function () {
      return {
        data: [],
        selectedFeatures: [],
        searchTerm: ""
      };
    },

    addIds: function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].id = i;
      }
      return data;
    },

    createSearchIndex: function (data) {
      var index = lunr(function() {
        this.field('name');
        this.field('mission');
      });
      for (var i = 0; i < data.length; i++) {
        index.add(data[i]);
      }
      return index;
    },

    componentDidMount: function() {
      this.loadDataFromServer();
    },

    filteredData: function (searchTerm, selectedFeatures) {
      var filteredData, searchResults, ids;
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
      return filteredData;
    },

    allFeatures: {
      evaluations: {
        description: "Evaluations",
        icon_url: "image/feature_icons/evaluations.png"
      },
      grievance_mechanism: {
        description: "Grievance Mechanism",
        icon_url: "image/feature_icons/grievance_mechanism.png"
      },
      human_rights_law_reference: {
        description: "Human Rights Law Reference",
        icon_url: "image/feature_icons/human_rights_law_reference.png"
      },
      human_rights_reference: {
        description: "Human Rights Reference",
        icon_url: "image/feature_icons/human_rights_reference.png"
      },
      involvement_of_affected_communities: {
        description: "Involvement of Affected Communities",
        icon_url: "image/feature_icons/involvement_of_affected_communities.png"
      },
      reports: {
        description: "Reports",
        icon_url: "image/feature_icons/reports.png"
      },
      sanctions: {
        description: "Sanctions",
        icon_url: "image/feature_icons/sanctions.png"
      },
      standards: {
        description: "Standards",
        icon_url: "image/feature_icons/standards.png"
      }
    },

    generateFeatureBadges: function(features) {
      var size = 40,
          allFeatures = this.allFeatures;
      return features.map(function (feature, i) {
        var icon_url = allFeatures[feature]['icon_url'],
            description = allFeatures[feature]['description'];
        return (
          <img src={icon_url} alt={description} title={description} height={size} width={size} key={i} />
        );
      });
    },

    renderTableRow: function (datum, i) {
      return (
        <div className="row msi-info" key={i}>
          <div className="large-8 columns">
            <div>
              <h3>{datum.name}</h3>
            </div>
            <div>
              <h5>Launched {datum.launched}</h5>
            </div>
            <div>
              {datum.mission}
            </div>
            <div>
              <h4>Stakeholders</h4>
              {datum.stakeholders}
            </div>
          </div>
          <div className="large-4 columns">
            <h4>Features</h4>
            {this.generateFeatureBadges(datum.features)}
          </div>
        </div>
      );
    },

    handleToggleFeature: function (featureName) {
      var selectedFeatures = this.state.selectedFeatures;
      var index = selectedFeatures.indexOf(featureName)
      if (index === -1) {
        selectedFeatures = selectedFeatures.concat(featureName);
      } else {
        selectedFeatures.splice(index, 1);
      }
      console.log(selectedFeatures);
      this.setState({selectedFeatures: selectedFeatures});
    },

    renderSearchBar: function () {
      var allFeatures = this.allFeatures;
      var handleToggleFeature = this.handleToggleFeature;
      var selectedFeatures = this.state.selectedFeatures;
      var featureNodes = Object.keys(allFeatures).map(function (featureName, index) {
        var description = allFeatures[featureName]['description'],
            icon_url = allFeatures[featureName]['icon_url'],
            classes = "small-3 columns feature-selector-feature";
        if (selectedFeatures.indexOf(featureName) !== -1) {
          classes += " active";
        }
        return (
          <div className={classes} key={index} onClick={() => {handleToggleFeature(featureName)}}>
            <img src={icon_url} alt={description} title={description} />
            <div>
              {description}
            </div>
          </div>
        );
      });
      return (
        <div key={-1}>
          <div className="row">
            <div className="large-6 large-centered columns">
              <input type="text" placeholder="Name of MSI and mission" onChange={(event) => {this.setState({searchTerm: event.target.value})}}/>
            </div>
          </div>
          <div className="row collapse feature-selector">
            <div className="small-6 columns">
              {featureNodes.slice(0, 4)}
            </div>
            <div className="small-6 columns">
              {featureNodes.slice(4, 8)}
            </div>
          </div>
          <div className="row">
            <div className="large-4 large-centered columns text-center">
              <h3>{this.filteredData(this.state.searchTerm, this.state.selectedFeatures).length} Results</h3>
            </div>
          </div>
        </div>
      );
    },

    render: function () {
      var generateFeatureBadges = this.generateFeatureBadges;
      var renderTableRow = this.renderTableRow;
      var dataNodes = this.filteredData(this.state.searchTerm, this.state.selectedFeatures).map(function (datum, i) {
        return renderTableRow(datum, i);
      });
      dataNodes.unshift(this.renderSearchBar());
      return (
        <div className="msi-info-container">
          {dataNodes}
        </div>
      );
    }
});

var QuestionAndAnswer = React.createClass({
    render: function () {
      return (
        <div>
          <div className="row">
            <h1>Q&A</h1>
          </div>
          <div className="row">
            <h2>Some Question</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </div>
          <div className="row">
            <h2>Some Question</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </div>
        </div>
      );
    }
});

var PageContainer = React.createClass({
  render: function () {
    return (
      <div>
        {React.createElement(Nav, {tabElement: this.props.tabElement})}
        {React.createElement(this.props.tabElement)}
      </div>
    );
  }
});

var handleHashChange = function () {
  var tabElement;
  switch(window.location.hash.replace(/^#/, "")) {
    case "":
      tabElement = Report;
      break;
    case "data":
      tabElement = Data;
      break;
    case "explore":
      tabElement = Explore;
      break;
    case "questions":
      tabElement = QuestionAndAnswer;
      break;
    default:
      window.location.hash = "";
      tabElement = Report;
      break;
  }
  ReactDOM.render(<PageContainer tabElement={tabElement}/>, document.getElementById('content'));
}

handleHashChange();
window.onhashchange = handleHashChange;
$(document).foundation();

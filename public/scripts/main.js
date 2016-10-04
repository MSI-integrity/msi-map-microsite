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
        text: 'Q&amp;A'
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
      <div>
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
            <div className="small-5 small-offset-1 columns">
              <h1>Text Text Text</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-5 columns end">
              <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
                <ul className="orbit-container">
                  <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                  <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                  <li className="is-active orbit-slide">
                    <img className="orbit-image" src="http://placehold.it/400x370&text=Pegasi B" alt="Space" />
                    <figcaption className="orbit-caption">Space, the final frontier.</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://placehold.it/400x370&text=Pegasi B" alt="Space" />
                    <figcaption className="orbit-caption">Lets Rocket!</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://placehold.it/400x370&text=Pegasi B" alt="Space" />
                    <figcaption className="orbit-caption">Encapsulating</figcaption>
                  </li>
                  <li className="orbit-slide">
                    <img className="orbit-image" src="http://placehold.it/400x370&text=Pegasi B" alt="Space" />
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
            <div className="small-10 large-centered columns">
              <h1>Project Description</h1>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

var Data = React.createClass({
    render: function () {
      return (
        <div>
          <div className="row">
            <h1>The Data</h1>
          </div>
          <div className="row">
            <div className="small-6 columns">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <a href="#" className="button large">Download Data</a>
            </div>
          </div>
          <div className="row">
            <h1>About The Researchers</h1>
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
        url: '/data.json',
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data.data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(status, err.toString());
        }.bind(this)
      });
    },
    getInitialState: function () {
      return {
        data: []
      };
    },
    componentDidMount: function() {
      this.loadDataFromServer();
    },
    generateFeatureBadges: function(features) {
      var size = 25;
      return features.map(function (feature, i) {
        var src = "image/feature_icons/" + feature + ".png";
        return (
          <img src={src} height={size} width={size} key={i} />
        );
      });
    },
    render: function () {
      var generateFeatureBadges = this.generateFeatureBadges;
      var dataNodes = this.state.data.map(function (datum, i) {
        return (
          <div className="row" key={i}>
            <div className="small-3 columns">
              {datum.name}
            </div>
            <div className="small-5 columns">
              {datum.mission}
            </div>
            <div className="small-2 columns">
              {datum.stakeholders}
            </div>
            <div className="small-1 columns">
              {datum.launched}
            </div>
            <div className="small-1 columns">
              {generateFeatureBadges(datum.features)}
            </div>
          </div>
        );
      });
      return (
        <div>
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

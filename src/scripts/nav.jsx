var React = require('react');

var Nav = React.createClass({
  goToHomeTab: function () {
    window.location.hash = "";
  },

  goToReportTab: function () {
    window.location.hash = "report";
  },

  goToDataTab: function() {
    window.location.hash = "methodology";
  },

  goToExploreTab: function () {
    window.location.hash = "data";
  },

  goToQuestionAndAnswerTab: function () {
    window.location.hash = "questions";
  },

  renderMenuItems: function () {
    var activeClass = 'active-link';
    var itemData = [
      {
        onClick: this.goToHomeTab,
        className: this.props.hashValue == '' && activeClass,
        text: 'Overview'
      },
      {
        onClick: this.goToReportTab,
        className: this.props.hashValue == 'report' && activeClass,
        text: 'The Report'
      },
      {
        onClick: this.goToExploreTab,
        className: this.props.hashValue == 'data' && activeClass,
        text: 'The Database'
      },
      {
        onClick: this.goToDataTab,
        className: this.props.hashValue ==  'methodology' && activeClass,
        text: 'Methodology'
      },
      {
        onClick: this.goToQuestionAndAnswerTab,
        className: this.props.hashValue == 'questions' && activeClass,
        text: 'FAQ'
      }
    ];
    return itemData.map(function (datum, i) {
      return (
        <li className={"menu-link " + datum.className} key={i}>
          <a onClick={datum.onClick}>{datum.text}</a>
        </li>
      )
    });
  },

  render: function () {
    return (
      <div className="nav">
        <div className="logo-banner">
          <h5>A joint initiative of</h5>
          <a href="http://kenan.ethics.duke.edu/humanrights"><img src="images/org_icons/dhrc-logo.png" /></a>
          <a href="http://www.msi-integrity.org"><img src="images/org_icons/msi-integrity.png" /></a>
          <a href="http://www.millerchevalier.com"><img src="images/org_icons/miller-chevalier-logo.png" /></a>
        </div>
        <div className="top-bar">
          {/*<div className="top-bar-left">
            <ul className="menu" data-responsive-menu="accordion">
              <a href="#"><li className="menu-text">The New Regulators</li></a>
            </ul>
          </div> */ }
          <div className="top-bar-left">
            <ul className="menu">
              {this.renderMenuItems()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

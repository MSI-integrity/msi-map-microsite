var React = require('react');

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
    var activeClass = 'active-link';
    var itemData = [
      {
        onClick: this.goToReportTab,
        className: this.props.hashValue == '' && activeClass,
        text: 'The Report'
      },
      {
        onClick: this.goToDataTab,
        className: this.props.hashValue ==  'data' && activeClass,
        text: 'The Data'
      },
      {
        onClick: this.goToExploreTab,
        className: this.props.hashValue == 'explore' && activeClass,
        text: 'Explore'
      },
      {
        onClick: this.goToQuestionAndAnswerTab,
        className: this.props.hashValue == 'questions' && activeClass,
        text: 'Q&A'
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
        <div className="top-bar" id="realEstateMenu">
          <div className="top-bar-left">
            <ul className="menu" data-responsive-menu="accordion">
              <li>
                <img className="top-nav-logo" src="http://wiseowlwebdesigns.com/core/img/logoPage/target.png" />
              </li>
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

module.exports = Nav;

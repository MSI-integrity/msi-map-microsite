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
    var itemData = [
      {
        onClick: this.goToReportTab,
        className: this.props.hashValue == '' && 'active',
        text: 'The Report'
      },
      {
        onClick: this.goToDataTab,
        className: this.props.hashValue ==  'data' && 'active',
        text: 'The Data'
      },
      {
        onClick: this.goToExploreTab,
        className: this.props.hashValue == 'explore' && 'active',
        text: 'Explore'
      },
      {
        onClick: this.goToQuestionAndAnswerTab,
        className: this.props.hashValue == 'questions' && 'active',
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

module.exports = Nav;

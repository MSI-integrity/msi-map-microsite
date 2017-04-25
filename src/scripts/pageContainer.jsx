var React = require('react'),
    Nav = require('./nav'),
    Home = require('./home'),
    Data = require('./data'),
    Explore = require('./explore'),
    Footer = require('./footer'),
    QuestionAndAnswer = require('./questionAndAnswer'),
    Report = require('./report');

var PageContainer = React.createClass({
  tabElementFromHashValue: function () {
    switch (this.props.hashValue) {
      case "":
        return Home;
      case "report":
        return Report;
      case "methodology":
        return Data;
      case "data":
        return Explore;
      case "questions":
        return QuestionAndAnswer;
      default:
        console.error(this.props.hashValue + ' is not a valid hash value');
    }
  },

  renderTabs: function () {
    var tabElementToShow = this.tabElementFromHashValue();
    return [Home, Report, Data, Explore, QuestionAndAnswer].map((tabElement, index) => {
      var isActiveTab = false;
      if (tabElement === tabElementToShow) {
        isActiveTab = true;
      }
      return (
        <div key={index}>
            {React.createElement(tabElement, {activeTab: isActiveTab})}
        </div>
      );
    });
  },

  render: function () {
    return (
      <div>
        {React.createElement(Nav, {hashValue: this.props.hashValue})}
        {this.renderTabs()}
        {React.createElement(Footer, {homepage: this.tabElementFromHashValue() == Home})}
      </div>
    );
  }
});

module.exports = PageContainer;

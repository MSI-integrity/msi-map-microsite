var React = require('react'),
    Nav = require('./nav'),
    Data = require('./data'),
    Explore = require('./explore'),
    QuestionAndAnswer = require('./QuestionAndAnswer'),
    Report = require('./report');

var PageContainer = React.createClass({
  tabElementFromHashValue: function () {
    switch (this.props.hashValue) {
      case "":
        return Report;
      case "data":
        return Data;
      case "explore":
        return Explore;
      case "questions":
        return QuestionAndAnswer;
      default:
        console.error(this.props.hashValue + ' is not a valid hash value');
    }
  },

  renderTabs: function () {
    var tabElementToShow = this.tabElementFromHashValue();
    return [Report, Data, Explore, QuestionAndAnswer].map((tabElement, index) => {
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
      </div>
    );
  }
});

module.exports = PageContainer;

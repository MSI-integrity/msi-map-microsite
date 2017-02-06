var React = require('react');

var Report = React.createClass({
  getInitialState: function () {
    return {
      tabHasBeenSeen: false
    };
  },

  render: function () {
    return (
      <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
        <div className="row report-content-top">
          <div className="small-6 columns">
            <h1>The Report</h1>
            <hr />
            <strong>In the past two decades, MSIs have emerged as particularly popular tools to address the human rights and environmental impacts of transnational business, with over 60 different standard-setting MSIs now established across nearly all major global industries. While these initiatives share many similar structures, they also evidence great variation in their sanctioning mechanisms, evaluationa and reporting processes, and inclusion of community members in their decision-making bodies. Furthermore...[INSERT RESEARCH FINDING].</strong>
          </div>
          <div className="small-4 small-offset-1 columns end text-center download-report-container">
            <a className="button large download-report">Download Report</a>
          </div>
        </div>
        <div className="row report-content-bottom">
          <div className="row collapse">
            <h1>What's Inside</h1>
            <p>“Mapping Multi-Stakeholder Initiatives: Proliferation and Practice” uses data from this mapping project to illuminate trends in the functions and operations of MSIs as part of a larger global governance landscape. Summary data points and graphics may be found below.</p>
          </div>
          <div className="row collapse">
            <div className="large-6 columns">
              <img src="images/charts/left.png" />
            </div>
            <div className="large-6 columns">
              <img src="images/charts/right.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Report;

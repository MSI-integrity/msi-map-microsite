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
          <div className="small-12 columns">
            <h1>The Report</h1>
            <hr />
          </div>
          <div className="small-6 columns">
            <p>Since the 1990s, MSIs have emerged as popular mechanisms to address the human rights and environmental impacts of transnational business. As this project has uncovered, at least 45 different standard-setting MSIs now operate in over 170 countries on six continents, engage over 50 national governments, and regulate over 9,000 companies – including 65 Fortune Global 500 businesses with combined annual revenues of more than $5.4 trillion dollars.</p>
          </div>
          <div className="small-4 small-offset-1 columns end text-center">
            <strong>Coming soon: “The New Regulators? Assessing the Landscape of Multi-Stakeholder Initiatives,” a summary report from MSI Integrity and the Duke Human Rights Center at the Kenan Institute for Ethics based on findings from the MSI database.</strong>
              { /* <a href={""} className="button large download-data" download>Download Report</a> */ }
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

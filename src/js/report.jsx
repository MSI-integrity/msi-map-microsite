import React from 'react';

const Report = React.createClass({
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
            <p>
	      Authored by MSI Integrity and the Duke Human Rights Center at the Kenan Institute for Ethics, <a href="/data/The%20New%20Regulators%20-%20MSI%20Database%20Report.pdf"><i>The New Regulators? Assessing the Landscape of Multi-Stakeholder Initiatives</i></a> analyzed the 45 standard-setting MSIs in the MSI Database. Five of these MSIs have since been removed from our database. See the <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">Project Methodology</a> for information on the removal of these MSIs. 
	    </p>
	    <p>
	      In the report, we assessed the growth and industry spread of standard-setting MSIs, which have risen to prominence as a new category of governance institution since the 1990s. These MSIs address a range of human rights, governance, and environmental issues in over 170 countries on six continents. They also engage over 50 national governments, and regulate over 9,000 companies including more than 65 Fortune Global 500 businesses with combined annual revenues of more than $5.4 trillion.
	    </p>
	    <p>
              We examined how these MSIs are governed and the extent to which they include different stakeholder groups. Our analysis revealed that a majority of standard-setting MSIs fail to meaningfully engage the workers and communities that are most affected by the standards they set. We also found that many MSIs lack one or more of the basic institutional elements necessary to effectively set and enforce their own standards.
	    </p>
            <p>
              Read our latest report on MSIs, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-for-Purpose: The Grand Experiment of Multi-Stakeholder Initiatives in Corporate Accountability, Human Rights, and Global Governance</a>, which expands on <i>The New Regulators?</i>  and ultimately concludes through six major insights that MSIs have failed as tools for human rights protection.
            </p>
          </div>
          <div className="small-4 small-offset-1 columns end text-center">
            <a href="/data/The%20New%20Regulators%20-%20MSI%20Database%20Report.pdf">
              Click Here to Download the Report
              <img src="/images/photos/report_cover.png" style={{height: 300}} />
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Report;

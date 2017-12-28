import React from 'react';

const fileUri = 'data/msi-data.zip';

const Data = React.createClass({
    render: function () {
      return (
        <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
          <div className="row data-content">
            <div class="small-12 columns">
              <h1>Project Methodology</h1>
              <hr />
            </div>
            <div className="small-12 columns">
              The database and data collection methodology were designed and developed by MSI Integrity, the Duke Human Rights Center at the Kenan Institute for Ethics at Duke University, and Miller & Chevalier (a law firm based in Washington D.C.) between 2014 – 2016. During this time, the three organizations worked together to define the scope of the project, including the types of initiatives that would be catalogued in the database, as well as the specific data points that would be collected for each initiative.

              The project proceeded in four stages:

              <ul>
                <li>Project Design and Review (Winter 2014 - Winter 2015)</li>
                <li>Pilot Research, Review, and Preparation for Data Collection Stage (Spring 2015 - Fall 2015)</li>
                <li>Data Collection and Internal Review (Spring 2016 - Summer 2016)</li>
                <li>Communication with MSIs (Summer 2016 - Fall 2016)</li>
              </ul>

              A full explanation of the project methodology is available <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">here</a>.
            </div>
          </div>
          <div className="row researchers-content">
            <div className="small-12 columns">
              <h1>About The Researchers</h1>
            </div>
            <div className="small-3 columns">
              <img src="images/org_icons/msi-integrity.png" />
            </div>
            <div className="small-9 columns">
              <p>
                The Institute for Multi-Stakeholder Initiative Integrity (“MSI Integrity”) is a non-profit organization dedicated to understanding the human rights impact and value of voluntary initiatives that address business and human rights. MSI Integrity researches key questions surrounding the effectiveness of these initiatives, facilitates learning in the field, and develops tools to evaluate initiatives from a human rights perspective. MSI Integrity takes a particular interest in how initiatives include, empower, and impact affected communities. MSI Integrity was incubated at the International Human Rights Clinic at Harvard Law School from 2010- 2012, and was launched publicly in 2013. For more information, visit <a href="http://www.msi-integrity.org">www.msi-integrity.org</a>.
              </p>
            </div>
            <div className="small-3 columns">
              <img src="images/org_icons/dhrc-logo.png" />
            </div>
            <div className="small-9 columns">
              <p>
                The Kenan Institute for Ethics at Duke is an interdisciplinary “think and do” tank committed to promoting moral reflection and commitment, conducting interdisciplinary research, and shaping policy and practice. The Duke Human Rights Center at Kenan explores contemporary international human rights challenges by promoting interdisciplinary collaborations and innovative pedagogy. It encourages critical investigations from a broad range of disciplinary traditions and that bridge the often-separate spheres of research, advocacy and policy. For more information, visit <a href="http://kenan.ethics.duke.edu/humanrights">kenan.ethics.duke.edu/humanrights</a>.
              </p>
            </div>
            <div className="small-3 columns">
              <img src="images/org_icons/miller-chevalier-logo.png" />
            </div>
            <div className="small-9 columns">
              <p>
Founded in 1920, Miller & Chevalier is a Washington, DC law firm with a global perspective and leading practices in Tax, Employee Benefits (including ERISA), International Law and Business, White Collar and Internal Investigations, Complex Litigation and Government Affairs. Miller & Chevalier's Business & Human Rights (BHR) practice draws on the firm's deep experience in compliance counseling, investigations and litigation to provide tailored strategies to comply with BHR and related standards, prevent violations that create reputational and operational risk, and defend against alleged violations if issues arise. For more information on the firm, visit <a href="http://www.millerchevalier.com">www.millerchevalier.com</a>.              </p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Data;

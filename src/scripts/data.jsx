var React = require('react');

var fileUri = 'data/msi-data.zip';

var Data = React.createClass({
    render: function () {
      return (
        <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
          <div className="row data-content">
            <div class="small-12 columns">
              <h1>Project Methodology</h1>
              <hr />
            </div>
            <div className="small-12 columns">
              The database and data collection methodology were designed and developed by MSI Integrity, the Duke Human Rights Center at the Kenan Institute for Ethics at Duke University and Miller & Chevalier (a law firm based in Washington D.C.) between 2014 – 2016. During this time, the three organizations worked together to define the scope of the project, including the types of initiatives that would be catalogued in the database, as well as the specific data points that would be collected for each initiative.

              The project proceeded in four stages:

              <ul>
                <li>Project Design and Review (Spring 2014-Fall 2014)</li>
                <li>Pilot Research, Review, and Preparation for Data Collection Stage (Spring 2015-Fall 2015)</li>
                <li>Data Collection and Internal Review (Spring 2016-Summer 2016)</li>
                <li>Communication with MSIs (Summer 2016-Fall 2016)</li>
              </ul>

              A full explanation of the project methodology is available <a href="#methodology">here</a>.
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
              <p>The Institute for Multi-Stakeholder Initiative Integrity (“MSI Integrity”) is a non-profit organization dedicated to understanding the human rights impact and value of voluntary initiatives that address business and human rights. MSI Integrity researches key questions surrounding the effectiveness of these initiatives, facilitates learning in the field, and develops tools to evaluate initiatives from a human rights perspective. MSI Integrity takes a particular interest in how initiatives include, empower, and impact affected communities. MSI Integrity was incubated at the International Human Rights Clinic at Harvard Law School from 2010- 2012, and was publicly launched in 2013.</p>
            </div>
            <div className="small-3 columns">
              <img src="images/org_icons/miller-chevalier-logo.png" />
            </div>
            <div className="small-9 columns">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-3 columns">
              <img src="images/org_icons/dhrc-logo.png" />
            </div>
            <div className="small-9 columns">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Data;

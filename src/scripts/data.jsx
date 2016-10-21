var React = require('react');

var Data = React.createClass({
    formatsToFileName: {
      'JSON': 'data.json',
      'Excel': 'data.xlsx',
      'PDF': 'data.pdf'
    },

    getInitialState: function () {
      return {
        format: 'JSON'
      };
    },

    setFormat: function (format) {
      if (Object.keys(this.formatsToFileName).indexOf(format) === -1) {
        console.error('format' + format + 'is bad');
      }
      this.setState({format: format});
    },

    fileUri: function () {
      return 'data/' + this.formatsToFileName[this.state.format];
    },

    renderFormatButtons: function () {
      var setFormat = this.setFormat,
          currentFormat = this.state.format;

      return Object.keys(this.formatsToFileName).map(function (formatName, index) {
        var buttonClasses = "button small" + (currentFormat === formatName ? ' alert' : '');
        var cb = () => {setFormat(formatName)};
        return (
          <a className={buttonClasses} onClick={cb} key={index}>{formatName}</a>
        );
      });
    },

    render: function () {
      return (
        <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
          <div className="row data-content">
            <div className="small-12 columns">
              <h1>The Data</h1>
            </div>
            <div className="small-6 columns">
              <p>The data for this project was collected by researchers at Duke University from February, 2016 – July, 2016 under the supervision of Professor Suzanne Katzenstein. From here, Duke and MSI Integrity conducted a global review of all mappings, focusing on the threshold and internal decision-making categories, and the categories involving “affected communities” and grievance mechanisms. Project data was recoded following the global review as needed. From here, MSIs were contacted and offered the opportunity to comment on the project data. Finally, Duke synthesized data findings and…[INSERT ADDITIONAL COMMENT ON DATA INTERPRETATION PROCESS].</p>
              <strong>MSI researchers, practitioners or civil society members are encouraged to download the raw data for their own interpretation purposes. Additionally, those who wish to submit a comment or request an update to the data may do so here.</strong>
            </div>
            <div className="small-4 small-offset-1 columns end text-center download-data-container">
              <div>
                <a href={this.fileUri()} className="button large download-data" download>Download Data</a>
              </div>
              <div className="download-format-chooser">
                {this.renderFormatButtons()}
              </div>
            </div>
          </div>
          <div className="row project-methodology">
            <div className="small-12 columns">
              <h1>Project Methodology</h1>
            </div>
            <div className="small-12 columns">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
          <div className="row researchers-content">
            <div className="small-12 columns">
              <h1>About The Researchers</h1>
            </div>
            <div className="small-6 columns">
              <img src="images/org_icons/msi-integrity.png" />
              <p>The Institute for Multi-Stakeholder Initiative Integrity (“MSI Integrity”) is a non-profit organization dedicated to understanding the human rights impact and value of voluntary initiatives that address business and human rights. MSI Integrity researches key questions surrounding the effectiveness of these initiatives, facilitates learning in the field, and develops tools to evaluate initiatives from a human rights perspective. MSI Integrity takes a particular interest in how initiatives include, empower, and impact affected communities. MSI Integrity was incubated at the International Human Rights Clinic at Harvard Law School from 2010- 2012, and was publicly launched in 2013.</p>
              <img src="images/org_icons/miller-chevalier-logo.png" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <img src="images/org_icons/dhrc-logo.png" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Data;

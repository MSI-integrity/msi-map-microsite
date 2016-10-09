var React = require('react');

var Data = React.createClass({
    formatsToFileName: {
      'JSON': 'data.json',
      'Excel': 'data.xlsx',
      'Some other format?': 'data.txt'
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
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
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
          <div className="row researchers-content">
            <div className="small-12 columns">
              <h1>About The Researchers</h1>
            </div>
            <div className="small-6 columns">
              <img src="images/org_icons/msi-integrity.png" />
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

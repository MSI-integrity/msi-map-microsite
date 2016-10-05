var React = require('react');

var Data = React.createClass({
    getInitialState: function () {
      return {
        format: 'JSON'
      };
    },

    setFormat: function (format) {
      if (format !== 'JSON' && format !== 'Excel') {
        console.error('format' + format + 'is bad');
      }
      this.setState({format: format});
    },

    fileUri: function () {
      if (this.state.format === 'JSON') {
        return 'data.json';
      } else if (this.state.format === 'Excel') {
        return 'data.xlsx';
      }
    },

    render: function () {
      var formatButtonClasses = "button small",
          jsonButtonClasses = formatButtonClasses,
          excelButtonClasses = formatButtonClasses;

      if (this.state.format === 'JSON') {
        jsonButtonClasses += ' alert';
      }

      if (this.state.format === 'Excel') {
        excelButtonClasses += ' alert';
      }

      return (
        <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
          <div className="row">
            <div className="small-12 columns">
              <h1>The Data</h1>
            </div>
          </div>
          <div className="row">
            <div className="small-6 columns">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns text-center">
              <div>
                <a href={this.fileUri()} className="button large download-data" download>Download Data</a>
              </div>
              <div>
                <a className={jsonButtonClasses} onClick={() => {this.setFormat('JSON')}}>JSON</a> <a className={excelButtonClasses} onClick={() => {this.setFormat('Excel')}}>Excel</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 columns">
              <h1>About The Researchers</h1>
            </div>
            <div className="small-6 columns">
              <img src="static/images/org_icons/msi-integrity.png" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="small-6 columns">
              <img src="static/images/org_icons/dhrc-logo.png" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Data;

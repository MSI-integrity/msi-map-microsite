var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <div className="row text-center footer">
        <p>© 2017 <a href="http://www.msi-integrity.org">MSI Integrity</a></p>
      </div>
    );
  }
});

module.exports = Footer;

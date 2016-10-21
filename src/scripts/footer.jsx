var React = require('react');

var Footer = React.createClass({
  render: function () {
    var photoCopyright;
    if (this.props.homepage) {
      photoCopyright = (
        <p>Image copyrights Moyan Brenn</p>
      );
    }
    return (
      <div className="row text-center">
        <p>© 2016 <a href="http://www.msi-integrity.org">MSI Integrity</a></p>
        {photoCopyright}
      </div>
    );
  }
});

module.exports = Footer;

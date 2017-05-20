var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
        <div className="homepage-top">
          <div className="row">
            <div className="homepage-box large-12 columns large-centered">
              <h1>The Multi-Stakeholder Initiative Database</h1>
              <hr />
              <p>Multi-stakeholder initiatives (MSIs) bring together various stakeholders — such as corporations, civil society organizations, governments, and local communities — to collaborate in addressing a specific issue.</p>
              <p>This database is an open-access resource for researchers, MSIs, companies, and the public to use in identifying transnational standard-setting MSIs and learning about their characteristics. The project catalogues publicly available information about MSI institutional design features, such as whether initiatives include reporting or sanctioning mechanisms, in order to provide an overview of MSI governance and operational characteristics.</p>
              <p>MSIs currently operate in almost every major global industry: certifying the production of clothing and manufactured goods, monitoring commercial fishing practices, establishing codes of conduct for internet companies regarding privacy and freedom of expression, and more. These initiatives have been created to address some of the most intractable problems linked to the global economic system, ranging from forced labor to deforestation and government corruption.</p>
              <p>In collaboration with the law firm Miller & Chevalier, The Institute for Multi-Stakeholder Initiative Integrity (MSI Integrity) and the Duke Human Rights Center at the Kenan Institute for Ethics have produced this online database to contribute to debate and discussion about the voluntary governance of the private sector and encourages deeper research and critical reflection into the roles, functions and effectiveness of individual MSIs, as well as MSIs as a field.</p>

              <strong>To learn more, read our <a href="#report">summary report</a>, explore <a href="#data">the data</a>, or review our <a href="#questions">FAQ</a>.</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;

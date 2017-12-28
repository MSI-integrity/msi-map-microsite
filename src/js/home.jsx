import React from 'react';
import { Link } from 'react-router-dom';

const Home = React.createClass({
  render: function () {
    return (
      <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
        <div className="homepage-top">
          <div className="row">
            <div className="homepage-box large-12 columns large-centered">
              <h1>The Multi-Stakeholder Initiative Database</h1>
              <hr />
              <p>Multi-stakeholder initiatives (MSIs) convene actors such as corporations, civil society organizations, governments, and local communities to address some of the most challenging issues linked to the conduct of companies and governments around the world.</p>
              <p>MSIs currently operate in almost every major global industry: certifying the production of clothing and other manufactured goods, monitoring commercial fishing practices, establishing codes of conduct for agricultural producers, and more. These initiatives have been created to address problems ranging from forced labor to deforestation and government corruption.</p>
              <p>This database is an open-access resource for learning about transnational standard-setting MSIs. It catalogues publicly available information about the institutional design of MSIs to provide an overview of the governance and operations of these initiatives.</p>
              <p><a href="http://www.msi-integrity.org">The Institute for Multi-Stakeholder Initiative Integrity (MSI Integrity)</a> and the <a href="http://kenan.ethics.duke.edu/humanrights">Duke Human Rights Center at the Kenan Institute for Ethics</a>, with the support of <a href="http://www.millerchevalier.com">Miller & Chevalier</a> as pro bono counsel for this project, have produced this database of transnational standard-setting MSIs to provide an introduction to these influential sources of standards and to encourage research and critical reflection into the roles, functions, and effectiveness of MSIs.</p>

              <strong>To learn more, read our <Link to={'/report'}>summary report</Link>, explore <Link to={'/database'}>the data</Link>, or review our <Link to={'/faq'}>FAQ</Link>.</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;

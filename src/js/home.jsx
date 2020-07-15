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
              <p>This database, which was released in June 2017, is an open-access resource for learning about transnational standard-setting MSIs. The MSI Database catalogued publicly available information about the institutional design of MSIs to provide an overview of the governance and operations of these initiatives.</p>
              <p><a href="http://www.msi-integrity.org">MSI Integrity</a> and the <a href="http://kenan.ethics.duke.edu/humanrights">Duke Human Rights Center at the Kenan Institute for Ethics</a>, with the support of <a href="http://www.millerchevalier.com">Miller & Chevalier</a> as pro bono counsel for this project, produced this database of transnational standard-setting MSIs to provide an introduction to these influential sources of standards and to encourage research and critical reflection into the roles, functions, and effectiveness of MSIs.</p>

              <strong>To learn more, read <i><Link to={'/report'}>the New Regulators? report</Link></i>, explore <Link to={'/database'}>the data</Link>, and review our <Link to={'/faq'}>FAQ</Link>.</strong>
              <br/>
              <br/>
              <p>NOTE: In 2020, MSI Integrity released a new report on MSIs, <i><a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose: The Grand Experiment of Multi-Stakeholder Initiatives in Corporate Accountability, Human Rights, and Global Governance,</a></i> which provides more recent data, current through June 2019, on the MSIs listed in this database. The MSI Database was not updated to reflect all of this new data; specifically, we updated the names, launch dates, and some mission statements of MSIs, and eliminated five MSIs from the original list of 45 for consistency with our final set of research into MSIs. For more information about these revisions, see our <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">Project Methodology</a>.</p>
              <p>Beyond the revisions stated here, the MSI Database was not and will not be updated any further. MSI Integrity is shifting to a new and exciting research focus: looking <a href="https://www.msi-integrity.org/beyond-corporations/">beyond corporations</a> to support the promotion of business models that center workers and communities in their ownership and governance.</p>
              <p>If you wish to explore more recent data on the 40 MSIs in our MSI Database, explore our 2020 report, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose</a>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;

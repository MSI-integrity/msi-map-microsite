var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
        <div className="homepage-top">
          <div className="row">
            <div className="homepage-box large-7 columns large-centered">
              <h4>Multi-Stakeholder Initiatives: On the Rise</h4>
              <p>Multi-stakeholder initiatives (MSIs) can generally be understood as voluntary initiatives that bring together various stakeholder groups — such as corporations, governments, NGOs and local communities — to address an issue of common concern. MSIs may foster cross-sector engagement, facilitate dialogue, and develop or apply standards for corporate or government conduct through collaborative processes.</p>
              <p>In collaboration with the law firm Miller & Chevalier, The Institute for Multi-Stakeholder Initiative Integrity (MSI Integrity) and the Duke Human Rights Center at the Kenan Institute for Ethics have conducted a project to map the global landscape of standard-setting MSIs aimed to address the public impacts of business conduct.</p>
              <strong>To learn more, read our summary report (hyperlink to “Report” page), explore the data (hyperlink to “Explore” page), or review our project information page (hyperlink to “About” page).</strong>
            </div>
          </div>
        </div>
        <div className="homepage-bottom">
          <div className="row">
            <p><strong>The project is not intended to be a comprehensive mapping of MSIs.</strong> Rather, this mapping is intended to complement existing surveys that have focused on other informal government-linked business governance institutions (Westerwinter citation) and international business standards and codes of conduct (International Trade Centre’s Standards Map citation). For this project, MSIs have been selected for mapping if they involve more than one of four stakeholder groups in their core decision-making processes. Additionally, we only mapped MSIs that aim to address the conduct of business that implicates issues of public concern. We elaborate our preliminary MSI selection criteria and research process in our Project Methodology.</p>
            <p>The goals of the project include identifying the extent of the proliferation of MSIs, mapping key institutional design characteristics of included MSIs (with implicit normative and evaluative consequences), and reporting on current trends in MSI proliferation and design across sectors. The project is also intended to serve as a foundation for future analysis of and engagement with MSIs by researchers, civil society advocates, and the general public.</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;

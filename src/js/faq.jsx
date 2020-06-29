import React from 'react';
import { Link } from 'react-router-dom';

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


const FAQ = React.createClass({
  questionsAndAnswers: [
    {
      question: 'What is the MSI database?',
      answer:
        <p>
          The MSI database is an open-access resource for researchers, MSIs, companies, and the public to use in identifying transnational, standard-setting multi-stakeholder initiatives (MSIs) and learning about their characteristics. Specifically, the project catalogues publicly available information regarding MSI institutional design features, such as whether initiatives include reporting or sanctioning mechanisms, in order to provide an overview of MSI governance and operational characteristics.  Although the database contains potentially important descriptive information about the landscape of MSIs, it should be emphasized that the database does not evaluate, rate, or rank the effectiveness of MSIs, and therefore should not be treated as a “scoring” tool for MSI performance.  It is our hope that the database contributes to debate and discussion about the role of MSIs in voluntary governance of the private sector, and that it encourages deeper research and critical reflection into the roles, functions and effectiveness of individual MSIs, as well as MSIs as a field. This database should also be viewed as a resource for various stakeholders seeking to engage with MSIs.
        </p>
    },
    {
      question: 'What are MSIs?',
      answer:
        <div>
          <p>
            There is no commonly agreed-upon definition of what constitutes a multi-stakeholder initiative (MSI). However, at the most basic level, MSIs can be understood as efforts to bring together various stakeholders — such as companies, civil society, government and local communities — to collaborate in addressing a specific issue.
          </p>
          <p>
            Beyond this basic framing, MSIs may take a variety of different forms and functions. Some initiatives focus on establishing dialogue or encouraging shared learning while others may set standards for supply chains or industries, seek to mobilize resources, or encourage collective action for policy development. Some may have a narrow focus, such as addressing a specific local health or infrastructure need, or eliminating a specific form of forced labor, while others may examine the broader environmental, human rights, and social issues relevant to a particular sector. MSIs may also go by different names with varying degrees of specificity, from “multi-stakeholder networks” and “private standard initiatives,” to “private transnational governance” and “public private partnerships.”
          </p>
        </div>
    },
    {
      question: 'What types of MSIs are included in the MSI database?',
      answer:
      <div>
        <p>
          At this stage, the database focuses exclusively on MSIs that set transnational standards for business or government conduct on issues of public concern, such as human rights, the environment and corruption. Over time, the database may be expanded to include other types of initiatives. The decision to focus on transnational standard-setting MSIs was made because of the potential significance of these initiatives to various stakeholder groups in the context of global and national “governance gaps” related to environmental and human rights protection — and the potential of these MSIs to address these gaps in combination with international and national laws.
        </p>
        <p>
          To meet the threshold for inclusion in the database, an initiative must meet all of the following criteria:
        </p>
        <ul>
          <li>The initiative has more than one stakeholder group (i.e., industry, civil society, government, or communities affected by business operations) that collaborates in the primary decision-making processes of the initiative; </li>
          <li>The initiative sets standards for its members to follow; </li>
          <li>The initiative is “voluntary” (i.e. optional for companies and other stakeholders to join although once a member, compliance with certain standards may be mandatory);</li>
          <li>The initiative’s standards are implemented in more than one country; and</li>
          <li>The initiative focuses on addressing business or government conduct relating to issues of public concern (e.g. human rights, environmental protection, corruption prevention, etc.). Note: in 2020 we modified this criterion to restrict the database to MSIs standards that address or affect specific human rights beyond the environment. See our <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">project methodology</a> for more information, including a list of the MSIs that were removed.</li>
        </ul>
        <p>
          The exact organizational structure or formal status of an initiative — such as whether it is an incorporated entity — is not a consideration in determining whether the initiative qualifies for inclusion in the database. However, it is required that the initiative’s governance structure mandate the participation of diverse stakeholders in its primary decision-making body. Over time, we may expand the database to include initiatives that have a multi-stakeholder advisory group or that delegate limited authority to a multi-stakeholder body.  However, expanding the database in this way may result in the inclusion of many initiatives that are not commonly viewed as MSIs, such as the United Nations.
        </p>
        <p>
          Finally, given that our research methodology relied on online research, we only included MSIs in the database that had a website.
        </p>
      </div>
    },
    {
      question: 'Why does the database only include transnational, standard-setting MSIs?',
      answer:
        <p>
          The decision to initially focus on transnational, standard-setting MSIs was made because of the global governance significance of these initiatives and their potential to address “governance gaps” around environmental and human rights protection — supporting, or possibly undermining the development of international and national laws. Some researchers have argued that some MSIs have been perceived as filling “governance gaps” and therefore deterred policymakers from passing laws or regulations to address the underlying issues. Others see some MSIs as norm generators that have helped create conditions and political willingness for legislation to be passed to establish those norms. For these reasons, from an accountability and rights-protection perspective, standard-setting MSIs are commonly viewed as warranting heightened attention compared with other forms of MSIs.
        </p>
    },
    {
      question: 'Does the database rank, evaluate or rate MSIs?',
      answer:
        <p>
          No. The database does not evaluate, rate, or rank MSIs, nor does it assess the impact or effectiveness of MSIs. Therefore, it should not be treated as a “scorecard” or “benchmark” for MSI performance.
        </p>
    },
    {
      question: 'Does the database assess the impact, effectiveness or quality of the MSIs surveyed?',
      answer:
      <div>
        <p>
          No. The database does not assess the impact or effectiveness of the MSIs surveyed. The database does catalogue those MSI design characteristics (such as evaluation and sanctioning) that are considered, based on MSI Integrity’s research, to be important for an initiative’s potential efficacy. However, any evaluation of MSI impact would require an examination of the effects that an MSI has had on its affected community — which is beyond the scope of this project. Similarly, studies into effectiveness of an initiative would require greater examination of the design and/or outcomes of an initiative. The database documents the information that the MSIs have reported regarding their policies and practices, but not their quality or implementation.  In short, the database does not evaluate whether an initiative’s features or practices are well-designed, effective or utilized. As a result, an MSI that contains all the features in the database may be no more effective than an MSI with none of those features.
        </p>
        <p>
          We realize that the database’s focus on select, publicly reported design characteristics risks encouraging or contributing to a check-box approach to MSI design and review — an approach that often serves more as a public relations exercise than an attempt to produce meaningful change on the ground. For this reason, we emphasize that this project does not, and cannot, speak to the quality or impact of MSIs and their design features. Our hope is that the database provides a foundation for others to pursue more detailed analyses of that nature.
        </p>
      </div>
    },
    {
      question: 'What are the main limitations of the database’s findings?',
      answer:
        <div>
          <p>
            As a first effort to map standard-setting initiatives, this project has three important limitations:
          </p>
          <ol>
            <li>The project does not collect information on the substantive content of MSIs – for instance whether MSI standards require meaningful change in corporate practice, or simply confirm what is already corporate practice.</li>
            <li>The project relies on the self-reporting of MSIs on their own websites in order to represent MSIs as the general public might see them. The exclusive use of publicly available information highlights the varying levels of transparency and accessibility across initiatives. At the same time, the database does not verify that any of the initiatives’ stated features are followed or implemented, but simply notes that these processes and policies reportedly exist.</li>
          </ol>
          <p>
            The project does not evaluate the implementation of the features catalogued (for example, whether an MSI actually uses its sanctioning mechanism against non-compliant members), nor their quality or effectiveness. Instead, the project and resulting database aim to serve as an initial resource for researchers, civil society, MSI staff, and the private sector to support further research and critical reflection on MSIs, and to inform stakeholder engagement with MSIs.
          </p>
        </div>
    },
    {
      question: 'How was the database developed?',
      answer:
        <div>
          <p>
            The database and data collection methodology were designed and developed by MSI Integrity, the Duke Human Rights Center at the Kenan Institute for Ethics at Duke University and MSI Integrity's pro bono counsel for this project, Miller & Chevalier (a law firm based in Washington D.C.) between 2014 – 2016. During this time, the three organizations worked together to define the scope of the project, including the types of initiatives that would be catalogued in the database, as well as the specific data points that would be collected for each initiative.
          </p>
          <p>
            The project proceeded in four stages:
          </p>
          <ul>
            <li>Project Design and Review (Winter 2014-Winter 2015)</li>
            <li>Pilot Research, Review, and Preparation for Data Collection Stage (Spring 2015-Fall 2015)</li>
            <li>Data Collection and Internal Review (Spring 2016-Summer 2016)</li>
            <li>Communication with MSIs (Summer 2016-Fall 2016) </li>
          </ul>
          <p>
            In 2020, five MSIs were removed from the database and the names and launch dates of the remaining MSIs and, in some cases, the mission statements, were revised to reflect more current information. Beyond these revisions, the database was not and will not be updated any further. A full explanation of the project methodology, including the removal of the five MSIs, is available <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">here</a>.
          </p>
      </div>
    },
    {
      question: 'What data was collected about each MSI?',
      answer:
      <div>
        <p>
          The database catalogues basic information about the design characteristics of each MSI’s scope, governance and implementation structures. The data points catalogued were included because they are considered, based on MSI Integrity’s research, to be important for an initiative’s potential efficacy. A detailed description of the criteria used for each data point is included in the Classification Guide at the end of the project methodology document. A summary of each MSI design characteristic catalogued in the database is available below:
        </p>
        <ul>
          <li>Involvement of Affected Populations: Affected populations may be defined as those individuals the MSI intends to benefit or protect (such as laborers, farmers, or indigenous communities) in addition to individuals who may be impacted by the MSI’s operations and implementation (such as civil society activists, or researchers). This data point documents whether the MSI reports that it engages these populations in initiatives, interviews or education programs outside of decision-making processes.</li>
          <li>International Law Reference: This data point documents whether the MSI references international human rights or environmental laws or principles (e.g., the United Nations Declaration on Human Rights, the International Labor Organization Core Conventions, or the United Nations Guiding Principles on Business and Human Rights) in its standards.</li>
          <li>Evaluations: This data point documents whether the MSI reports that it requires evaluations to monitor individual member/company compliance with initiative standards. “Assessments,” “audits,” and “verification processes” were all considered to be evaluation processes for the purposes of this data point. Corporate/member self-evaluation does not satisfy this criterion.</li>
          <li>Reports: This data point documents whether the MSI requires that publicly available reports be produced as a result of evaluations of member compliance with initiative standards. Corporate/member self-reporting does not satisfy this criterion. Reports must be produced by the MSI or by a third party and be publicly available on the MSI’s webpage.</li>
          <li>External Complaints Mechanisms: This data point documents whether the MSI reports that it provides a mechanism for individuals to file complaints regarding member compliance with legal or initiative standards, or to resolve allegations of wrongdoing and/or seek remedy for human rights abuses. An external complaints mechanism is distinct from an internal dispute resolution mechanism that allows initiative members to file complaints about the initiative’s governance or implementation. To satisfy this criterion, external complaints mechanisms must evidence a designated process and/or review body (as opposed to a “general feedback” form), and be open to all stakeholders including affected community members.</li>
          <li>Sanctions: This data point documents whether the MSI reports that it has some authority to sanction or hold members accountable for breaches of standards related to MSI activities. Examples of sanctions include the power to suspend or revoke membership, impose fines, withdraw certification, seal, use of the MSI’s logo, or require redress or remedies in other forms.</li>
          <li>Stakeholder Breakdown: A classification of the stakeholders identified as being represented on each MSI’s primary decision making body.</li>
          <li>Industry Breakdown: A classification of the industry/industries each MSI operates in.</li>
        </ul>
      </div>
    },
    {
      question: 'Why are those data points included?',
      answer:
        <div>
          <p>
            In selecting the data points, we considered both the potential relevance and usefulness of the data points to various stakeholder groups: In particular, (1) whether the characteristic is widely considered fundamental to an MSI’s potential to be effective, (2) whether information about this characteristic could help close a knowledge gap or stimulate further research or debate into MSIs, and (3) whether the data point would be potentially useful to stakeholder groups seeking to engage with MSIs. In making that assessment, MSI Integrity staff drew on the comments and feedback obtained during MSI Integrity’s global consultation on the Essential Elements of MSIs, as the consultation involved input from over 100 individuals on characteristics of potential importance to MSI efficacy. A brief explanation of each substantive data point is included in the Classification Guide (Appendix A of the <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">Project Methodology</a> document).
          </p>
        </div>
    },
    {
      question: 'How was data collected about each MSI?',
      answer:
        <p>
          Researchers relied on self-reported information by MSIs on MSI websites as the source material for data collection. Two researchers were assigned to each MSI and catalogued information on each initiative separately. A third researcher then compared the two data sets and reconciled any discrepancies. MSI Integrity and Kenan staff provided a final check on the data collected, devoting particular attention to any unresolved discrepancies or questions and reviewing all data points concerning the involvement of affected populations and external complaints mechanisms. In the final stage of the project, the data was shared with MSIs for feedback. Of the 45 initiatives originally included in the database, 10 responded with corrections or clarification. Corrections were made if they could be verified with publicly available information and if they were consistent with the project’s Classification Guide.
        </p>
    },
    {
      question: 'When was the database last updated?',
      answer:
        <div>
          <p>
            The database initially reflected publicly available information disclosed by MSIs through August 2016. For this initial launch phase, ata was collected between February and June 2016 and submitted to MSIs for review from August - September 2016. In 2020, MSI Integrity released a new report on MSIs, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose</a>, which provides more recent data, current through June 2019, on the MSIs listed in this database. The database was not updated to reflect this new data, except that we eliminated five MSIs from the original list of 45 and, where necessary, revised the names and launch dates of the remaining MSIs in the database and, in some cases, the mission statements, for consistency with our newest research into MSIs. Beyond these revisions, the database was not and will not be updated any further. See the <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">Project Methodology</a> for more information on these updates. Please <a href="http://www.msi-integrity.org/contact-us/">contact MSI Integrity</a> to access the original data released in 2017. Explore our new research, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose</a> for more recent data on MSIs.
          </p>
        </div>
    },
    {
      question: 'Why is a particular initiative not included?',
      answer:
        <div>
          <p>
            During the initial stages of research, the researchers were able to identify 45 transnational, standard-setting MSIs that regulate company or government conduct on issues of public concern. Although we aimed to be as comprehensive as possible in our identification of transnational, standard-setting MSIs, some initiatives may not have been captured by our methodology.
          </p>
          <p>
            Notably, there are several initiatives that researchers identified during the database development process that meet all of the database’s threshold criteria except for being transnational (i.e. implementing standards in two or more countries). Such initiatives include: The Accord on Fire and Building Safety in Bangladesh, the Alliance for Bangladesh Worker Safety, and the Alliance for Fair Food.
          </p>
          <p>
            In 2020, five MSIs were removed from the database for consistency with our newer research into MSIs. Two of the five MSIs—Fair Flowers Fair Plants and Marine Aquarium Council—were removed because they are no longer in operation. We removed another three—Green-e, International Seafood Sustainability Foundation and Wildlife Friendly Enterprise Network—because their standards focused solely on environmental protection and did not include other specific human rights components, and so were not appropriate for our ongoing analysis.
          </p>
          <p>
            The database will not be updated or expanded any further. For more information, see our Project Methodology <a href="/data/Project%20Methodology%20and%20Classification%20Guide%20-%20MSI%20Database.pdf">here</a>. If you wish to see the original data that includes these five MSIs, please <a href="http://www.msi-integrity.org/contact-us/">contact MSI Integrity</a>.
          </p>
        </div>
    },
    {
        question: 'What data sources have been used for the project?',
        answer:
          <p>
            The project relies on the self-reporting of MSIs on their own websites in order to represent MSIs as the general public might see them. The exclusive use of publicly available information highlights the varying levels of transparency and accessibility across initiatives. At the same time, the database does not verify that any of the initiatives’ stated features are followed or implemented, but simply notes that these processes and policies have been reported to exist.
          </p>
    },
    {
      question: 'Will the database be updated or expanded in the future?',
      answer:
        <p>
          The data in the database will not be updated or expanded any further. MSI Integrity is shifting to a new and exciting research focus: looking <a href="https://www.msi-integrity.org/beyond-corporations/">beyond corporations</a> to support the promotion of business models that center workers and communities in their ownership and governance. Explore our latest research, <a href="https://www.msi-integrity.org/not-fit-for-purpose/">Not Fit-For-Purpose</a> for more recent data on MSIs.
        </p>
    },
    {
      question: 'Who created the MSI database?',
      answer:
        <div>
          <p>
            This project is a collaboration between the non-profit organization, MSI Integrity, and the Duke Human Rights Center at the Kenan Institute for Ethics at Duke University. In addition, MSI Integrity's pro bono counsel for this project, Miller & Chevalier helped to formulate the data collection methodology and assisted with data collection.
          </p>
          <ul>
            <li>MSI Integrity is a non-profit organization based in Berkeley, CA which works in partnership with academic institutions and civil society organizations to understand the human rights impact and value of multi-stakeholder initiatives that address business and human rights.</li>
            <li>The Duke Human Rights Center at the Kenan Institute for Ethics is an interdisciplinary “think and do” tank at Duke University, which explores contemporary international human rights challenges by promoting innovative pedagogy and interdisciplinary collaboration that bridges research, advocacy and policy.</li>
            <li>Miller & Chevalier is a Washington, D.C. law firm with a global perspective and leading practices in Tax, Employee Benefits, International Law and Business, White Collar and Internal Investigations, Complex Litigation and Government Affairs.  Miller & Chevalier’s Business & Human Rights (BHR) practice draws on the firm’s deep experience in compliance counseling, investigations and litigation to provide tailored strategies to comply with BHR and related standards, prevent violations that create reputational and operational risk, and defend against alleged violations if issues arise.</li>
          </ul>
        </div>
    }
  ],

  renderQASummary: function () {
    const summaryNodes = this.questionsAndAnswers.map((info, index) => { 
      return (
        <div className="question-toc-item" key={index}>
          <strong><a href={"#" + slugify(info.question)}>{info.question}</a></strong>
        </div>
      );
    });
    return (
      <div className="row qa-row-summary">
        <div className="small-12 columns">
          <h1>About the Project</h1>
          <hr />
        </div>
        <div className="small-12 columns">
          {summaryNodes}
        </div>
      </div>
    );
  },

  renderQARows: function () {
    return this.questionsAndAnswers.map(function (info, index) {
      return (
        <div>
          <a name={slugify(info.question)}/>
          <div key={index} className="row qa-row">
            <div className="small-12 columns">
              <div className="question-title">
                <h3>{info.question}</h3> <a href={'#'}>Top</a>
              </div>
              <p>{info.answer}</p>
            </div>
          </div>
        </div>
      );
    });
  },

  render: function () {
    return (
      <div className={"tab" + (this.props.activeTab ? ' active-tab' : '')}>
        {this.renderQASummary()}
        {this.renderQARows()}
      </div>
    );
  }
});

module.exports = FAQ;

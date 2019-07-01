const xlsx2json = require('xlsx2json');

const features = [
  "involvement_of_affected_communities",
  "standards",
  "human_rights_law_reference",
  "evaluations",
  "reports",
  "grievance_mechanisms",
  "sanctions"
];

const filename = process.argv[2];
if (!filename) {
  console.error("no filename provided");
  process.exit(1);
}

xlsx2json(filename, {
  dataStartingRow: 2,
  mapping: {
    "name": "A",
    "website": "B",
    "industry": "C",
    "mission": "D",
    "stakeholders": "E",
    "launched": "F",
    "involvement_of_affected_communities": "G",
    "standards": "H",
    "human_rights_law_reference": "I",
    "evaluations": "J",
    "reports": "K",
    "grievance_mechanisms": "L",
    "sanctions": "M",
  }
}, function (error, jsonArray) {
  if (error) {
    console.error("could not parse data/data.xlsx:", error);
    return;
  }
  msis = jsonArray.pop().filter(msi => msi.name !== "").map(msi => {
    m = {};
    m.name = msi.name;
    m.website = msi.website;
    // "Agriculture ; Sophistry" -> "Agriculture; Sophistry"
    m.industry = msi.industry.split(";").map(category => category.trim()).join('; ');
    // Remove quotes from outside of descriptions if they have them.
    m.mission = msi.mission;
    if (m.mission[0] === "\"" && m.mission[msi.mission.length - 1] === "\"" ) {
      m.mission = m.mission.slice(1, -1)
    }
    m.stakeholders = msi.stakeholders;
    m.launched = msi.launched;
    m.features = features.filter(feature => msi[feature] === 'Yes');
    m.deprecatedFeatures = features.filter(feature => msi[feature] === 'N/A');

    return m;
  });

  console.log(JSON.stringify({ data: msis }));
});

const xlsx2json = require('xlsx2json');
xlsx2json('data/data.xlsx', {
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
    features = [];
    ["involvement_of_affected_communities",
     "standards",
     "human_rights_law_reference",
     "evaluations",
     "reports",
     "grievance_mechanisms",
     "sanctions"
    ].forEach(feature => {
      if (msi[feature] === 'Yes') {
        features.push(feature);
      }
    });
    m.features = features;
    return m;
  });
  console.log(JSON.stringify({ data: msis }));
});

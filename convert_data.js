const xlsx2json = require('xlsx2json');

xlsx2json('data/data.xlsx', {
  dataStartingRow: 2,
  mapping: {
    "name": "A",
    "industry": "B",
    "industry_sub": "C",
    "mission": "D",
    "stakeholders": "E",
    "launched": "F",
    "human_rights_reference": "G",
    "involvement_of_affected_communities": "H",
    "standards": "I",
    "human_rights_law_reference": "J",
    "evaluations": "K",
    "reports": "L",
    "grievance_mechanisms": "M",
    "sanctions": "N",
  }
}, function (error, jsonArray) {
  msis = jsonArray.pop().map(msi => {
    m = {};
    m.name = msi.name;
    m.industry = msi.industry;
    m.industry_sub = msi.industry_sub;
    m.mission = msi.mission;
    m.stakeholders = msi.stakeholders;
    m.launched = msi.launched;
    features = [];
    ["human_rights_reference",
     "involvement_of_affected_communities",
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
  console.log(JSON.stringify({data: msis})); 
});

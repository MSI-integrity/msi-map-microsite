var React = require('react'),
    ReactDOM = require('react-dom'),
    // $ = require('jquery'),
    PageContainer = require('./pageContainer');

var handleHashChange = function () {
  var hashValue = window.location.hash.replace(/^#/, "");
  switch(hashValue) {
    case "":
    case "report":
    case "data":
    case "methodology":
    case "questions":
      break;
    default:
      hashValue = "";
      window.location.hash = "";
      break;
  }
  ReactDOM.render(<PageContainer hashValue={hashValue}/>, document.getElementById('content'));
}

handleHashChange();
window.onhashchange = handleHashChange;
// $(document).foundation();

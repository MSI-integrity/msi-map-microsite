const lunr = require('lunr'),
      through = require('through2');

function addIds (data) {
  for (var i = 0; i < data.length; i++) {
    data[i].id = i;
  }
}

function createSearchIndex (data) {
  var index = lunr(function() {
    this.field('name', {boost: 10});
    this.field('mission');
    this.field('industry');
  });
  for (var i = 0; i < data.length; i++) {
    index.add(data[i]);
  }
  return index;
}

function getIndexAndData (file) {
  var data = file.data,
    index;
  addIds(data);
  index = createSearchIndex(data);
  return {
    data: data,
    index: index.toJSON()
  }
}

module.exports = getIndexAndData;

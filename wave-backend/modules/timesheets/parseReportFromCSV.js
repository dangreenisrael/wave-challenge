const babyParse = require('babyparse');

module.exports = csv => {
  const {data} = babyParse.parse(csv);
  data.shift(); // Strip headings (The structure of the CSV is guaranteed)
  const reportId = Number(data.pop()[1]);
  return {data, reportId};
};

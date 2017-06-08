module.exports.getBelongsTo = (foreignKey, Model) =>
  function() {
    const id = this[foreignKey];
    const query = {where: {[foreignKey]: id}};
    return new Promise((resolve, reject) => {
      Model.findOne(query, (err, doc) => {
        if (err) return reject(err);
        resolve(doc);
      });
    });
  };

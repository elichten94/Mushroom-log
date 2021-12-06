const Response = require('./Response.js');
const transform = {
  shapeData: function(queryRows) {
    var length = queryRows.length;
    var a = 0;
    var b = 0;
    var current, next;
    var groups = [];
    while (a < length && b < length) {
      current = queryRows[b].place;
      if (queryRows[b + 1] === undefined) {
        next = undefined
      } else {
        next = queryRows[b + 1].place;
      }


      if ((next !== current || next === undefined) && a !== b) {
        groups.push(queryRows.slice(a, b + 1))
        b++;
        a = b;
      } else {
        if (current === next) {
          b++;
        } else {
          // still wrap it as an array
          groups.push([queryRows[b]]);
          a++;
          b++;
        }
      }

      if (next === undefined) {
        break;
      }
    }

    return transform.format(groups);

  },

  format: function(groupedData) {
    var formatted = [];
    // grouped array (an array ob mixed obj and arrays)

    var species;
    for (item of groupedData) {

        aggSpecies = item.map(obj => (
          {species: obj.species, description: obj.description}
        ));
        item[0].species = aggSpecies;
        formatted.push(new Response(item[0]));

    }
    // out: formatted response
    return formatted;
  }
};

module.exports = transform;

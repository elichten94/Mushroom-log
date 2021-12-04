var Response = function(og) {
  this.name = og.place;
  this.species = Array.isArray(og.species) ? og.species : [og.species];
  this.coordinates = {
    lat: Number(og.lat),
    lng: Number(og.lng)
  };
};

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
          groups.push(queryRows[b]);
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
      // if an array,
      if (Array.isArray(item)) {
        // it's a group
        // compile all species
        aggSpecies = item.map(obj => obj.species);
        item[0].species = aggSpecies;
        formatted.push(new Response(item[0]));
      } else {
        formatted.push(new Response(item));
      }
    }
    // out: formatted response
    return formatted;
  }
};

module.exports = transform;

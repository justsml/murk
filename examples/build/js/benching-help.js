
var benchingHelp = (function(w, d) {
  /**
   * Gets the frequency aka Hz, aka operations per second
   *
   * @private
   * @param {Object} bench The benchmark object.
   * @returns {number} Returns the adjusted Hz.
   */
  function getHz(bench) {
    if ( !bench ||  !bench.stats || !bench.stats.mean ) { return false; }
    return 1 / (bench.stats.mean + bench.stats.moe);
  }
  function onResult(event) {// optional fn
    // this must be bound to a current tracking class - in this case it's a 'murk' reference
    this.benchResults.push([event.target.name, getHz(event.target)]);
  }
  function getSummary(suite, callback) {
      var benches = suite.filter('successful'),
          fastest = benches.filter('fastest'),
          slowest = benches.filter('slowest');

    var summary = {},
        errors = [],
        fastestHz = fastest && getHz(fastest[0]);

    summary = benches.map(function(b, index) {
      var err = b.error || (b.target && b.target.error || null),
          hz = getHz(b),
          percent = (1 - (hz / fastestHz)) * 100;
      if ( err ) {
        console.warn(err);
        errors.push(err);
      }
      var active = {
        dateTime: Date.now(),
        running: b.running,
        cycles: b.cycles
      };

      var obj = extend(active, {
        name:         b.name || b.id || b.options.id,
        index:        index || -1,
        stats:        b.stats || {},
        times:        b.times || {},
        hz:           hz,
        error:        err,
        percent:      percent,
        isFastest:    Array.isArray(fastest) ? fastest.indexO(b) > -1 : false,
        // slowerPercent: isFinite(hz) ? formatNumber(percent < 1 ? percent.toFixed(2) : Math.round(percent)) : 0,
        slowerPercent: isFinite(hz) ? (percent < 1 ? percent.toFixed(2) : Math.floor(percent)) : 0,
        isSlowest:    Array.isArray(slowest) ? slowest.indexO(b) > -1 : false,
        seconds:      b.times.cycle.toFixed(3),
        remainder:    b.stats.rme.toFixed(2)
      });
      delete obj.stats.sample;
      return obj;
    });
    if ( callback ) {
      errors = errors.length >= 1 ? errors : false;
      callback(errors, summary);
    } else {
      return summary;
    }
  }

  function onComplete() {
    console.log('BENCH.COMPLETE', arguments, '\nSELF:', this);
    // this must be bound to the current `suite` reference
    getSummary(this, function _saveData(err, summary) {
      if ( err ) {  console.error('BENCH.ERROR', err); }
      console.log('BENCH.RESULTS', summary, '\nSuite:', this);
      this.summary = summary;
    }.bind(this));
  }
// Globalize benchmark helpers
  w.benchingHelp = {
    'getHz':      getHz,
    'getSummary': getSummary,
    'onResult':   onResult,
    'onComplete': onComplete
  };

  return w.benchingHelp;

  // simple extend fn
  function extend(parent, child) {
    if (typeof parent == 'object') {
      for (var key in child) {
        if (child.hasOwnProperty(key)) {
          parent[key] = child[key];
        }
      }
    }
    return parent;
  }


})(window, document);

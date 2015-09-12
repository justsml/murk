
var basicExample = (function(w,d) {

  var modelOutput, m;

  m = murk({
    dev: true,
    id: 'basic'
  }).registerFilter('reverseStr', function(val) {
    return val.split('').reverse().join('');
  }).registerFilter('highlightText', function() {
    this.style.color = 'red';
  });

  function runBench() {
    var suite = new Benchmark.Suite('basic-example');
    // benchmark tracking code, tightened up a bit //
    m.benchSuite = suite;
    m.benchResults = [];
    m.benchSummary = {};
    // add tests
    return suite
      .add('init: test main function', init)
      //.add('step2: test another function', step2)
      .on('error',    console.error.bind(console, 'YO bench hit error'))
      .on('cycle',    benchingHelp.onResult.bind(m))  // optional fn i think
      .on('complete', benchingHelp.onComplete.bind(suite))
      .run({'maxTime': 50, 'minSamples': 100, 'async': true });
    // Bam, big pimpin!
  }

  function init() {

    modelOutput = d.getElementById('basicModel');

    m.on(['firstExample','secondExample','thirdExample','fourthExample'], function(key) {
      var count = this.getAttribute('data-murk-count');
      var el = d.getElementById(key + 'Count');
      var input = d.getElementById(key);
      if (!input.value) input.value = m.state.model[key];
      if (count) {
        m.set(key + 'Count', count);
        el.style.display = 'inherit';
      }
    }).set({
      firstExample: 'this is',
      secondExample: 'data binding',
      thirdExample: 'murked.'
    });

    example.updateModel(modelOutput,m.state.model,m.state.keys,m.state.totalCount);

    $('[data-murk-example="basic"]').on('keyup blur', function() {
      m.set(this.id, this.value);
      example.updateModel(modelOutput,m.state.model,m.state.keys,m.state.totalCount);
    });

    return m;
  }

  $(d).ready(init);


  // only exposed benchmark method `runBench` is runBench - other shit is wired up when it's ready (probaly soon via promises)
  m.runBench = runBench;
  return m;

})(window,document);
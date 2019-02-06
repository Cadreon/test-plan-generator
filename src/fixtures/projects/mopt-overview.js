module.exports = {
  members: {
    QE: ['Monica Gil', 'Sebastian Villegas', 'Tatiana Fernandez'],
    BE: ['Daniel Valderrama', 'Sebastian Morlaes', 'Jorge Montes', 'David Florez'],
    FE: ['Daniel Restrepo', 'Juan Lores', 'Juan Mejia'],
    PO: ['Sady Mejia'],
    PM: ['Diana Lee'],
    SM: ['Gustavo Arroyave'],
    MATH: {
      AU: ['Graeme Pillemer'],
      KL: ['Mahdi Sadrnezhaad']
    }
  },
  product: {
    abstract: 'The Optimization tool is a web based optimization and simulation tool for modelers and analysts that optimizes spend across media channels to maximize the client’s KPI or minimize budget.',
    overviewLink: 'https://wiki.mbww.com/display/PRODUCT/Optimization',
    risks: {
      1: 'Legacy code involved as a dependency for AUT',
      2: 'Math Engine is a blackbox',
      3: 'Time difference between Math Team and PSL Team time zones is great',
      4: 'Third Party Integrations - both internal and external'
    },
    devDependencies: {
      'core-api-test-library': 'https://github.com/Cadreon/core-api-test-library',
      'core-ui-test-library': 'https://github.com/Cadreon/core-ui-test-library'
    },
    projectPages: {
      testRails: 'http://testrail.cadreon.com/testrail/index.php?/projects/overview/34',
      jiraAgileBoard: 'https://projects.mbww.com/projects/MOPT/issues',
      confluencePage: 'https://wiki.mbww.com/display/PRODUCT/Optimization'
    },
    inScope: 'sprint = $SPRINT_ID$ and type = Story and project = "Modeling and Optimization"',
    knownDefects: 'sprint = $SPRINT_ID$ and type = Bug and project = "Modeling and Optimization"',
    outOfScope: 'The logic inside of the legacy code of O3 will be treated as a black box, and no unit test or integration test will be considered for it. The test scenarios identified by the PO and Leads will be apart of this scope.',
    environments: [ 'Local (dev)', 'CI', 'QA', 'Stage', 'Production', 'Support' ]
  }
}

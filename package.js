Package.describe({
  name: 'gliese:cfs-upload-http',
  version: '0.0.20',
  summary: 'Gliese flavour of CollectionFS, HTTP File Upload (INTERNAL USE ONLY)',
  git: 'https://github.com/gliesesoftware/cfs-upload-http.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'gliese:cfs-base@0.0.28',
    'gliese:cfs-tempstore@0.1.4',
    'gliese:cfs-file@0.1.16',
    'gliese:cfs-access-point@0.1.44',
    'cfs:power-queue@0.9.11',
    'cfs:reactive-list@0.0.9'
  ]);

  api.addFiles([
    'http-call-client.js',
    'upload-http-common.js',
    'upload-http-client.js'
  ], 'client');

  api.addFiles([
    'upload-http-common.js'
  ], 'server');
});

// Package.onTest(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });

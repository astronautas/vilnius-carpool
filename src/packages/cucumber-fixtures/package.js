Package.describe({
  name: 'cucumber-fixtures',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['underscore', 'coffeescript'], ['server', 'client']);
  api.addFiles('hookFixtures.coffee', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cucumber-fixtures');
});

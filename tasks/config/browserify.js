/**
 * @author Greg Rozmarynowycz <greg@thunderlab.net>
 */

const browserify = {
  files: {
    'ng/dist/app.bundle.js': 'ng/js/app.module.js',
  },
  options: {
    alias: {
      angular: './scripts/angular.min.proxy.js',
      'angular-ui-router': './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    },
  },
};

module.exports = (grunt) => {
  grunt.config.set('browserify', {
    dev: {
      files: browserify.files,
      options: {
        alias: browserify.options.alias,
        browserifyOptions: {
          debug: true,
        },
      },
    },
    dist: browserify,
  });

  grunt.loadNpmTasks('grunt-browserify');
};

'use strict';

var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('scripts', ['config'], function(cb) {
  var builder = new jspm.Builder();

  builder.reset();
  builder
    .loadConfig('./jspm.conf.js')
    .then(function() {
      builder
        .buildStatic(
          './src/app/bootstrap.js',
          '.tmp/assets/javascripts/bundle.js',
          { minify: true }
        )
        .then(function() {
          return cb();
        });
    });
});

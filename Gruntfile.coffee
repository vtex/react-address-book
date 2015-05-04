defaults = require '@vtex/grunt-defaults'
_ = require 'underscore'

module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'

  config = _.extend(
    defaults.webpack(pkg),
    defaults.clean(pkg),
    defaults.connect(pkg),
    defaults.deploy(pkg),
    {
      open:
        options:
          delay: 500
        dev:
          path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/'
    }
  )

  tasks =
    dist: ['clean', 'webpack']
    vtex_deploy: ['shell:cp']
    examples: ['connect:examples']
    # Development tasks
    default: ['open:dev', 'webpack-dev-server']

  # Project configuration.
  grunt.config.init config
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '!grunt-vtex']})
  grunt.registerTask taskName, taskArray for taskName, taskArray of tasks

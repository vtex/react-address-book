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
    test: []
    vtex_deploy: ['shell:cp', 'shell:cp_pkg', 'shell:cp_br', 'shell:cp_br_pkg']
    examples: ['connect:examples']
    # Development tasks
    default: ['open:dev', 'webpack-dev-server']

  # Project configuration.
  grunt.config.init config
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']})
  grunt.registerTask taskName, taskArray for taskName, taskArray of tasks

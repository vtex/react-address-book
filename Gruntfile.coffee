defaults = require '@vtex/grunt-defaults'
_ = require 'underscore'

module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'

  shell =
    cp_pkg:
      command: "aws s3 cp package.json s3://vtex-io-us/#{pkg.name}/#{pkg.version}/"
    # O Bucket vtex-io usa a região São Paulo, para fallback em caso de problemas com vtex-io-us
    cp_br_pkg:
      command: "aws s3 cp package.json s3://vtex-io/#{pkg.name}/#{pkg.version}/"

  config = _.extend(
    defaults.webpack(pkg),
    defaults.clean(pkg),
    defaults.connect(pkg),
    {
      shell: _.extend(defaults.deploy(pkg).shell, shell)
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

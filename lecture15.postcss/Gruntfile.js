module.exports = function (grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('postcss-cssnext')(),
          require('stylelint')({ /* your options */ }),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'src/styles/*.css',
        dest: 'build/styles.css'
      }
    },
    watch: {
      files: ['src/**/*'],
      tasks: ['postcss'],
      options: {
        livereload: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['postcss'])
  grunt.registerTask('dev', ['watch'])
};
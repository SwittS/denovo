module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      t1:{
        files:{
          'minify/denovo.min.js': ['denovo.js']
        }
      }
    },
    cssmin:{
      my_target: {
        files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
        }]
      }
    }
  });
};

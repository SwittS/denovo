module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      t1:{
        files:{
          'minify/denovo.min.js': ['denovo.js']
        }
      }
    }
  });
};

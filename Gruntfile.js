module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            build: {
                src: "src/js/*.js",
                dest: "js/script.js"
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/*.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/style.min.css': ['src/css/*.css']
                }
            }
        }
    });

    // Load plugins for default tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};

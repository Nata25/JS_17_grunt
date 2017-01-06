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
        }
    });

    // Load plugins for default tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default tasks
    grunt.registerTask('default', ['concat', 'uglify']);
};

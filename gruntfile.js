module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        less: {
            development: {
                files: {
                    'styles.css': 'styles.less'
                }
            }
        },
        watch: {
            styles: {
                files: ['*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });


    grunt.registerTask('default', ['less', 'watch']);

};
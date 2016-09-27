module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

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
        },
        
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['*.css', '!*.min.css'],
                    ext: '.min.css'
                }]
            }
        }
    });


    grunt.registerTask('default', ['less', 'watch']);

};
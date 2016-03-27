module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/perfmatters.min.js': ['src/js/perfmatters.js'],
                    'dist/views/js/main.min.js': ['src/views/js/main.js']
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    'dist/views/css/style.min.css': ['src/views/css/style.css', 'src/views/css/style.css'],
                    'dist/css/print.min.css': ['src/css/print.css']
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhiteSpace: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: {
                    'dist/index.html': 'src/index.html',
                    'dist/project-2048.html': 'src/project-2048.html',
                    'dist/project-mobile.html': 'src/project-mobile.html',
                    'dist/project-webpref.html': 'src/project-webpref.html'
                    'dist/views/pizza.html': 'src/views/pizza.html'
                }
            }
        },

        copy: {
            build: {
                cwd: 'src',
                src: ['**'],
                dest: 'dist',
                expand: true
            }
        },

        clean: {
            build: {
                src: ['dist']
            },
            stylesheets: {
                src: [ 'dist/**/*.css', '!build/application.css' ]
            },
            scripts: {
                src: [ 'dist/**/*.js', '!build/application.js' ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask(
        'scripts',
        'Compiles the javascript',
        ['uglify', 'clean:scripts']
    );
    grunt.registerTask(
        'stylesheets',
        'Compiles the stylesheets',
        ['cssmin', 'clean:stylesheets']
    );
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['clean', 'scripts', 'stylesheets', 'htmlmin', 'copy']
    );
};

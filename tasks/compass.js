var Fs   = require( 'fs' );
var Path = require( 'path' );

module.exports = function( grunt ) {

    // Create a new multi task.
    grunt.registerMultiTask( 'compass', 'This triggers the `compass compile` command.', function() {

        var src, dest, specify, matchedFiles;
        // Tell grunt this task is asynchronous.
        var done           = this.async();
        var exec           = require('child_process').exec;
        var command        = "compass compile";
        var config         = this.data.config;
        var images         = this.data.images;
        var fonts          = this.data.fonts;
        var outputstyle    = this.data.outputstyle;
        var linecomments   = this.data.linecomments;
        var forcecompile   = this.data.forcecompile;
        var debugsass      = this.data.debugsass;
        var relativeassets = this.data.relativeassets;
        var libRequire     = this.data.require;
        var bundleExec     = this.data.bundleExec;
        var environment    = this.data.environment;
        var importPath     = this.data.importPath;

        if ( this.data.src !== undefined ) {
            src = grunt.template.process( this.data.src );
        }

        if ( this.data.dest !== undefined ) {
            dest = grunt.template.process( this.data.dest );
        }

        if( this.data.specify !== undefined ) {
            specify = grunt.template.process( this.data.specify );
        }

        if ( bundleExec ) {
            command = 'bundle exec ' + command;
        }

        if ( src !== undefined && dest !== undefined ) {
            command += ' --sass-dir="' + src + '" --css-dir="' + dest + '"';

            // Specify sass files to be compiled in directory `src`.
            if ( specify !== undefined ) {

                matchedFiles = grunt.file.expandFiles( specify );
                if ( matchedFiles.length > 0 ) {
                    // Add all but filename begin with underscore after `compile` command.
                    matchedFiles.forEach( function( file ) {
                        if ( Path.basename( file ).charAt( 0 ) != '_' ) {
                            command += ' ' + file;
                        }
                    });
                }
                else {
                    grunt.log.error( 'No file matched with: ' + specify );
                    done( false );
                }
            }
        }

        if ( config !== undefined ) {
            command += ' --config="' + config + '"';
        }

        if ( images !== undefined ) {
            command += ' --images-dir="' + images + '"';
        }

        if ( fonts !== undefined ) {
            command += ' --fonts-dir="' + fonts + '"';
        }

        if ( debugsass !== undefined ) {
            if ( debugsass === true ) {
                command += ' --debug-info';
            }
        }

        if ( relativeassets !== undefined ) {
            if ( relativeassets === true ) {
                command += ' --relative-assets';
            }
        }

        if ( outputstyle !== undefined ) {
            command += ' --output-style ' + outputstyle;
        }

        if ( linecomments === false ) {
            command += ' --no-line-comments';
        }

        if ( libRequire !== undefined ) {
            command += ' --require '+ libRequire;
        }

        if ( forcecompile === true ) {
            command += ' --force';
        }

        if ( environment !== undefined ) {
            command += ' -e ' + environment;
        }

        if ( importPath !== undefined ) {
            command += ' -I ' + importPath;
        }

        function puts( error, stdout, stderr ) {

            grunt.log.write( '\n\nCOMPASS output:\n' );
            grunt.log.write( stdout );

            // compass sends falsy error message to stderr... real sass/compass errors come in through the "error" variable.
            if ( error !== null ) {
                grunt.log.error( error );
                done( false );
            }
            else {
                done( true );
            }
        }

        exec( command, puts );
        grunt.log.write( '`' + command + '` was initiated.' );
    });
};

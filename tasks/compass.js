var Fs = require( 'fs' );
var Path = require( 'path' );

module.exports = function( grunt ) {

    // Create a new multi task.
    grunt.registerMultiTask( 'compass', 'This triggers the `compass compile` command.', function() {

        // Tell grunt this task is asynchronous.
        var done = this.async(),
            exec = require('child_process').exec,
            command = "compass compile",
            src = undefined,
            dest = undefined,
            config = this.data.config,
            images = this.data.images,
            fonts = this.data.fonts,
            outputstyle = this.data.outputstyle,
            linecomments = this.data.linecomments,
            forcecompile = this.data.forcecompile,
            debugsass = this.data.debugsass,
            relativeassets = this.data.relativeassets,
            libRequire = this.data.require,
            bundleExec = this.data.bundleExec;
            environment = this.data.environment,
            importPath = this.data.importPath;

        if ( this.data.src !== undefined ) {
            src = grunt.template.process(this.data.src);
        }

        if ( this.data.dest !== undefined ) {
            dest = grunt.template.process(this.data.dest);
        }

        if ( bundleExec ) {
            command = 'bundle exec ' + command;
        }

        if ( src !== undefined && dest !== undefined ) {

            // Get stats of `src`, `ENOENT` error will be throw out if src is not an regular path.
            try {
                var srcStats = Fs.statSync( Path.resolve( process.cwd(), src ));
            }
            catch(e){
                srcStats = undefined;
            }

            // If `src` is a directory, use option `--sass-dir`.
            if( srcStats && srcStats.isDirectory() ){
                command += ' --sass-dir="' + src + '" --css-dir="' + dest + '"';
            }
            // Otherwise use `src` as the argument for command `compile`.
            else {

                var matchedFiles = grunt.file.expandFiles( src );
                if( matchedFiles.length > 0 ){

                    // Add all but filename begin with underscore after `compile` command.
                    matchedFiles.forEach(function( file ){
                        if( Path.basename(file).charAt( 0 ) != '_' ){
                            command += ' ' + file;
                        }
                    });
                    command += ' --css-dir="' + dest + '"';
                }
                else {
                    grunt.log.error( 'No file matched with: ' + src );
                    done(false);
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
            /* grunt.log.error( stderr );
             * compass sends falsy error message to stderr... real sass/compass errors come in through the "error" variable.
             */

            if ( error !== null ) {
                grunt.log.error( error );
                done(false);
            }
            else {
                done(true);
            }
        }

        exec( command, puts );
        grunt.log.write( '`' + command + '` was initiated.' );
    });
};

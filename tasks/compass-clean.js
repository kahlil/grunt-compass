module.exports = function( grunt ) {
    'use strict';

    // Create a new multi task.
    grunt.registerTask( 'compass-clean', 'This executes the `compass clean` command.', function() {

        // Tell grunt this task is asynchronous.
        var done    = this.async();
        var exec    = require( 'child_process' ).exec;
        var command = 'compass clean';

        function puts( error, stdout, stderr ) {

            grunt.log.write( '\n\nCOMPASS output:\n' );
            grunt.log.write( stdout );

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

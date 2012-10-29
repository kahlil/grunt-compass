module.exports = function( grunt ) {
    'use strict';

    // Internal lib.
    var compass = require( './lib/compass' ).init( grunt );

    // Create a new multi task.
    grunt.registerMultiTask( 'compass', 'This triggers the `compass compile` command.', function() {

        var puts, command;
        var exec = require( 'child_process' ).exec;
        // Tell grunt this task is asynchronous.
        var done = this.async();

        puts = function( error, stdout, stderr ) {
            compass.consoleOutput( error, stdout, stderr, done );
        };

        command = compass.buildCommand( this.data, done );

        exec( command, puts );

        grunt.log.write( '`' + command + '` was initiated.' );
    });
};

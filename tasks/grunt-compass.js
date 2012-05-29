
module.exports = function(grunt) {

    // Create a new task.
    grunt.registerTask('compass', 'This triggers the \'compass compile\' command.', function() {

        var exec = require('child_process').exec;
        grunt.log.write('\'compass compile\' was inititated.' );

        function puts(error, stdout, stderr) {
            grunt.log.write('\n\nCOMPASS output:\n');
            grunt.log.write(stdout);
            if ( error !== null ) {
                grunt.log.write('error: ' + error);
            }
        }

        exec("compass compile", puts);

    });

};
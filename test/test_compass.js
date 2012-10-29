var grunt = require( 'grunt' );
var compass = require('../tasks/lib/compass').init(grunt);

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports[ 'compass' ] = {
  setUp: function( done ) {
    // setup here
    done();
  },
  command: function( test ) {
    test.expect( 1 );

    // Options object
    var data = {
        src: 'sass',
        dest: 'css'
    };

    test.equal( compass.buildCommand( data ),
        'compass compile --sass-dir="sass" --css-dir="css"',
        'should return the correct command.' );
    test.done();
  }
};

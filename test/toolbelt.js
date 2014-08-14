/**
 * Test the toolbelt module
 */

var chai = require( 'chai' ),
    expect = chai.expect,
    Toolbelt = require( '../' );

describe( 'Toolbelt', function () {

    it( 'should be an object', function () {
        expect( Toolbelt )
            .to.be.an( 'object' );
    });

    it( 'should get the correct pathname segment', function () {
        // shim window object
        window = {
            history : {
                location: {
                    pathname: '/first/second/#!/third#fourth'
                }
            }
        };

        expect( Toolbelt.getUrlSegment( 1 ) )
            .to.be.equal( 'first' );
        expect( Toolbelt.getUrlSegment( 2 ) )
            .to.be.equal( 'second' );
        expect( Toolbelt.getUrlSegment( 3 ) )
            .to.be.equal( 'third' );
    });

});

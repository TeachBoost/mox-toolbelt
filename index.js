/**
 * MOX Utility functions
 */

var Toolbelt = {

    // returns a segment from the URL. n starts at 1.
    getUrlSegment: function ( n ) {
        var pathname = window.location.pathname;

        // remove leading slash
        if ( pathname.charAt( 0 ) === '/' ) {
            pathname = pathname.substr( 1 );
        }

        // remove hash or hashbang (only if inside //)
        pathname = pathname.replace( /\/\#!?\//, '/' );


        var segments = pathname.split( '/' );

        // return segment
        if ( n > segments.length ) {
            return null;
        }

        // remove any hash params
        var hashless = segments[ n - 1 ].split( '#' );

        if ( ! hashless.length ) {
            return segments[ n - 1 ];
        }

        return hashless[ 0 ];
    }

};

module.exports = Toolbelt;
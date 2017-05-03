var app = (function( doc ) {

    var component = {
        data: null,
        fetchUrl: 'http://localhost:8888/practice/namazProject/prayer-timings.json',

        /**
         * Job of this function is to call fetch method func and ready method function
         */
        init: function() {
            component.fetch();
            setTimeout( component.ready, 400 );
        },

        /**
         * Ready method function will be called after 400 milliseconds.
         */
        ready: function() {
            component.displayPrayerData();
        },

        fetch: function() {
            var request = new XMLHttpRequest();

            request.open( 'POST', component.fetchUrl );

            request.onload = function() {
                component.data = JSON.parse( request.response );
            };

            request.send(); // component.data gives the entire object of prayer timings
        },

        displayPrayerData : function() {
            var monthsArray, markup = '', monthName, monthObject,
                dateRangeObj, date, maxI,
                trTableHead = doc.getElementById( 'table-head-row' );

            /**
             * Will give all the property name of the object in an array ( the left part which is key ).
             */
            monthsArray = Object.keys( component.data );

            for( var index in monthsArray ) {
                monthName = monthsArray[ index ];
                monthObject = component.data[ monthName ];

                for ( var dateRange in monthObject.dates ) {
                    dateRangeObj = monthObject.dates[ dateRange ];
                    date = parseInt( dateRange , 10 );
                    maxI = 25 === date ? ( parseInt( monthObject.days, 10 ) - date ) : 3;

                    for( var i = 0; i <= maxI ; i++ ) {
                        markup += '<tr>';

                        markup += '<td>' + monthName + '</td>';
                        markup += '<td>' + ( date + i ) + '</td>';

                        for ( var prayerName in dateRangeObj ) {
                            var prayerTime = dateRangeObj[ prayerName ];
                            markup += '<td>' + prayerTime + '</td>';
                        }

                        markup += '</tr>';
                    }
                }
            }

            trTableHead.insertAdjacentHTML( 'afterend', markup );
        }
    };

    return component;

})( document );

app.init();

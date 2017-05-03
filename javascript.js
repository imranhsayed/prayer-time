var app = (function( ) {

    var component = {
        data: null,

        init: function() {  // job of this function is to call fetch method func and ready method function
            component.fetch();
            setTimeout( component.ready, 400 ); //ready method function will be called after 400 mlsec
        },

        ready: function() {
            component.displayPrayerData();
        },

        fetch: function() {
            var request = new XMLHttpRequest();

            request.open( 'POST' ,'http://localhost:8888/practice/namazProject/prayer-timings.json');

            request.onload = function() {
                component.data = JSON.parse( request.response ); //converts JSON file into JS object and stores it as a value of data property
            };
            // component.data gives the entire object of prayer timings
            request.send();
        },

        displayPrayerData : function() {

            //creating a table rows
            var divMain = document.getElementById( 'main-id'),
                trTableHead = document.getElementById( 'table-head-row' );

            /**
             * Will give all the property name of the object in an array ( the left part which is key ).
             */
            var monthsArray = Object.keys( component.data );
            var markup = '';

            for( var index in monthsArray ) {
                var monthName = monthsArray[ index ];
                var monthObject = component.data[ monthName ];

                for ( var dateRange in monthObject.dates ) {
                    var dateRangeObj = monthObject.dates[ dateRange ];
                    var daysInMonth = monthObject.days;

                    for( var i = 0; i < 4 ; i++ ) {
                        var date = parseInt( dateRange , 10 ) + i;
                        markup += '<tr>';

                        markup += '<td>' + monthName + '</td>';
                        markup += '<td>' + date + '</td>';

                        for (var prayerName in dateRangeObj) {
                            var prayerTime = dateRangeObj[prayerName];
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

})();

app.init();

//Accessing the data from payer-timing object
// var keyss = Object.keys( app.data );

// for( var index in keys ) {
//     var monthName = keys[index];
//     var monthObject = app.data[ monthName ];
//     for ( dateRange in monthObject.dates ) {
//         var timingObject = monthObject.dates[dateRange];
//         for ( prayerName in timingObject ) {
//             var time = timingObject[ prayerName ];
//             console.log( prayerName, time );
//         }
//     }
// }




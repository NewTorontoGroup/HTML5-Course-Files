var APP = {
      hasDatabase : false,
      hasGeolocation : false,
      init : null
  };

  APP.init = function () {
      APP.hasDatabase = !!window.openDatabase;
      console.log('Database? ' + (APP.hasDatabase ? 'Database available!' : 'No database for you!' ));
      APP.hasGeolocation = !!navigator.geolocation;
      console.log('Geolocation?: ' + (APP.hasGeolocation ? 'Geolocation available!' : 'You\'re lost without it.' ));

      // Block 1: Get the user's geolocation.
      if (APP.hasGeolocation) {
         var getLocationBtn = document.getElementById('getLocationButton');
         getLocationBtn.addEventListener('click', function () {
             navigator.geolocation.getCurrentPosition(success, fail);
         });

         var success = function (event) {
             console.log('You\'re at: ' + event.coords.latitude + ' by ' + event.coords.longitude);
         };
         var fail = function (event) {
             console.log(event.message);
         };
     }
 };

 window.onload = APP.init;
  // Wait until window is finished loading or getLocationButton won't yet exist
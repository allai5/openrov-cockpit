/*
  Running this within a function prevents leaking variables
  in to the global namespace.
*/
(function (window) {
  'use strict';
  var widgets = namespace('widgets');
  widgets['orov-lasers'] = {
    name: 'orov-lasers',
    defaultUISymantic: 'system-panel',
    url: 'lasers/orov-lasers.html'
  };
}  // The line below both ends the anonymous function and then calls
   // it passing in the required depenencies.
(window));
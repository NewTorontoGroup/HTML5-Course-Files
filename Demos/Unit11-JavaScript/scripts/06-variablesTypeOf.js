// Show types of various objects
console.log(typeof (0));
//        console.log(typeof ('0'));
console.log(typeof (false));
console.log(typeof (new Date()));
//        console.log(typeof ('hey'));
console.log(typeof ({}));
console.log(typeof ([]));
//        console.log(typeof (null));
//        console.log(typeof (undefined));
console.log(typeof (Math));
//        // How to test if Array?
//        // Polyfill - in case not using ECMAScript 5:
//        if (!Array.isArray) {
//            Array.isArray = function (arg) {
//                return Object.prototype.toString.call(arg) == '[object Array]';
//            };
//        }
//        console.log(Array.isArray([]));
//        console.log(Array.isArray({}));
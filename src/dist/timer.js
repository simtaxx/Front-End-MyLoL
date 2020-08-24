"use strict";
// timer.ts
exports.__esModule = true;
exports.timer = void 0;
var store_1 = require("svelte/store");
var timer = store_1.readable(0, function (set) {
    var current = 0;
    var id = setInterval(function () {
        current += 1;
        set(current);
    }, 1000);
    return function () { return clearInterval(id); };
});
exports.timer = timer;

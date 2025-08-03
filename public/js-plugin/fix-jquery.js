(function () {
    var func = EventTarget.prototype.addEventListener;

    EventTarget.prototype.addEventListener = function (type, fn, capture) {
        this.func = func;
        capture = capture || {};
        capture.passive = false;
        this.func(type, fn, capture);
    };
}());
/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
    $.extend($.expr[':'], {
        'off-top': function(el) {
            return $(el).offset().top < $(window).scrollTop();
        },
        'off-right': function(el) {
            return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
        },
        'off-right1': function(el) {
            /*console.log($(el).offset().left);
			console.log($(el).outerWidth());
			console.log($(window).scrollLeft());
			console.log($(window).width());*/
			//console.log($(el).offset().left + "+" + $(el).outerWidth() + "+" + $(el).outerWidth() + "-" + $(window).scrollLeft() + ">" + $(window).width());
			//console.log($(el).offset().left + $(el).outerWidth() + $(el).outerWidth() - $(window).scrollLeft() + ">" + $(window).width());
			return $(el).offset().left + $(el).outerWidth() + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
        },
        'off-right2': function(el) {
            /*console.log($(el).children().offset().left);
			console.log($(el).children().outerWidth());
			console.log($(window).scrollLeft());
			console.log($(window).width());*/
			//console.log($(el).offset().left + "+" + $(el).children('.subMenu').outerWidth() + "-" + $(window).scrollLeft() + ">" + $(window).width());
			//console.log($(el).offset().left + $(el).children('.subMenu').outerWidth() - $(window).scrollLeft() + ">" + $(window).width());
			return $(el).offset().left + $(el).children('.subMenu').outerWidth() - $(window).scrollLeft() > $(window).width();
        },
        'off-bottom': function(el) {
            return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
        },
        'off-left': function(el) {
            return $(el).offset().left < $(window).scrollLeft();
        },
        'off-screen': function(el) {
            return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
        }
    });
})(jQuery);
/*
 * Copyright (c) 2012 Brendan Stennett
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or 
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($, undefined) {

  function clickHandler(event) {
    var options = event.data;

    // create event object
    var e = new jQuery.Event("click", {
      easyClicked: true
    });

    // check if there are any links
    var links = $(this).find("a");

    // depending on the number of links, trigger one
    if (!event.easyClicked && !$(event.target).is('a')) {

      // get correct link
      target = links.filter('a[data-easy-click-target]')
      if (target.length > 0)
        var link = target;
      else
        var link = links.eq(0);

      // act on link
      if (options.followLinks)
        window.location = link.attr('href');
      else
        link.trigger(e);

    }
  }

  $.fn.easyclick = function(options) {
    options = $.extend({}, {
      followLinks: true
    }, options);
    $(this).live('click', options, clickHandler);
  };

})(jQuery);

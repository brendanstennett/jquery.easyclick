jquery.easyclick
================

A jquery plugin that allows expanding a clickable area without creating additional links

## Usage

    // options (with default values)
    options = {
      followLinks: true   // whether to follow the href of the link or trigger the link handler instead
    };
    $('.easy-click').easyclick(options);

## Sample Markup

    <!-- after easyclick() is called, the entire li element will be clickable -->
    <li class="easy-click">
      <h2><a href="/somehwere">Sample Link</a></h2>
      <img src="somemthing.jpg" />
    </li>

### Multiple Links

If the element has multiple children that are links, then add the `data-easy-clickable` attribute to the 
html element that the behavior should be triggered for.

## License

Copyright (c) 2012 Brendan Stennett

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

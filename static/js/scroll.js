(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('content-design').scrollLeft -= (delta * 160); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById('content-design').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('content-design').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById('content-design').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById('content-design').attachEvent("onmousewheel", scrollHorizontally);
  }
})();

(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('content-dev').scrollLeft -= (delta * 160); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById('content-dev').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('content-dev').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById('content-dev').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById('content-dev').attachEvent("onmousewheel", scrollHorizontally);
  }
})();

(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('content-seo').scrollLeft -= (delta * 160); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById('content-seo').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('content-seo').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById('content-seo').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById('content-seo').attachEvent("onmousewheel", scrollHorizontally);
  }
})();

(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('content-pro').scrollLeft -= (delta * 160); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById('content-pro').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('content-pro').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById('content-pro').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById('content-pro').attachEvent("onmousewheel", scrollHorizontally);
  }
})();
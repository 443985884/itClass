;(function () {
  var jQuery = function (selector) {
      return new jQuery.fn.init(selector)
  }
  jQuery.fn={
      css: function (name, value) { //方法
              return access( this,name, value );
       }
  }
    var access = function( elems,  key, value ) {
        var i;
        for (i=0;i<elems.length;i++){
            elems[i].style[key] = value;
        }
  }
  var init = jQuery.fn.init = function (selector) {
      var slice = Array.prototype.slice
      var dom = slice.call(document.querySelectorAll(selector))
      var i,len = dom?dom.length:0;
      for (i=0;i<len;i++){
          this[i] = dom[i]
      }
      this.length = len
      this.selector = selector
  }
    console.log(jQuery.fn)
    init.prototype =jQuery.fn
    window.jQuery = window.$ = jQuery;


})(window)

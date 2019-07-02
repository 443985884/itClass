;(function () {
    var zepto = {}
    function Z (dom,selector) {
        console.log( dom,selector)
        var i, len =dom ?dom.length : 0

        for (i=0;i<len ;i ++){
            this[i] = dom[i]
        }
        this.length =len
        this.selector =selector || ""

    }
    zepto.Z = function (dom,selector) {
        return new Z (dom,selector)
    }
    zepto.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom,selector)
    }
   var $ = function (selector) {
       return zepto.init(selector)
   }

    $.fn= {
        css:function (key,val) {
            return access( this,key,val );
        }
    }
    var access = function( elems,  key, value ) {
        var i;
        for (i=0;i<elems.length;i++){
            elems[i].style[key] = value;
        }
    }
    console.log(zepto.Z.prototype)
    Z.prototype = $.fn
    window.$ = $
})(window)

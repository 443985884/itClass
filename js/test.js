;(function ($) {

   var  Swiper = function(poster){
        console.log(poster)
    }
    Swiper.prototype={

    }
    Swiper.init=function(d){
        d.each((index,val)=>{
            new this($(val))
        })
    }
    window.Swiper=Swiper
})(jQuery)


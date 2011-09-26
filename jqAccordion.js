(function ($) {
    $.fn.accord = function(options){
        var defaults = {
            headerClass : 'acord_header',
            bodyClass : 'acord_contents',
            triggerEvent : 'click',
            expandClass: 'menu_open',
            collapseClass : 'menu_close',
            defaultOpen : 4
        }
        var opts = $.extend(defaults, options);
        return  this.each(function(){
            _this =  $(this);
            collapseAll(_this, opts);
            bindEvent(_this, opts);
        });
    }
    
    var bindEvent = function(obj, o){
            
        var hs = obj.find('.'+ o.headerClass);
        hs.each(function(){
            var h = $(this);
            var b = h.next('.'+o.bodyClass);   
            h.bind(o.triggerEvent, function(){ 
                // close all
                h.siblings('.'+o.expandClass).each(function(){
                    $(this).removeClass(o.expandClass).addClass(o.collapseClass);
                    $(this).next('.'+o.bodyClass).slideUp();
                });
                if( h.hasClass(o.expandClass) ){
                    collapse(h, b,o);
                }else{
                    expand(h, b, o);
                }
            });
        });
    }
    
    var collapseAll = function(obj, o){
        d = obj.find('.'+o.headerClass+':eq('+ o.defaultOpen +')');
        if(d){
            d.siblings('.'+o.expandClass).each(function(){
                $(this).removeClass(o.expandClass).addClass(o.collapseClass);
                $(this).next('.'+o.bodyClass).slideUp();
            });
        }
        expand(d, d.next('.'+o.bodyClass), o);
    }
    
    var collapse =  function(head, body, o){
        head.removeClass(o.expandClass).addClass(o.collapseClass);
        body.slideUp();
        return false;
    }
    
    var expand =  function(head, body, o){
        head.removeClass(o.collapseClass).addClass(o.expandClass);
        body.slideDown();
        return false;
    }

})(jQuery);
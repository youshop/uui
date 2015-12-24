/**
 * Created by gorden on 15/8/24.
 */
!(function($,win){

    var CheckBox = function(wrapper){
        this.wrapper = wrapper;
        this.bindEvent();
    }

    CheckBox.prototype = {
        bindEvent : function(){
            $(".w-cb").on("click",function(){
               var parent = $(this).parents(".checkbox"),
                   group = parent.attr("data-group-all") || parent.attr("data-group"),
                   isMainGroup = !parent[0].hasAttribute("data-group"),
                   mainGroup = isMainGroup ? parent : $("div[data-group-all='"+group+"']"),
                   slideGroup = isMainGroup ? $("div[data-group='"+group+"']") : parent

                //如果是主check点击

                if(isMainGroup){
                    //toggleSlideGroup
                    toggleSlideGroup(slideGroup,this)
                    return;
                }else{
                    toggleMainGroup(mainGroup,slideGroup,this);
                }


            });


            function toggleSlideGroup(wrapper,obj){
                //应该只有0和1的状态
                var items = $(wrapper).find(".w-cb");
                var maySelect = $(wrapper).find(".w-cb-1").length == items.length ? false : true;

                if(items.length == 0 && $(obj).hasClass("w-cb-0")){
                    changeState(obj,1);
                    return;
                }
                if(items.length == 0 && $(obj).hasClass("w-cb-1")){
                    changeState(obj,0);
                    return;
                }

                if(maySelect){
                    items.each(function(i,v){
                        if(!$(v).hasClass("w-cb-1")){
                            $(v).addClass("w-cb-1").removeClass("w-cb-0");
                        }
                    });
                    changeState(obj,1)
                }else{
                    items.each(function(i,v){
                        if(!$(v).hasClass("w-cb-0")){
                            $(v).addClass("w-cb-0").removeClass("w-cb-1");
                        }
                    });
                    changeState(obj,0)
                }

            }

            function toggleMainGroup(wrapper,current,obj){
                var thisState = $(obj).hasClass("w-cb-0") ? false : true;
                !thisState ? (changeState(obj,1)) : (changeState(obj,0));
                //trigger MainGroup

                var isALLSelect = $(current).find(".w-cb-1").length ==  $(current).find(".w-cb").length,
                    isALLNOSelect = $(current).find(".w-cb-0").length ==  $(current).find(".w-cb").length;

                if(isALLSelect){
                    changeState($(wrapper).find(".w-cb"),1);
                    return;
                }
                if(isALLNOSelect){
                    changeState($(wrapper).find(".w-cb"),0);
                    return;
                }
                changeState($(wrapper).find(".w-cb"),2);
                return;
            }

            function changeState(ele,tag){
                var eleStr = $(ele).attr("class"),
                    des = eleStr.replace(/(.+ )(w-cb.+)/,"$1w-cb-"+tag);
                $(ele).attr("class",des);
            }

        }


    }

    win.CheckBox = CheckBox

})($,window);
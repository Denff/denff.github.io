window.lightGallery=function(t,l){$(t).find(l).each(function(){$(this).attr("data-sub-html",$(this).find("img").attr("title"))}),$(t).lightGallery({selector:l,download:!1,fullScreen:!1,zoom:!1,share:!1,thumbnail:!0})};
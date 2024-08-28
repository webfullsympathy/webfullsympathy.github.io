window.onload = function(){
    document.body.addEventListener('right-click-menu',function(e){
        document.getElementById('right-click-menu').style.left=e.pageX+"px";
        document.getElementById('right-click-menu').style.top=e.pageY+"px";
        document.getElementById('right-click-menu').style.display="block";
    });
}
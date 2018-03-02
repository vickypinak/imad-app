console.log('Loaded!');

var img = document.getElementById('img_madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function ()
{
  var interval = setInterval(moveRight,50);  
};

//onButtonClick

var nxtCount = 0;
var Counter = document.getElementById('counter');
counter.onclick = function(){
    var span = document.getElementById('count');
    nxtCount=nxtCount+1;
    span.innerHTML = nxtCount;
};
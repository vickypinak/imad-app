console.log('Loaded!');
alert('PageLoaded!');

var img = document.getElementById('img_madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 5;
}
img.onclick = function ()
{
  var interval = setInterval(moveRight,50);  
};
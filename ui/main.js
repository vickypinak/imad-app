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

//onButtonClickCountIncrease

var request = XMLHttpRequest();

request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE)
     {
         if(request.status===200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
     }
};

request.open('GET','http://www.pinakbagchi115.imad.hasura-app.io',true);
request.send(null);
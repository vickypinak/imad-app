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

var button = document.getElementById('counter');

    button.onclick = function(){
        
        var request1 = new XMLHttpRequest();
        
        request1.onreadystatechange = function() {
        if(request1.readyState === XMLHttpRequest.DONE)
            {
             if(request1.status===200)
                {
                    var counter = request1.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
            }
        };
        
        request1.open('GET','http://pinakbagchi115.imad.hasura-app.io/counter',true);
        request1.send(null);
};

// Searchbox

var inputname = document.getElementById('name-box');
var enteredName = inputname.value;

var submit_search = document.getElementById('submit-name');
submit_search.onclick = function(){
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0;i<names.length;i++) {
        list+='<li>'+names[i]+'</li>';
        console.log(JSON.stringfy(list));
    }
    var submit_list = document.getElementById('name-list');
    submit_list.innerHTML = list;
};


 










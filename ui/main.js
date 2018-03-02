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
        
        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE)
            {
             if(request.status===200)
                {
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
            }
        };
        
        request.open('GET','http://pinakbagchi115.imad.hasura-app.io/counter',true);
        request.send(null);
};

// Searchbox
/*    var nameInput = document.getElementById('name-box');
    var name_set = nameInput.value;
    var btn_submitName = document.getElementById('submit-name');
    btn_submitName.onclick = function() {
        var names = ['name1','name2','name3','name4','name5'];
        var list = '';
        for(var i = 0;i<names.length;i++){
        list+= '<li>' + names[i] + '</li>';
        }
        var ui = document.getElementById('name-list');
        ui.innerHTML = list;
    };  */

var button_submit = document.getElementById('submit-name');
    button_submit.onclick = function() {
        
        var request = new XMLHttpRequest();
        request.onsteadystatechange = function(){
            
            if(request.steadystate === XMLHttpRequest.DONE)
                {
                    if(request.status === 200) {
                        var names = responseText;
                        names = JSON.parse(names);
                        var list= '';
                        for(var i=0;i<names.length;i++)
                        list+= '<li>' + names + '</li>';
                        var ui = document.getElementById('anme-list');
                        ui.innerHTML = list;
                    }
                }
            
        };
        
        var namelist = document.getElementById('name-box');
        var name = namelist.value;
        request.open('GET','http://pinakbagchi115.imad.hasura-app.io/submit-name/' + name,true);
        request.send(null);
    };










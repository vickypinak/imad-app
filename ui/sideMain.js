var button = document.getElementById('nameSubmit');
var names = ['name1','name2','name3','name4','name5'];
var list = '';
button.onClick = function() {
 for(var i = 0;i<names.lenght;i++)
 {
     list+= '<li' + names[i] + '</li>';
 }
 var returnList = document.getElementById('list_id');                     //Returns the list to the ui in search.html
 returnList.innerHTML = list;
};
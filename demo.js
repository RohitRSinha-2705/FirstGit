//var title = document.getElementById("header-title");
//title.style.borderBottom = 'solid 3px #000';
//var addItem = document.querySelector('.title');
//addItem.style.fontWeight = '900';

// get elements by class
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = "green";

for (var i=0; i<items.length; i++){
    items[i].style.fontWeight ='bold';
}
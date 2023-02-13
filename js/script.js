
const listRef = document.querySelector('#myUL');
const inputRef = document.querySelector('#myInput');

const btnAddRef = document.querySelector('.js-addBtn');
// console.log(btnAddRef);
btnAddRef.addEventListener('click', onAddBtnClick);

function onAddBtnClick(event) { 

	if (inputRef.value === '') { 
		return alert('Please enter a task');	
	}

	const itemRef = `<li>${inputRef.value}<span class="close">\u00D7</span></li>`;
	inputRef.value = '';
	return listRef.insertAdjacentHTML("afterbegin", itemRef);
	
}

listRef.addEventListener('click', onBtnClose);
function onBtnClose(event) { 
	
	if (event.target.nodeName !== 'SPAN') { return }
	event.target.parentNode.remove();

}

listRef.addEventListener('click', onTaskChecked);
function onTaskChecked(event) { 
	if (event.target.nodeName !== 'LI') { return }
	event.target.classList.toggle('checked');
}


























// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }


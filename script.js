const ul = document.getElementById('ul');
const text = document.getElementById('text');
const search = document.getElementById('search');
const btn = document.getElementById('btn');

search.addEventListener('keyup', DOResearch);

btn.addEventListener('click', myFunction);
function myFunction(){
   var li = document.createElement('li');
   var alen = text.value;
   li.textContent = alen;
   var span = document.createElement('i');
   span.addEventListener('click', removeFunc);
   span.setAttribute('class','fas two delete fa-trash-alt');
  li.append(span);
  var h3 = document.createElement('h3');
  var date = new Date();
  let shortMonth = date.toLocaleString('en-us', { year:"numeric", month:"short", day:"numeric" });
  h3.textContent = shortMonth;
  li.append(h3);
  ul.appendChild(li);
  text.value = "";
}
function removeFunc(element){
    if(element.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){
            var li = element.target.parentElement;
            ul.removeChild(li);
        }
    }
}

function  DOResearch(e){
   var text = e.target.value.toLowerCase();
   var li = document.getElementsByTagName('li');
  Array.from(li).forEach( item => {
    var iterName = item.firstChild.textContent;
   if(iterName.toLowerCase().indexOf(text) != -1){
       item.style.display = 'block';
   }else{
    item.style.display = 'none';
   }
  });
}
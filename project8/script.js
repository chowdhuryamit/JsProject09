const inputBox=document.getElementById('inputBox');
const listContainer=document.getElementById('listContainer');
const addButton=document.getElementById('addButton');

addButton.addEventListener('click',(e)=>{
  if (inputBox.value=='') {
    alert('You must write someting to add');
  }
  else{
    let li=document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);

    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span)
  }
  inputBox.value='';
  saveData();
})

listContainer.addEventListener('click',(e)=>{
    if (e.target.tagName==='LI') {
      if (e.target.getAttribute('class')===null) {
        e.target.setAttribute('class','checked');
      }
      else{
        e.target.removeAttribute("class");
      }
    }
    else{
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData() {
  localStorage.setItem('data',listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML=localStorage.getItem('data');
}
showTask();
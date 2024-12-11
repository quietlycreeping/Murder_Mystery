//array of all classes of checkboxes
var boxes = Array.from(document.querySelectorAll('[id^="objective"]'));

//array of all checkbox ids
var boxID = [];
for (let x=0; x < boxes.length; x++)
    {
        let id = boxes[x].id; 
        boxID.push(id);
    }


//save boxes
const label = document.querySelector("flexCheckDefault");

label.addEventListener('click',() => 
{
    var isChecked = [];
    for (let x=0; x < boxes.length; x++)
    {
        isChecked.push(boxes[x].checked);
    }
    let checkedString = JSON.stringify(isChecked);
    localStorage.setItem("checkboxes", checkedString)
});

console.log(localStorage);

/*
var isChecked = [];
for (let x=0; x < boxes.length; x++)
{
    isChecked.push(boxes[x].checked);
}
let checkedString = JSON.stringify(isChecked);
localStorage.setItem("checkboxes", checkedString)
*/
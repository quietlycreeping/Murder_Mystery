//array of all classes of checkboxes
var boxes = Array.from(document.querySelectorAll('[id^="objective"]'));

//array of all checkbox ids
var boxID = [];
for (let x=0; x < boxes.length; x++)
    {
        let id = boxes[x].id; 
        boxID.push(id);
    }

//load checkbox state from Local Storage
let checkedStringStorage = localStorage.getItem("checkboxes2");
let isCheckedStorage = JSON.parse(checkedStringStorage);

for (let x=0; x < isCheckedStorage.length; x++)
    {
        document.getElementById(boxID[x]).checked = isCheckedStorage[x];
    }        

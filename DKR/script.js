document.getElementById("input-email").value = getSavedInputValue("input-email");    // set the value to this input

//Save the value function - save it to localStorage as (ID, VALUE)
function saveInputValue(e) {
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedInputValue(v) {
    if (!localStorage.getItem(v)) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}
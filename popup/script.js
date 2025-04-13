function showAlert(){
    window.alert("Hello world")
}

function showConfirm(){
    let txt;
    if(window.confirm("Press a button")){
        txt = " You pressed ok!";
    } else{
        txt = " You pressed ok!";
    }

    confirm.innerHTML = txt;
}


function showPrompt(){
    let person = window.prompt("please enter your name: ", "Harry potter");
    let txt;

    if(person === null || person === ""){
        txt = "User cancelled the prompt!";
    } else{
        txt = "Hello" + person + "! How are you?";
    }

    prompt.innerHTML = txt;
}

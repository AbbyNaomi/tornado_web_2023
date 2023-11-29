function toDo_1() {
    console.log("Download Started");
}

function toDo_2() {
    setTimeout(() =>{
        console.log("Downloading...");
    },3000);
    
}

function toDo_3() {
    console.log("Download finished");
}

toDo_1();
toDo_2();
toDo_3();
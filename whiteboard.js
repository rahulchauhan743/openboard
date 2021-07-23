let canvas = document.querySelector("#canvas");


canvas.width = window.innerWidth; //providing canvas its width which is equal to window width
canvas.height = window.innerHeight - 100; //providing canvas its height which is equal to window height minus upper part



//here we add eventlistener as on resizing canvas changes it size
//so when window resize it again occupy same space
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    drawLinesFromDB();
})


// a context object which provides fun for 2d drawing
let ctx = canvas.getContext("2d");

let redoLinesDB = [];
let isPenDown = false;

let linesDB = [];

let line = [];

//The mousedown event is fired at an Element when a 
//pointing device button is pressed while the pointer is inside the element.

canvas.addEventListener("mousedown", function(e) {
    if (redoLinesDB.length != 0) {
        redoLinesDB = [];
    }


    isPenDown = true;

    let x = e.clientX;
    let y = e.clientY - 100;

    ctx.beginPath(); //this function tell to draw a new line

    ctx.moveTo(x, y); //this tells start point from where the line is started to be drawn

    let pointObject = {
        x: x,
        y: y,
        type: "md",
        lineWidth: ctx.lineWidth,
        strokeStyle: ctx.strokeStyle, //on that point what was olor and width
    }

    line.push(pointObject);

})

//The mousemove event is fired at an element when a pointing device 
//(usually a mouse) is moved while the cursor 's hotspot is inside it.

canvas.addEventListener("mousemove", function(e) {

    if (isPenDown == true) {
        //e.clientX gives x coordinated where mouse move is done same for clientY and same for othres
        let x = e.clientX;
        let y = e.clientY - 100;

        ctx.lineTo(x, y); //this tells end point till where the line is ended to be drawn

        ctx.stroke(); //this drws the actuall line


        let pointObject = {
            x: x,
            y: y,
            type: "mm"
        }

        line.push(pointObject);
    }

})

//The mouseup event is fired at an Element when a button on a pointing device 
//(such as a mouse or trackpad) is released while the pointer is located inside it

canvas.addEventListener("mouseup", function(e) {

    isPenDown = false;

    linesDB.push(line);

    line = [];

    console.log(linesDB);
})
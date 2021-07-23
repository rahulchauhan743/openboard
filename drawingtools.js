let pen = document.querySelector("#pen");

let eraser = document.querySelector("#eraser");

let penOptions = pen.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");


let penSize = penOptions.querySelector("#pensize");
let penColors = penOptions.querySelectorAll(".pen-colors div");

let eraserSize = eraserOptions.querySelector("#erasersize");


let currentPenSize = 1;
let currentPenColor = "black";
let currentEraserSize = 1;


penSize.addEventListener("change", function() {
    //handle pen size

    let penSizeValue = penSize.value;

    //set pencil size
    currentPenSize = penSizeValue;

    ctx.lineWidth = currentPenSize;

})

for (let i = 0; i < penColors.length; i++) {

    penColors[i].addEventListener("click", function(e) {
        let penColor = e.target.className;

        currentPenColor = penColor

        ctx.strokeStyle = currentPenColor; //change color of line


    })

}


eraserSize.addEventListener("change", function() {

    let eraserSizeValue = eraserSize.value;

    currentEraserSize = eraserSizeValue;

    ctx.lineWidth = currentEraserSize;


})


pen.addEventListener("click", function() {
    if (pen.classList.contains("active-tool")) {
        //pen already active hai
        //pen tool options open honge
        if (penOptions.classList.contains("hide")) {
            penOptions.classList.remove("hide"); // remove hide class from penOptions
        } else {
            penOptions.classList.add("hide");
        }


    } else {
        //pen is not active
        //make pen active

        eraser.classList.remove("active-tool");
        eraser.classList.add("fade");

        eraserOptions.classList.add("hide");


        pen.classList.add("active-tool");
        pen.classList.remove("fade");

        ctx.lineWidth = currentPenSize;
        ctx.strokeStyle = currentPenColor;
    }


})


eraser.addEventListener("click", function() {
    if (eraser.classList.contains("active-tool")) {
        //eraser already active hai

        if (eraserOptions.classList.contains("hide")) {
            eraserOptions.classList.remove("hide"); // remove hide class from penOptions
        } else {
            eraserOptions.classList.add("hide");
        }
    } else {
        //eraser is not active
        //make eraser active

        pen.classList.remove("active-tool");
        pen.classList.add("fade");

        penOptions.classList.add("hide");

        eraser.classList.add("active-tool");
        eraser.classList.remove("fade");

        ctx.strokeStyle = "white";

        ctx.lineWidth = currentEraserSize;

    }


})
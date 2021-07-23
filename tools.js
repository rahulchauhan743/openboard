let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", undoLine);

redo.addEventListener("click", redoLine);




function undoLine() {
    if (linesDB.length == 0) {
        return;
    }

    let undoLine = linesDB.pop();

    redoLinesDB.push(undoLine);

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLinesFromDB();


}

function redoLine() {
    if (redoLinesDB.length == 0) {
        return;
    }
    let currentLineWidth = ctx.lineWidth;
    let currentStokeStyle = ctx.strokeStyle;

    let redoLine = redoLinesDB.pop();

    for (let i = 0; i < redoLine.length; i++) {
        let pointObject = redoLine[i];

        if (pointObject.type == "md") {
            //saving the size and color at time of redo
            ctx.lineWidth = pointObject.lineWidth;
            ctx.strokeStyle = pointObject.strokeStyle;

            ctx.beginPath();
            ctx.moveTo(pointObject.x, pointObject.y);

        } else {

            ctx.lineTo(pointObject.x, pointObject.y);
            ctx.stroke();

        }
    }
    ctx.lineWidth = currentLineWidth;
    ctx.strokeStyle = currentStokeStyle;
    linesDB.push(redoLine);


}


function drawLinesFromDB() {
    //intiial settings are saved so that after work is done so original settings are restored
    let currentLineWidth = ctx.lineWidth;
    let currentStokeStyle = ctx.strokeStyle;

    for (let i = 0; i < linesDB.length; i++) {
        let line = linesDB[i];

        for (let j = 0; j < line.length; j++) {
            let pointObject = line[j];

            if (pointObject.type == "md") {
                ctx.lineWidth = pointObject.lineWidth;
                ctx.strokeStyle = pointObject.strokeStyle;

                ctx.beginPath();

                ctx.moveTo(pointObject.x, pointObject.y);

            } else {
                ctx.lineTo(pointObject.x, pointObject.y);
                ctx.stroke();
            }
        }

    }

    //original settings are restored
    ctx.lineWidth = currentLineWidth;
    ctx.strokeStyle = currentStokeStyle;

}
let photoDiv = document.querySelector("#photo");

let photoUploadInput = document.querySelector("#photo-upload");

let downloadDiv = document.querySelector("#download")

photoDiv.addEventListener("click", function(e) {

    photoUploadInput.click();
});


photoUploadInput.addEventListener("change", function(e) {

    let fileObj = e.target.files[0];

    let filePath = URL.createObjectURL(fileObj, { type: "image/jpg" })

    let img = document.createElement("img")

    img.setAttribute("src", filePath);

    img.classList.add("sticky-image")

    addSticky(img);
})

downloadDiv.addEventListener("click", function(e) {

    //convert canvas to image
    let imagePath = canvas.toDataURL("image/jpg")


    let atag = document.createElement("a");

    //downlad image named="downloaded.jpg" and href=imagepath 
    atag.download = "downloaded.jpg";

    atag.href = imagePath;

    //then click on a tag
    atag.click();
})
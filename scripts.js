// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");
// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        console.log(evt);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

const sendMessageButton = document.getElementById("pat");
sendMessageButton.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://discord.com/api/webhooks/1077831699318177912/bkk2FM-T2hvjsdNeyd4y-SwDx3d0i6q0gjHkHEvs1BKeFyqWbyZWfrrQgLlzMlenP0Pp");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    content: "Pat Pat"
  }));
});

const sendMessageButton = document.getElementById("checks");
sendMessageButton.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://discord.com/api/webhooks/1077837990795165716/YjFsGSEAbqUd7IDc3i5vFAYwJuPj5fdi6K8aVeXLtbzoOMIUd84QczDaUrHDQtyUjA83");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    content: "Schedule"
  }));
});

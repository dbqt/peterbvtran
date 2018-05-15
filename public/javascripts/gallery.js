var grid = document.querySelector('.grid');
var msnry;

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: false
  });
});

// Get the modal
var modal = document.getElementById('modalAlbum');
var modalContent = document.getElementById('custom-modal-content-album');

function albumclick(album) {

    while(modalContent.firstChild) {
      modalContent.removeChild(modalContent.firstChild);
    }

    allImgs = JSON.parse(album.getAttribute("data-album"));

    var name = document.createElement("H2");
    var nameText = document.createTextNode(allImgs.name);
    var description = document.createTextNode(allImgs.description);
    var line = document.createElement("HR");
      
    name.appendChild(nameText);

    modalContent.appendChild(name);
    modalContent.appendChild(description);
    modalContent.appendChild(line);

    console.log(allImgs);
    allImgs.imgs.forEach(function(element) {
      var desc = document.createTextNode(element.description);
      var descNode = document.createElement("P");
      descNode.setAttribute("style", "text-align:center");
      descNode.appendChild(desc);
      modalContent.appendChild(descNode);

      var x = document.createElement("IMG");
      x.setAttribute("src", element.imgUrl);
      x.setAttribute("width", "100%");
      modalContent.appendChild(x);

      var br = document.createElement("P");
      modalContent.appendChild(br);
      
    }, this);
    modal.style.display = "block";
}




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//new LuminousGallery(document.querySelectorAll('.imagePop'));
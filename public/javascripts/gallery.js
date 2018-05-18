var grid = document.querySelector('.grid');
var msnry;

notIE=document.getElementById&&!document.all

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
//document.getElementById('custom-modal-content-album');

function albumclick(album) {

    //allImgs = JSON.parse(album.getAttribute("data-album"));
    
    //var w = window.open("project/"+album.getAttribute("index"));
    window.location.href = "project/"+album.getAttribute("index");
    /*var modalContent = w.document.createElement("DIV");
    modalContent.className = "project_content_core";

   
    
    

    

    var name = w.document.createElement("H2");
    var nameText = w.document.createTextNode(allImgs.name);
    var description = w.document.createElement("P");
    var descriptionText = w.document.createTextNode(allImgs.description);
    var line = w.document.createElement("HR");
      
    name.appendChild(nameText);
    description.appendChild(descriptionText);

    modalContent.appendChild(name);
    modalContent.appendChild(description);
    modalContent.appendChild(line);

    console.log(allImgs);
    allImgs.imgs.forEach(function(element) {
      var desc = w.document.createTextNode(element.description);
      var descNode = w.document.createElement("P");
      descNode.setAttribute("style", "text-align:center");
      descNode.appendChild(desc);
      modalContent.appendChild(descNode);

      var x = w.document.createElement("IMG");
      x.setAttribute("src", element.imgUrl);
      x.setAttribute("width", "100%");
      modalContent.appendChild(x);

      var br = w.document.createElement("BR");
      modalContent.appendChild(br);
      modalContent.appendChild(br);
      modalContent.appendChild(br);
      modalContent.appendChild(br);
      modalContent.appendChild(br);
      console.log("before");
      console.log(modalContent);

      if(notIE){
        w.onload=function(){
          w.document.getElementById("project_content").appendChild(modalContent) 
          console.log("after");
          console.log(w.document);
        }
        
        }
      else{
        
        if(w.document.readyState=="complete"){
          w.document.body.appendChild(modalContent) 
        }
      }
      
    }, this);
    //modal.style.display = "block";*/
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
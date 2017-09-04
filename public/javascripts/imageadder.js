// capture and nulllify all submit events
var form = document.getElementById( "showcase-form" );
form.addEventListener( "submit", function( e ) {
	e.preventDefault();
}, false);

var form = document.getElementById( "gallery-form" );
form.addEventListener( "submit", function( e ) {
	e.preventDefault();
}, false);

// attach events
document.getElementById("showcase-post-btn").onclick = postShowcase;
document.getElementById("gallery-post-btn").onclick = postGallery;
document.getElementById("add-image-btn").onclick = addImage;
document.getElementById("del-image-btn").onclick = delImage;

function postGallery() {
	// create object using form elements
  var obj = new Object();
  obj.name = document.getElementById("gallery-name").value;
  obj.description = document.getElementById("gallery-description").value;
  obj.imgUrl = document.getElementById("gallery-img").value;
  obj.code = document.getElementById("secret-code-gallery").value;

  // generate array of images
	var allImgs = document.getElementById("images").children;
	var imgsObj = [];
	for(var i = 0; i < allImgs.length; i++) {
		var imgObj = new Object();
		imgObj.imgUrl = allImgs[i].firstChild.lastChild.value;
		imgObj.description = allImgs[i].lastChild.lastChild.value;
		imgsObj.push(imgObj);
	}
	obj.imgs = imgsObj;

	// create json object and post it
	var jsonString= JSON.stringify(obj);
	console.log(jsonString);
	console.log(obj);
	$.ajax({
		type: "POST",
		url: "/api/gallery",
		data: jsonString,
		contentType : 'application/json',
		success: function (data, textStatus, XmlHttpRequest) {
                    alert("Image added to gallery!")
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Error: "+errorThrown);
                }
	});

}

function postShowcase() {
	// create object using form elements
	var obj = new Object();
  obj.imgUrl = document.getElementById("showcase-img").value;
  obj.code = document.getElementById("secret-code").value;

	// create json object and post it
	var jsonString= JSON.stringify(obj);
	console.log(jsonString);
	console.log(obj);
	$.ajax({
		type: "POST",
		url: "/api/showcase",
		data: jsonString,
		contentType : 'application/json',
		success: function (data, textStatus, XmlHttpRequest) {
                    alert("Image added to showcase!")
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Error: "+errorThrown);
                }
	});

}

function addImage() {
	// duplicate last image div
	var allImgs = document.getElementById("images");
	var img = allImgs.lastChild.cloneNode(true);
	allImgs.appendChild(img);
}

function delImage() {
	// remove last image
	var allImgs = document.getElementById("images");
	if(allImgs.childElementCount > 1){
		allImgs.removeChild(allImgs.lastChild);
	}
}
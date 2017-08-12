// capture and nulllify all submit events
var form = document.getElementById( "blog-form" );
form.addEventListener( "submit", function( e ) {
	e.preventDefault();
}, false);

// attach events
document.getElementById("post-btn").onclick = postBlog;
document.getElementById("add-image-btn").onclick = addImage;
document.getElementById("del-image-btn").onclick = delImage;

function postBlog() {
	// create object using form elements
	var obj = new Object();
	obj.title = document.getElementById("blog-title").value;
	obj.date  = document.getElementById("blog-date").value;
	obj.text = document.getElementById("blog-text").value;
	obj.code = document.getElementById("secret-code").value;

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
		url: "/api/blog",
		data: jsonString,
		contentType : 'application/json',
		success: function (data, textStatus, XmlHttpRequest) {
                    alert("Blog post created!")
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
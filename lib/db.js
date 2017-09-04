var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var ShowcaseImage = new Schema({
    imgUrl : String
})

var DetailedImage = new Schema({
    imgUrl : String,
    description : String
});

var GalleryAlbum = new Schema({
    name : String,
    description : String,
    coverUrl : String,
    imgs : [DetailedImage]
})

var Showcase = new Schema({
    imgs : [DetailedImage]
});

var Blog = new Schema({
    id : String,
    title : String,
    date : Date,
    text : String,
    imgs : [DetailedImage]
});

var Gallery = new Schema({
    imgs : [DetailedImage]
});

mongoose.model( 'Showcase', Showcase );
mongoose.model( 'ShowcaseImage', ShowcaseImage );
mongoose.model( 'GalleryAlbum', GalleryAlbum );
mongoose.model( 'Blog', Blog );
mongoose.model( 'Gallery', Gallery );
mongoose.model( 'DetailedImage', DetailedImage );
connectSecure("binhvinh","peter4545645");
// user: 'epicUser' 
// password: 'epicpassword1'
// mongodb://<dbuser>:<dbpassword>@ds139949.mlab.com:39949/peterbvtran

function connectPublic(){
    mongoose.connect( 'mongodb://public:public@ds139949.mlab.com:39949/peterbvtran' );
}

function connectSecure(user, pass){
    mongoose.connect( 'mongodb://'+user+':'+pass+'@ds139949.mlab.com:39949/peterbvtran' );
}



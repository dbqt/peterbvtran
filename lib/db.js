var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var Showcase = new Schema({
 title : String,
 imgUrl : String
});

var Blog = new Schema({
    title : String,
    date : Date,
    text : String,
    imgs : [DetailedImage]
});

var Gallery = new Schema({
    mainImgUrl : String,
    imgs : [DetailedImage],
    text : String
});

var DetailedImage = new Schema({
    imgUrl : String,
    description : String
});

mongoose.model( 'Showcase', Showcase );
mongoose.model( 'Blog', Blog );
mongoose.model( 'Gallery', Gallery );
mongoose.model( 'DetailedImage', DetailedImage );
// user: 'epicUser' 
// password: 'epicpassword1'
// mongodb://<dbuser>:<dbpassword>@ds139949.mlab.com:39949/peterbvtran

function connectPublic(){
    mongoose.connect( 'mongodb://public:public@ds139949.mlab.com:39949/peterbvtran' );
}

function connectSecure(user, pass){
    mongoose.connect( 'mongodb://'+user+':'+pass+'@ds139949.mlab.com:39949/peterbvtran' );
}


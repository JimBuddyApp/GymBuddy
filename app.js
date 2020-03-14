/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var methodOverride = require('method-override');
var session = require('express-session');
var errorHandler = require('errorhandler');
const multer = require("multer") 

// Require routes here
var login = require('./routes/login');
var index = require('./routes/index');
var friends = require('./routes/friends');
var profile = require('./routes/profile');
var account = require('./routes/account');
var settings = require('./routes/settings');
var mentormatch = require('./routes/mentormatch');
var signup = require('./routes/signup');
var edit = require('./routes/edit');
var register = require('./routes/register.js');
var customize = require('./routes/customize');

var app = express();

// All environments
app.set('port', process.env.PORT || 3000);

// View engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


if ('development' == app.get('env')) {
    app.use(errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/signup', signup.view);
app.get('/register', register.register);
app.get('/customize', customize.customize);
app.get('/main', index.view);
app.get('/viewAlt', index.viewAlt);
app.get('/sortMentors', index.viewSortMentors);
app.get('/sortBuddies', index.viewSortBuddies);
app.get('/friends', friends.view);
app.get('/profile', profile.view);
app.get('/edit', edit.view);
app.get('/settings', settings.view);
app.get('/mentormatch', mentormatch.view);
app.get('/addfriend', account.addfriend);
app.get('/removefriend', account.removefriend);
app.get('/:userName', account.view);   


app.use(express.static(path.join(__dirname, 'public')));
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
})

    
//var upload = multer({ dest: "/public/images/uploads" }) 
// If you do not want to use diskStorage then uncomment it 
    
var storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 

      // Uploads is the Upload_folder_name 
      cb(null, "uploads") 
  }, 
  filename: function (req, file, cb) { 
    cb(null, file.fieldname + "-" + Date.now()+".jpg")
  } 
}) 
     
// Define the maximum size for uploading 
// picture i.e. 1 MB. it is optional 
const maxSize = 1 * 1000 * 1000; 
  
var upload = multer({  
  storage: storage, 
  limits: { fileSize: maxSize }, 
  fileFilter: function (req, file, cb){ 
  
      // Set the filetypes, it is optional 
      var filetypes = /jpeg|jpg|png/; 
      var mimetype = filetypes.test(file.mimetype); 

      var extname = filetypes.test(path.extname( 
                  file.originalname).toLowerCase()); 
      
      if (mimetype && extname) { 
          return cb(null, true); 
      } 
    
      cb("Error: File upload only supports the "
              + "following filetypes - " + filetypes); 
    }  

// mypic is the name of file attribute 
}).single("mypic");        

var data = require('./profile');
app.use('/uploads', express.static('uploads'));

app.post("/uploadProfilePicture",function (req, res, next) { 
      
  // Error MiddleWare for multer file upload, so if any 
  // error occurs, the image would not be uploaded! 
  upload(req,res,function(err) { 

      if(err) { 

          // ERROR occured (here it can be occured due 
          // to uploading image of size greater than 
          // 1MB or uploading different file type) 
          res.send(err) 
      } 
      else { 

          // SUCCESS, image successfully uploaded
          console.log(req.file.filename);
          data.imageURL = '../uploads/' + (req.file.filename);
          console.log(data);
          res.redirect('edit');
      } 
  }) 
})
const { response, request } = require('express');
const express = require('express');
const session = require('express-session');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


const mongoose = require('mongoose');
const Question = require('./models/question');
const User = require('./models/user');


mongoose.connect("mongodb+srv://ogpurp:dauphine2021420@cluster0.c1vb6.mongodb.net/dbquiz?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connecté à la database');
    })
    .catch((error) => {
        console.log('Impossible de se co à la database');
        console.log(error);
    });


app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "mySecretKey", cookie: { maxAge: 24 * 60 * 60 * 1000 } }));






// GET /questions 
app.get('/questions', (request, response) => {
    console.log("to");
    Question.find((error, questions) => {
        if (error) return console.log(err);
        response.json(questions);

    }
    );
});







// PUT /question/:id
app.put('/updatequestion', (request, response) => {

    let requestQuestion = request.body;
    let newQuestion = new Question({
        __id: requestQuestion._id,
        questionTitle: requestQuestion.questionTitle,
        questionType: requestQuestion.questionType,
        answers: requestQuestion.answers,

    })
    Question.updateOne({ _id: requestQuestion._id }, newQuestion, (error, question) => {


    });
});


app.put('/updateuser', (request, response) => {
    console.log("ici");
    let requestUser = request.body;
    console.log(requestUser)
    let newUser = new User({
        login:requestUser.login,
        fullName:requestUser.fullName,
        password:requestUser.password

    })
    User.updateOne({ login: requestUser.login }, newUser, (error, user) => {

    });
});


// DELETE /question/:id
app.delete('/deletequestion/:id', (request, response) => {
    //let requestQuestion = request.body;

    Question.deleteOne({ _id: request.params.id }, (error) => {
        if (error) {
            response.status(404).json({ error: error });
        }
        //response.status(201).json({ msg: "ok" });
    }

    );
});

app.delete('/deleteuser/:login', (request, response) => {
    //let requestQuestion = request.body;

    User.deleteOne({ login: request.params.login }, (error) => {
        if (error) {
            response.status(404).json({ error: error });
        }
        response.status(201).json({ msg: "ok" });
    }

    );
});
//Login
//Login
app.post('/login', (request, response) => {

    User.findOne({ login: request.body.login, password: request.body.password }, (error, user) => {
        if (error) response.status(401).json({ msg: "Error" });
        if (!user) response.status(401).json({ msg: "Wrong Login" });

        if (user!=null){
        request.session.id = user.id;
        
        response.status(200).json({ login: user.login, fullName: user.fullName });
        }
    }



    );
});

//Register
app.post('/register', (request, response) => {

    var newUser = new User({
        login: request.body.login,
        password: request.body.password,
        fullName: request.body.fullName,
    })


    User.countDocuments({ login: newUser.login }, function (err, count) {
        if (err) return response.status(401).json({ msg: "Error" });
        if (count > 0) {
            return response.status(409).json({ msg: "Login Already exist" });
        }
        else {
            newUser.save((error, user) => {
                if (error) return console.log(err);
                request.session.id = user.id;
                response.status(200).json({ login: user.login, fullName: user.fullName });
            })

        }


    }



    );
});

app.post('/addquestion', (request, response) => {
    console.log("yo");
    let requestQuestion = request.body;
    let newQuestion = new Question({

        _id: requestQuestion._id,
        questionTitle: requestQuestion.questionTitle,
        questionType: requestQuestion.questionType,
        answers: requestQuestion.answers,


    })
    console.log("ici");
    newQuestion.save((error, question) => {
        console.log("ici2");
        console.log(question);
        if (error) { return console.log(error); }

        response.json(question);

    });
});


//logout 
app.get('/logout', (request, response)  => {
      
       request.session.destroy( error => {
        if (error) return response.status(409).json({ msg: "error" });
        //response.redirect(["http://localhost:4200/login"]);
      
        response.status(200).json({ msg: "Logout Ok" });


    })
});

//isloggged
app.get("/islogged", (request, response) => {
   
    console.log(!request.session.id)
    if (!request.session.id) return response.status(401).json();

    User.findOne({ id: request.session.id }, (error, user) => {
      
        if (error) response.status(401).json({ msg: "Error" });
        if (!user) response.status(401).json({ msg: "Error Login" });
        request.session.id = user.id;
        response.status(200).json(user);
       

    }



    );

});


app.listen(5000, () => { console.log("Listening on port 5000") });
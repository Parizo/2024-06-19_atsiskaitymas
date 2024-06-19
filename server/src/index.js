require('./db/mongoose');

const express = require('express');

const Blog = require('./models/blog')

const UserModel = require('./models/Users')

const Account = require('./models/account')




const app = express();

const cors = require('cors')




app.use(express.json());
app.use(cors())


//visi objektai is blogs
app.get('/blogs', (req, res) => {
    Blog.find({}).then((blogs) => {
        res.send(blogs);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

//iesko pagal id
app.get('/blogs/:id', (req, res) => {
   Blog.findById(req.params.id).then((blog) => {
    if (!blog) {
        return res.status(404).send();
    }
    res.send(blog);
   }).catch((error) => {
    res.status(500).send(error);
   })
})
//įkelti naujus duomenis
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((blog) => {
        res.status(201).send(blog);
}).catch((error) => {
    res.status(400).send(error);
})
// Blog.create(req.body).then((blog) => {
//     res.status(201).send(blog);
//     }).catch((error) => {
//     res.status(400).send(error);
//     });

// Blog.insertMany(req.body).then((blogs) => {
//     res.status(201).send(blogs);
// }).catch((erorr) => {
//     res.status(400).send(error);
// })
})

//atnaujiti vieną ar daugiau duomenų su id
app.patch('/blogs/:id', (req ,res) => {
    Blog.updateOne({_id: req.params.id}, req.body).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error)
    })
})

//istrina su id
app.delete('/blogs/:id',(req ,res) => {
Blog.findByIdAndDelete(req.params.id).then(blog => {
if (!blog) {
    return res.status(404).send();
}
res.send(blog);
}).catch(error => {
    res.status(500).send(error)
})
})

//visi users 
app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/postUsers', (req, res) => {
    const user = new UserModel(req.body);
    user.save().then((user) => {
        res.status(201).send(user);
}).catch((error) => {
    res.status(400).send(error);
})

})


// app.get('/blogs', (req, res) => {
//     Blog.find({}).then((blogs) => {
//         res.send(blogs);
//     }).catch((error) => {
//         res.status(500).send(error);
//     })
// })

// app.get('/account', (req, res) => {
//     Account.find({}).then((account) => {
//         res.send(account);
//     }).catch((error) => {
//         res.status(500).send(error);
// })

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/account', (req, res) => {
    Account.find().then(account => res.json(account)).catch(err => res.json(err))
})

// app.get('/blogs/:id', (req, res) => {
//     Blog.findById(req.params.id).then((blog) => {
//      if (!blog) {
//          return res.status(404).send();
//      }
//      res.send(blog);
//     }).catch((error) => {
//      res.status(500).send(error);
//     })
//  })















app.listen(3000, (req, res) => {
    console.log('app is running in port 3000!');
});











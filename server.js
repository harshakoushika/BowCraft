
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const devuser = require('./model');
const middleware = require('./middleware')

const app = express();
mongoose.connect('mongodb://localhost:5713').then(() => console.log('DB Connected'));

app.use(express.json());
app.use(cors(
    origin = 'http://localhost:5713'
))

app.get('/',async(req,res) => {
    res.send('Hello, world !!');
})

app.post('/register',async(req,res) => {
    try {
        const {username,email,password,confirmpassword} = req.body;
        const exist = await devuser.findOne({email});
        if(exist){
            return res.status(400).send('User Already existed !!');
        }
        const newUser = new devuser({
            username,email,password,confirmpassword
        })
        newUser.save();
        return res.status(200).send('Registered Successful !!')
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error !!');
    }
})

app.post('/login',async(req,res) => {
    try {
        const {email,password} = req.body;
        const exist = await devuser.findOne({email});
        if(!exist){
            return res.status(404).send('User Not Found !!');
        }
        else if(exist.password !== password){
            return res.status(400).send('Invalid Password !!');
        }
        const payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtsecure',{expiresIn:3600000},
    (err,token) => {
        if(err) throw err;
        res.json({token})
    }
    )
    
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error')
    }
})

app.get('/harvesthub',middleware,async(req,res) => {
    try {
        let exist = await devuser.findById(req.user.id);
        if(!exist){
            return res.status(404).send('User Not Found !!');
        }
        res.json(exist);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server Error !!')
    }
})

app.listen(5000,() => { console.log('server running..')});
const user = require ('./users')


const login = (req, res) =>{
    const {email, password} = req.query;
const userfound = user.find((users)=>users.email === email && users,
password === password);
if (userfound) return res.status(200).json({"access":true});
return res.status(404).json({"access":false})

}

module.exports ={
    login
}
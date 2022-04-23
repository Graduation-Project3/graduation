const bcrypt = require("bcrypt");
const User = require("../models/users");
exports.postSignUp = (req,res,next) =>{
    const { firstName, lastName, city, location, email, password, confirmPassword, phone } = req.body;
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                res.send("already the email use");
                return;
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        firstName: firstName,
                        lastName: lastName,
                        city: city,
                        location: location,
                        email: email,
                        password: hashedPassword,
                        phone: phone
                    });
                    return user.save();
                })
                .then(result => {
                    res.status(201).send(result);
                });
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

exports.postSignIn = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.send('email not connected to any user');
        return ;
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
                res.status(200).send(doMatch);
            }
            else{
           res.send('not passed');
            }
          }
          
        )
        .catch(err => {
            res.status(401).send(err);

        });
    })
    .catch(err => res.status(400).send(err));
}

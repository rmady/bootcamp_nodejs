const User = require("./src/entities/user.model");

(async () => {
 //synchronize with database and creates table if not exists
 await User.sync({ force: true });
 
 // create instance of User model and save it to database
 const rodrigo = User.build({
   firstName: "Rodrigo",
   lastName:  "Mady",
 });
 
 await rodrigo.save();
 console.log(rodrigo.toJSON());
 
 //create User on database and return an instance of just created User
 const mady = User.create({
    firstName: "Rodrigo",
    lastName: "Mady",
 });
 console.log(mady.toJSON());
})();

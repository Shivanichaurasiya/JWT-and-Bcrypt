const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

const User = require("./models/user.model")

const SignupRoute =  require("./routes/signupRoutes")
const getdataRoute = require("./routes/getdataRoute")
const loginRoute = require("./routes/loginRoute")
const dashboardRoute = require("./routes/dashboardRoute")

const app = express()

dotenv.config(); // load the .env configuration

connectDB();
app.use(express.json())
const cors = require("cors");
app.use(cors());


app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "public")))

app.use("/", SignupRoute)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", loginRoute)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", dashboardRoute)


app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"))
})

app.use("/api", getdataRoute )

// app.get('/getdata', async (req, res) => {
//     async function getdata() {
//         const userdetails = await User.find();

//         userdetails.map((element) => {
//             // console.log(element);
//         });
        
//         const result = res.status(200).json({datarecieved: userdetails});   

//     }   
//     getdata();
      
// });

// app.put('/edit/:id', async (req, res) => {
//     const { id } = req.params;
//     const { fullname, email, password } = req.body;
//     try {
//         const updatedUser = await User
//             .findByIdAndUpdate(id, {
//                 fullname,
//                 email,
//                 password
//             }, { new: true });
//             console.log(updatedUser);
//         res.status(200).json({ message: 'User updated successfully', user: updatedUser });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating user', error });
//     }
// });


app.put('/edit/:id', async (req, res) => {
  const { id } = req.params;

  console.log("ID:", id);
  console.log("BODY:", req.body);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    console.log("UPDATED USER:", updatedUser);

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating user', error });
  }
});
app.delete('/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({message: "User Deleted Successfully"})
});

    


// app.post('/signup',  (req, res) => {
//     const {fullname, email, password} = req.body

//     async function run() {

//     try {

   

//     const user = new User({
//         fullname: req.body.fullname,
//         email: req.body.email,
//         password: req.body.password
//     })

//        const savedUser =  await user.save();
//        console.log("data inserted successfully", savedUser)

//          }
//          catch (err) {
//             console.log(err)
//          }
         
//          }

//          run()

//     res.send(` username = ${req.body.fullname} , email = ${req.body.email}, password = ${req.body.password}  
//         data send and stored successfully
//         `)

// })

app.listen(5000, () => {
    console.log("server is running on the port http://localhost:5000")
})
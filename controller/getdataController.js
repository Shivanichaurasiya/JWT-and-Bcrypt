const User = require("../models/user.model")
const getUserData = async (req, res) => {
  try {
    const userdetails = await User.find();
    // userdetails.map((element) => {
    //         console.log(element);
    //     });

    res.status(200).json({
      dataReceived: userdetails
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching user data",
      error: error.message
    });
  }
};

module.exports = getUserData;



// const User = require("../models/USer");
// const getUserData = async (req,res) => {
//         try{
//             const userdetails = await User.find();

//         // userdetails.map((element) => {
//         //     // console.log(element);
//         // });
        
//         res.status(200).json({datarecieved: userdetails});   

//     });  
//         } catch(error){
//             res.status(500).json({
//                 message : "Error fetching user data",
//                 error:error.message
//             })
//         }
//     };
    

//     module.exports =getUserData ;



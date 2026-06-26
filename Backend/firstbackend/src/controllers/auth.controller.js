import User from "../models/user.model.js";

export const Registeruser = async (req, res) => {
  try {
    const { fullname, email, password, phone, gender, dob } = req.body;

    if (!fullname || !email || !password || !phone || !gender || !dob) {
        const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
     const error = new Error("Email already registred");
      error.statusCode = 409;
      return next(error);
    }

    // create a new user
    const photourl = `https://placehold.co/600x400?text=${fullname
      .charAt(0)
      .toUpperCase()}`;

    const photo = {
      url: photourl,
      publicId: null,
    };

    const newUser = await User.create({
      fullname,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

     res.status(200).json({
      message: "User registered successfully",
      newUser,
    });

  } catch (error) {
    console.log(error);
      next(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const loginuser = async (req, res) => {
  try{
   const{email,password} = req.body;

   if(!email || !password){
    const error = new Error("All field Required");
    error.statusCode= 400;
    return next(error)
   }

   const existingUser = await User.findOne({email});
   if(!existingUser){
     const error = new Error("Email Not Registred");
    error.statusCode= 404;
    return next(error)
   }

   if(password !== existingUser.password){
     const error = new Error("Incoreect Password");
    error.statusCode= 401;
    return next(error)
   }

   res.status(200).json({
    message:"welcome",
    data: existingUser,
   })
  } catch (error){
   console.log(error.message);
   next();
  }
};

export const logoutuser = (req, res) => {
  res.json({ message: "logout successfully" });
};

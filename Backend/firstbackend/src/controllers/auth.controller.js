import User from "../models/user.model.js";

export const Registeruser = async (req, res) => {
  try {
    const { fullname, email, password, phone, gender, dob } = req.body;

    if (!fullname || !email || !password || !phone || !gender || !dob) {
      return res.status(400).json({
        message: "All fields REQUIRED",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
      });
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

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const loginuser = (req, res) => {
  res.json({ message: "login successfully" });
};

export const logoutuser = (req, res) => {
  res.json({ message: "logout successfully" });
};

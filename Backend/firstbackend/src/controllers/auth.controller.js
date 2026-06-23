import User from "../models/user.model.js";


export const Registeruser = async (req, res) => {
  try {
    const { fullname, email, password, phone, gender, dob } = req.body;
    if (!fullname || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All feilds REQUIRED" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "email alredy registered" });
      return;
    }
  } catch (error) {}
};

export const loginuser = (req, res) => {
  res.json({ message: "login sucessfully" });
};

export const logoutuser = (req, res) => {
  res.json({ message: "logout sucessfully" });
};

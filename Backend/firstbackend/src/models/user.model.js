import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    photho: {
      url: {
        type: String,
      },
      publicId: {
        type: String,
      },
    },

    password: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model( "User",userSchema);

export default User;

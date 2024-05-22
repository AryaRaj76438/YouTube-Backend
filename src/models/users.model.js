import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true,
            lowercase: true
        },
        fullName: {
            type: String,
            required: true, 
            trim: true, 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: ['true', 'Password is require']
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        refreshToken: {
            type: String,
        },
        profileImage: {
            type: String,
            required: true
        },
        coverImage: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)
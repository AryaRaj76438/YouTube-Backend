import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler(
    async (req, res) => {
        console.log("User registration")
        return res.status(201)
            .json(new ApiResponse(
                200, "Data Register", "User registered"
            ))
    }
)

export {registerUser}
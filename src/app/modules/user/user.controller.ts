
// import { Request, Response } from "express";
// import { UserValidation } from "./user.validation";
// import { UserServices } from "./user.service";



// const createUsers = async (req: Request, res: Response) => {
//     try {

 
//     const {password, student: StudentData} = req.body;

    
//         const result = await UserServices.newUsersIntoDB(password,StudentData);

//         // Send responses
//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: 'Student is created succesfully',
//             data: result,
//           });
//         } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             success: false,
//             message: "Failed to create product.",
           
//         });
//     }
// };
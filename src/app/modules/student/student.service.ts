import { Student } from './student.model';



// get all students from db
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};


//get one student
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};


//delete student
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne(
    { id },
    { isDeleted:true}
  );
  return result;
};



export const StudentServices = {
 
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB
};

import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';
import { TStudent } from './student.interface';
import QueryBuilder from '../../builder/QueryBuilder';



// get all students from db
const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
//   console.log('base query',query);
//   const queryObj ={...query};
 const studentSearchableFields=['email','name.firstName','presentAddress'];

//   let searchTerm='';

//   if(query?.searchTerm){
//     searchTerm=query?.searchTerm as string;
//   }

// const searchQuery=Student.find(
//   {
//     $or:studentSearchableFields.map((field)=>({
//       [field]: {$regex:searchTerm, $options:'i'},

//     }))
//   }
// );


// //Filtering
// const excludeFields=['searchTerm','sort','limit','page', 'fields' ];

// excludeFields.forEach(el=>delete queryObj[el])

// console.log({query,queryObj})


//   const filterQuery =  searchQuery.
//   find(queryObj)
//   .populate('admissionSemester')
//     .populate({
//       path: 'academicDepartment',
//       populate: {
//         path: 'academicFaculty',
//       },
//     });


// let sort='-createdAt'

// if(query.sort){
//   sort=query.sort as string;

// }

// const sortQuery= filterQuery.sort(sort);
// let page=1;
// let limit=1;
// let skip=0;
// if(query.limit){
//   limit=Number(query.limit) ;

// }
// if(query.page){
//   page=Number(query.page)
//   limit=Number(query.limit) ;
//   skip=(page-1)*limit;

// }

// const paginateQuery=sortQuery.skip(skip);

// const limitQuery= paginateQuery.limit(limit);


// //field Limiting

// let fields='-__v';

// if(query.fields){
//   fields=(query.fields as string).split(',').join(' ');
// }

//const fieldQuery=await limitQuery.select(fields);
const studentQuery = new QueryBuilder(
  Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    }),
  query,
)
  .search(studentSearchableFields)
  .filter()
  .sort()
  .paginate()
  .fields();

const result = await studentQuery.modelQuery;
return result;
};



//get one student
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};


//delete student
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();


try{

  session.startTransaction()
  const deleteStudent = await Student.findOneAndUpdate(
    { id },
    { isDeleted:true},
    {new:true,session}
  );
  if(!deleteStudent){
    throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete student')
 } 

  const deleteUser=await User.findOneAndUpdate(
    {id},
    { isDeleted:true},
    {new:true,session}

  );

  if(!deleteUser){
    throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete user')
} 

  await session.commitTransaction();
  await session.endSession();
  
  return deleteStudent;

}catch(err){
  await session.abortTransaction();
  await session.endSession();
  throw new Error('Failed to delete student');

}
};



export const StudentServices = {
 
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
  
};

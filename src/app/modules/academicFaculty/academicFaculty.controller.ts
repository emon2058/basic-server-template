import { Request, Response } from "express";
import catchAsync from "../../utlis/catchAsync";
import { AcademicFaculty } from "./academicFaculty.model";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(
    async(req:Request,res:Response)=>{
        const result = await AcademicFacultyService.createAcademicFacultyIntoDB(req.body)

        res.status(200).json({
            success:true,
            message:'create academic faculty',
            data:result,
        })
    }
)
    
const getAllAcademicFaculties = catchAsync(
    async(req:Request,res:Response)=>{
        const result = await AcademicFacultyService.getAllAcademicFacultyFromDB()

        res.status(200).json({
            success:true,
            message:'get all academic faculties',
            data:result,
        })
    }
)
const getSingleAcademicFaculty = catchAsync(
    async(req:Request,res:Response)=>{
        const {facultyId} = req.params;
        const result = await AcademicFacultyService.getSingleAcademicFacultyFromDB(facultyId)

        res.status(200).json({
            success:true,
            message:'get single academic faculty',
            data:result,
        })
    }
)
const updateAcademicFaculty = catchAsync(
    async(req:Request,res:Response)=>{
        const {facultyId}=req.params;
        const result = await AcademicFacultyService.updateAcademicFacultyIntoDB(facultyId,req.body)

        res.status(200).json({
            success:true,
            message:'update academic faculty',
            data:result,
        })
    }
)
export const AcademicFacultyController={
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateAcademicFaculty,
}
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import React, { createContext,  useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
    const [courseLandingFormData, setCourseLandingFormData] = useState(
        courseLandingInitialFormData
    );
    const [courseCurriculumFormData, setcourseCurriculumFormData] = useState(
        courseCurriculumInitialFormData
    );

    const [mediaUploadProgress, setmediaUploadProgress] = useState(false);
    const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] = useState(0);
    const [insturctorCouseList, setInstructorCourseList] = useState([]);
    const [currentEditedCourseId , setCurrentEditedCourseId] = useState(null);


    return (
        <InstructorContext.Provider
            value={{
                courseLandingFormData,
                setCourseLandingFormData,
                courseCurriculumFormData,
                setcourseCurriculumFormData,
                mediaUploadProgress,
                setmediaUploadProgress,
                mediaUploadProgressPercentage,
                setMediaUploadProgressPercentage,
                insturctorCouseList,
                setInstructorCourseList,
                currentEditedCourseId,
                setCurrentEditedCourseId,
            }}
        >
            {children}
        </InstructorContext.Provider>
    )

}
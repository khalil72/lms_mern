/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Delete, DeleteIcon, Edit } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstructorCourses = () => {
    const navigate =  useNavigate();

  return (
    <Card>
        <CardHeader className='flex justify-between flex-row items-center'>
            <CardTitle className='text-3xl font-semibold'>All Courses</CardTitle>
            <Button className='p-6 bg-black text-white hover:border rounded-2xl  hover:text-black'
            onClick={()=>  navigate('/instructor/create-new-course')}
           
            >
                Create New Course
            </Button>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Courses</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead className='text-right' >Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className='text-right'>
                            <Button variant='ghost' size='sm ' className="mr-2">
                                <Edit className='h-6 w-6'/>
                            </Button>
                            <Button variant='ghost' size='sm ' className="mr-2">
                                <DeleteIcon className='h-6 w-6'/>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </CardContent>

    </Card>
  )
}

export default InstructorCourses
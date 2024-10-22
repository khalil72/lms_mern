/* eslint-disable no-unused-vars */
import CourseLandingPage from '@/components/instructor-view/courses/step-cousres-add/course-landing'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const AddNewCourse = () => {
  return (
    <div className='flex flex-col container mx-auto p-4'>
        <div className="flex justify-between">
            <h1 className='text-3xl font-extrabold mb-5'>Create A New Course</h1>
            <Button>
                Submit
            </Button>
        </div>
        <Card>
            <CardContent>
                <div className="container">
                    <Tabs defaultValue='curriculum' className='space-y-4'>
                        <TabsList>
                            <TabsTrigger value='curriculum'>Curriculum</TabsTrigger>
                            <TabsTrigger value='course-landing-page'>CourseLandingPage</TabsTrigger>
                            <TabsTrigger value='setting'>Setting</TabsTrigger>

                        </TabsList>
                        <TabsContent value='curriculum'>
                            curriculum
                        </TabsContent>
                        <TabsContent value='course-landing-page'>
                            <CourseLandingPage />
                        </TabsContent>
                        <TabsContent value='setting'>
                            setting
                        </TabsContent>

                    </Tabs>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default AddNewCourse
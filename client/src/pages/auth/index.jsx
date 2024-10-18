/* eslint-disable no-unused-vars */
import { Form } from '../../components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { GraduationCap } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const AuthPage = () => {
    const [activeTab , setActiveTab] = useState('signIn');

    const onHandleTabChange =(value)=>{
      setActiveTab(value);
    }
  return (
    <div className='flex flex-col min-h-screen'>
        <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
            <Link to={'/'} className='flex items-center justify-center'>
            <GraduationCap  className='h-8 w-8 mr-4'/>
            <span className='font-extrabold text-xl'>LMS Learn</span>
            </Link>
         </header>   
            <div className="flex items-center justify-center bg-background min-h-screen">
                <Tabs className='w-full max-w-md' defaultValue='signIn'
                value={activeTab}
                onValueChange={onHandleTabChange}
                >
                    <TabsList className='w-full grid grid-cols-2'>
                        <TabsTrigger value={'signIn'}>signIn</TabsTrigger>
                        <TabsTrigger value={'signUp'}>signUp</TabsTrigger>
                    </TabsList>
                    <TabsContent  value={'signIn'}>
                        <Card className='p-6 space-y-4'>
                            <CardHeader>
                                <CardTitle>
                                    SignIn into your Account
                                </CardTitle>
                                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                text
                            </CardContent>

                        </Card>
                    </TabsContent>
                    <TabsContent value={"signUp"}>Signup</TabsContent>

                </Tabs>

            </div>

      
    </div>
  )
}

export default AuthPage
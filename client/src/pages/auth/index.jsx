
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { GraduationCap } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CommonForm from '../../components/common-form'
import { signInFormControls, signUpFormControls } from '../../config'
import { AuthContext } from '../../context/auth-context'


const AuthPage = () => {
    const [activeTab , setActiveTab] = useState('signIn');

    const {
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser
    }=  useContext(AuthContext);

    const onHandleTabChange =(value)=>{
      setActiveTab(value);
    }
    const checkIfSignInFormIsValid = () => {
        return (
            signInFormData &&
            signInFormData.email !== '' &&
            signInFormData.password !== ''
        );
    };

    // console.log('signInformData',signInFormData);

    const checkIfSignUpFormIsValid = () => {
        return (
            signUpFormData && 
            signUpFormData.username !== '' &&
            signUpFormData.email !== '' && 
            signUpFormData.password !== '' 
        ); 
    };
    
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
                            <CardHeader className='mb-0'>
                                <CardTitle>
                                    SignIn into your Account
                                </CardTitle>
                                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CommonForm 
                                 formControls={signInFormControls}
                                 buttonText={"Sign In"}
                                 formData={signInFormData}
                                 setFormData={setSignInFormData}
                                 isButtonDisabled={!checkIfSignInFormIsValid()}
                                 handleSubmit={handleLoginUser}
                                />
                            </CardContent>

                        </Card>
                    </TabsContent>
                    <TabsContent value={"signUp"}>
                    <Card className='p-6 space-y-4'>
                            <CardHeader>
                                <CardTitle>
                                    Create a new Account
                                </CardTitle>
                                <CardDescription>
                                Enter your details to get started
                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CommonForm 
                                formControls={signUpFormControls}
                                buttonText={'Sign up'}
                                formData={signUpFormData}
                                setFormData={setSignUpFormData}
                                isButtonDisabled={!checkIfSignUpFormIsValid()}
                                handleSubmit={handleRegisterUser}
                                />
                            </CardContent>

                        </Card>

                    </TabsContent>

                </Tabs>

            </div>

      
    </div>
  )
}

export default AuthPage
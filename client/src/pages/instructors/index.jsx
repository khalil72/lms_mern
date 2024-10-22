/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { BarChart, Book, LogOut } from "lucide-react";
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/auth-context';
import InstructorCourses from '@/components/instructor-view/courses';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import InstructorDashboard from '@/components/instructor-view/dashbaord';

const InstructorsDashboard = () => {
const {resetCridential} =  useContext(AuthContext);
const [activeTab , setActiveTab] =  useState('dashboard');

  const menuItem =[
      {
        icon: BarChart,
        label: "Dashboard",
        value: "dashboard",
        component: <InstructorDashboard />
    
      },
      {
        icon: Book,
        label: "Courses",
        value: "courses",
        component: <InstructorCourses />
       
      },
      {
        icon: LogOut,
        label: "Logout",
        value: "logout",
        component: null,
      },
  ]
  const handleLogout = () =>{
    resetCridential();
    sessionStorage.clear();
  }

  return (
    <div className='flex h-full min-h-screen bg-gray-100'>
      <aside className='w-64 bg-white shadow-md hidden md:block'>
        <div className="p-4">
          <h2 className='text-2xl mb-6 font-bold'>Instructor View</h2>
          <nav>
            {menuItem?.map((item)=>(
              <>
              <Button className='w-full justify-start space-y-10 mb-4 bg-black text-white rounded-xl
              hover:border hover:text-black
              '
              key={item.value}
              variant={activeTab === item?.value ? "secondary" : 'ghost'}
              onClick={
                item?.value === 'logout' ? handleLogout : () => setActiveTab(item?.value)
              }

              >
                <item.icon  className='mr-2 h-4 w-4'/>
                {item?.label}
             
              </Button>
              </>
            ))}
          </nav>
        </div>

      </aside>
      <main className='flex-1 p-8 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl font-bold mb-8'>Dashbaord</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
          {menuItem?.map((item)=>(
            <>
            <TabsContent value={item?.value}>
              {item?.component !== null ? item?.component : null}
            </TabsContent>
            </>

          ))}
          </Tabs>

        </div>

      </main>
    </div>
  )
}

export default InstructorsDashboard
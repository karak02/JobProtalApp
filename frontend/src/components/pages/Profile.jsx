import React from 'react'
import Navbar from '../shared/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from '@clerk/clerk-react';
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoCallOutline , IoEllipsisVertical  } from "react-icons/io5";
import { Badge } from '../ui/badge';


const skill = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git",
  "Python",
  "Java",
  "C++",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "AWS",
  "Firebase",
  "GraphQL",
  "Redux",
  "Tailwind CSS"
];



const Profile = () => {
  const { user } = useUser();
  const isHaveResume = true;
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto bg-black border-solid border-2 border-white rounded-md p-6 mt-8 shadow-lg shadow-gray-500/50 '>
        <div className='flex items-center space-x-4'>
          <div>
            <Avatar>
              <AvatarImage src={user.profileImageUrl} alt="Profile" className='w-16 h-16' />
              <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className='text-lg font-bold text-white'>{user.firstName} {user.lastName}</h1>
            <h2>{user.description || 'No description available'}</h2>
          </div>
          <div className='pl-[80%] pb-12 font-extrabold '>
          <IoEllipsisVertical  />
          </div>
        </div>
        <div className='flex'>
          <RxEnvelopeClosed className='w-6 h-6 mt-9' />
          <h1 className="text-sm p-3 mt-6">Emailid@gmail.com</h1>
        </div>
        <div className='flex'>
          <IoCallOutline className='w-6 h-6 mt-3 ' />
          <h1 className="text-sm p-1 ml-2 mt-2">+917980956460</h1>
        </div>
        <h1 className='font-bold  text-lg pt-5 pb-1'>Skills</h1>
        {
          skill.map((s, i) => (
            <Badge className='text-black bg-white font-bold' variant="ghost">{s}</Badge>
          ))
        }
        <h1 className='font-bold text-lg pt-3 pb-1'>Resume</h1>
        {
        isHaveResume ?  <a href="https://drive.google.com/file/d/1xj6j6j" target="_blank" className="text-blue-500 underline">Download Resume</a> : <p>No Resume Available</p>
        }
       
      </div>

    </>
  )
}

export default Profile

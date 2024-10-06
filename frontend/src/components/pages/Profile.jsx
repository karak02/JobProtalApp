import React from 'react'
import Navbar from '../shared/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from '@clerk/clerk-react';
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoCallOutline, IoEllipsisVertical } from "react-icons/io5";
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
      <div className='max-w-7xl mx-auto bg-gray-800 border-solid border-2 border-white rounded-md p-6 mt-8 shadow-lg shadow-gray-500/50'>
        <div className='flex items-center space-x-4'>
          <div>
            <Avatar>
              <AvatarImage src={user.profileImageUrl} alt="Profile" className='w-16 h-16 text-black' />
              <AvatarFallback className="bg-gray-700 text-white">{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className='text-lg font-bold text-white'>{user.firstName} {user.lastName}</h1>
            <h2 className='text-gray-300'>{user.description || 'No description available'}</h2>
          </div>
          <div className='pl-[80%] pb-12 font-extrabold'>
            <IoEllipsisVertical className='text-white' />
          </div>
        </div>
        <div className='flex items-center space-x-2 mt-4'>
          <RxEnvelopeClosed className='w-6 h-6 text-white' />
          <h1 className="text-sm text-white">Emailid@gmail.com</h1>
        </div>
        <div className='flex items-center space-x-2 mt-2'>
          <IoCallOutline className='w-6 h-6 text-white' />
          <h1 className="text-sm text-white">+917980956460</h1>
        </div>
        <h1 className='font-bold text-white text-lg pt-5 pb-1'>Skills</h1>
        <div className='flex flex-wrap gap-2'>
          {
            skill.map((s, i) => (
              <Badge key={i} className='text-black bg-white font-bold' variant="ghost">{s}</Badge>
            ))
          }
        </div>
        <h1 className='font-bold text-white text-lg pt-5 pb-1'>Resume</h1>
        {
          isHaveResume ? 
            <a href="https://drive.google.com/file/d/1xj6j6j" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Download Resume</a> 
            : <p className="text-white">No Resume Available</p>
        }
      </div>
    </>
  )
}

export default Profile;

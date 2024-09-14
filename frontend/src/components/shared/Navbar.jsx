import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxPerson, RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useUser, useClerk } from '@clerk/clerk-react';

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk(); // Add signOut function from Clerk

  return (
    <div className='bg-[#104153] max-w-auto'>
      <div className='flex items-center justify-between h-16'>
        <div>
          <Link to='/'><h1 className='text-lg tracking-[0.5rem] font-bold pl-12'>ZEROJOB</h1></Link>
        </div>
        <div>
          <ul className='flex font-medium items-center gap-12'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browser">Browser</Link></li>
          </ul>
        </div>
        {
          !isSignedIn ? (
            <div className='flex pr-12 items-center gap-2'>
              <Link to='/login'> 
                <button className='hover:bg-[#34c74c] text-white py-2 px-4 rounded'>Login</button>
              </Link>
              <Link to='/singup'>
                <button className='hover:bg-[#34c74c] text-white py-2 px-4 rounded'>Sign up</button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger className="pr-12 ">
                <Avatar>
                  <AvatarImage src={user.profileImageUrl} alt="Profile" /> {/* Updated with user's profile image */}
                  <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback> {/* Fallback initials */}
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className='flex gap-3'>
                  <Avatar>
                    <AvatarImage src={user.profileImageUrl} alt="Profile" /> {/* Updated */}
                    <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback> {/* Updated */}
                  </Avatar>
                  <div>
                    <h1 className='font-semibold items-center'>{user.fullName}</h1> {/* Updated to show full name */}
                    <h2>{user.description || 'No description available'}</h2>
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-3 pt-5 cursor-pointer'>
                    <RxPerson className='w-9 h-6' />
                    <h1>View Profile</h1>
                  </div>
                  <div 
                    className='flex items-center gap-3 pt-5 cursor-pointer'
                    onClick={() => signOut()} // Logout function
                  >
                    <RxExit className='w-9 h-6' />
                    <h1>Logout</h1>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;

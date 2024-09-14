import { SignIn } from '@clerk/clerk-react';

function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x bg-200%"> 
      <SignIn />
  </div>
  );
}

export default LoginPage;

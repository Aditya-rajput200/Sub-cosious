"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Use this for client-side navigation
import React, { useEffect, useState } from "react";

const port = process.env.NEXT_PUBLIC_PORT;
console.log(port);
function Page() {
 // const [isLogedIN, setisLogedIn] = useState(false);

  const router = useRouter();

  const login = () => {
    router.push("/auth/login"); // Use push for client-side navigation
  };

  const signUp = () => {
    router.push("/auth/signUp"); // Example for Sign Up redirection
  };

  const dashboard = () => {
    router.push("/dashboard"); 
  };

  // is loggedIn
  // const checkIfLoggedIn = async () => {
  //   try {
  //     const responce = await fetch(
  //       `http://localhost:${port}/api/v1/auth/isLogedIn`,
  //       {
  //         method: get,
  //         credentials: "include",
  //       }
  //     );

  //     if (responce.ok) {
  //       const data = responce.json();
  //       setisLogedIn(data.logedIn);
  //     } else {
  //       setisLogedIn(false);
  //     }
  //   } catch (error) {
  //     setisLogedIn(false);
  //   }
  // };


  return (
    <div className="h-full flex justify-center items-center">
      <Button
        variant="outline"
        className="ml-5"
        onClick={login} // Pass the function reference
      >
        Login
      </Button>

      <Button
        variant="outline"
        className="ml-5"
        onClick={signUp} // Example Sign Up button action
      >
        Sign Up
      </Button>

      <Button
        variant="outline"
        className="ml-5"
        onClick={dashboard} 
      >
        Get Started
      </Button>
    </div>
  );
}

export default Page;

// 'use client';

// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// const port = process.env.NEXT_PUBLIC_PORT || 5001;

// function Page() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   // Function to check if the user is logged in
//   const checkIfLoggedIn = async () => {
//     try {
//       const response = await fetch(`http://localhost:${port}/api/v1/auth/loginUser`, {
//         method: 'GET', // Use 'GET' here as your intention seems to be fetching login status
//         credentials: 'include', // Include cookies
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setIsLoggedIn(data.loggedIn); // Update state based on server response
//       } else {
//         setIsLoggedIn(false);
//         console.error('User not logged in');
//       }
//     } catch (err) {
//       console.error('Error fetching login status:', err);
//       setIsLoggedIn(false);
//     }
//   };

//   // Navigate to login page
//   const login = () => {
//     router.push('/auth/login');
//   };

//   // Navigate to sign-up page
//   const signUp = () => {
//     router.push('/auth/signUp');
//   };

//   // Call the login check when the component mounts
//   React.useEffect(() => {
//     checkIfLoggedIn();
//   }, []);

//   return (
//     <div className="h-full flex justify-center items-center">
//       {isLoggedIn ? (
//         <Button
//           variant="outline"
//           className="ml-5"
//           onClick={() => {
//             // Handle logout (clear cookie/session logic)
//             setIsLoggedIn(false); // Temporarily set as logged out for now
//           }}
//         >
//           Logout
//         </Button>
//       ) : (
//         <>
//           <Button variant="outline" className="ml-5" onClick={login}>
//             Login
//           </Button>
//           <Button variant="outline" className="ml-5" onClick={signUp}>
//             Sign Up
//           </Button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Page;

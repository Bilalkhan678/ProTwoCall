// import Link from "next/link";
// import profile from "./profile";
// import dynamic from 'next/dynamic';



// const profile = dynamic(() => import('../../../components/profile/profile'), { ssr: false });


// const Users = () => {
//   // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//   return (
//     <div>
//       <h1> bilal</h1>
//     <profile/>
//     </div>
//   );
// };

// export default Users;

// i created in app directory (web-layout) folder , in this folder i created two sub folder about-us and users , i am working in user 

// import Link from "next/link";

import Profile from "app/(profile-layout)/profile/page";

const users = () => {
  return (
    <div>
      <Profile/>
      {/* <h1>bilal</h1> */}
    </div>
  );
};

export default users;

// import profile from "../../(profile-layout)/profile";


// const Users = () => {
//   // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
//   console.log("click me to")
//   return (
//     <div className="flex flex-col w-full h-full overflow-hidden">
//       {/* <div className="border border-indigo-600 ..."> */}
//       {/* <Map /> */}
//       {/* <GoogleMaps/> */}
//       {/* </div> */}
//       <profile/>
//     </div>
//   );
// };

// export default Users;



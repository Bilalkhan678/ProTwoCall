
"use client"
import dynamic from 'next/dynamic';
// import styles from "@/app/globals.scss";


const Map = dynamic(() => import('../../components/map/map'), { ssr: false });

const Home = () => {
  // console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      {/* <div className="border border-indigo-600 ..."> */}
      <Map />
      {/* <GoogleMaps/> */}
      {/* </div> */}
    </div>
  );
};

export default Home;

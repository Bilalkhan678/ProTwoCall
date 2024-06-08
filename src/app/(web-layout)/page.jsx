
"use client"
import dynamic from 'next/dynamic';
// import styles from "./ .scss";

const Map = dynamic(() => import('../../components/map/map'), { ssr: false });

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Map />
    </div>
  );
};

export default Home;

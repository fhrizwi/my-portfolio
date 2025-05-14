import Snowfall from 'react-snowfall';
import Hero from '../components/Hero';

export default function Home() {
  return (
    // <div className="relative overflow-hidden">
    //   {/* Snowfall in background */}
    //   <div className="absolute inset-0 z-0 h-screen pointer-events-none opacity-50">
    //     <Snowfall color="green" snowflakeCount={200} />
    //   </div>

    //   {/* Main content above snowfall */}
      // <div className="relative z-10">
      <div>
        <Hero />
      </div>
  );
}

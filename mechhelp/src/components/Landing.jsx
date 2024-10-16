import React from 'react';
import mechhome from '../assets/mech2.png';

const Landing = () => {
  return (
    <>
    <div className='bg-blue-500 h-screen'>
    <div className="flex items-center justify-between">
      
      
      <img
        src={mechhome}
        alt="Mechanic"
        className="w-80 h-[500px] mr-5 m-3"
      />

     
      <div>
        <h1 className="text-5xl font-bold text-gray-400 mt-[-200px]">
          Mech Help Online Service
        </h1>
        
        
        <div className='bg-white rounded-md shadow-lg p-4 w-[500px] mt-14 ml-10'> 
          <p className='text-md font-medium text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo placeat omnis vero esse eaque voluptatum iste, doloribus laudantium. Ipsam facilis dolorum omnis, nam incidunt eum neque optio ipsa vel expedita quidem molestiae impedit libero. Quis obcaecati unde officiis nostrum facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quis?
          </p>
        </div>
      </div>

      
      <div className='p-3 m-3 mt-[-100px]'>
        <div className="flex items-center justify-center w-60 h-60 shadow-sm bg-black text-white rounded-full ml-4">
          <h1 className="text-2xl font-bold text-center">
            Ek Click <br /> Gaadi Thik
          </h1>
        </div>
      </div>
      
    </div>
    <div className='justify-center flex'>
      <div >
        <h1 className=' text-2xl font-sans font-bold'>Experience our service and give us the feedback</h1>
        <div className='bg-white rounded-xl shadow-lg p-7 w-[400px] mt-2 ml-16'>
            <p className='items-center text-gray-400 '>Enter the feeback of our services </p>
        </div>
        <button className='p-3 rounded-2xl bg-blue-700 font-sans mt-4 font-bold ml-52'>
          Submit
        </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Landing;

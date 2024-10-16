import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" class="flex gap-2 items-center" >
            
        </a>

        <div id="nav-menu" class="hidden lg:flex gap-12">
            <a href="#" class="font-medium hover:text-primary">Home</a>
            <a href="#" class="font-medium hover:text-primary">Services</a>
            <a href="#" class="font-medium hover:text-primary">Nearby Stores</a>
            <a href="#" class="font-medium hover:text-primary">Profiles</a>
            
        </div>

        <button class="hidden  lg:flex gap-2 items-center border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-600" >
            
           <span>Join Us </span>
           <i class="fa-solid fa-arrow-right"></i>
        </button>
        <button class="p-2 lg:hidden" onclick="handlemenu()">
            <i class="fa-solid fa-bars text-gray-600"></i>
        </button>

        <div id="navdialog" class=" hidden fixed bg-white inset-0 p-3 z-10 md:hidden">
            <div id="navbar" class=" flex justify-between">
                <a href="#" id="brand" class="flex gap-2 items-center" >
           
        </a> 
        <button class="p-2 lg:hidden" onclick="handlemenu()">
            <i class="fa-solid fa-xmark text-gray-500"></i>
        </button>
    </div>
       
        <div class="mt-6">
            <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Home</a>
            <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Services</a>
            <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Nearby Stores</a>
            <a href="#" class="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Profile</a>
            
            
        </div>
            
        <div class="h-[1px] bg-gray-400 " >
            <button class="mt-6 w-full flex gap-2 items-center border  px-6 py-4 rounded-lg hover:bg-gray-50" >
                
               <span>Electronic Developer</span>
              
            </button>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
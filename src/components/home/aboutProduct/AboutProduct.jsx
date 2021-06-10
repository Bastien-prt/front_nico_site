function AboutProduct() {
    return (
      <div className="border-b mb-24 w-11/12 my-0 mx-auto">
        <div className="flex flex-col md:flex-row pb-24">
          <div className="flex flex-col w-full md:w-1/2 md:px-4 lg:px-20"> 
              <p className="text-mediumSize xl:text-bigSize text-skyBlue text-center tracking-tightest"> 0 <span className="text-gray-500"> 1 </span> </p>
              <p className="md:-mt-12 text-lightGray text-2xl"> Made in BREIZH <img className="inline mb-1 w-14 h-6" src="https://pngimage.net/wp-content/uploads/2018/05/bretagne-drapeau-png-4.png"/>  </p>
              <p className="font-thin text-lightGray"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum pariatur consequatur id asperiores? Odit, unde odio. Fuga
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum pariatur consequatur id asperiores? Odit, unde odio. Fuga
              </p>
          </div>

          <div className="flex flex-col w-full md:w-1/2 md:px-4 lg:px-20"> 
              <p className="text-mediumSize xl:text-bigSize text-gray-500 text-center tracking-tightest"> 0 <span className="text-skyBlue"> 2 </span> </p>
              <p className="md:-mt-12 text-lightGray text-2xl"> Personnalisable <img className="inline ml-3 mb-1 w-10 h-7" src="https://www.icone-png.com/png/26/25645.png"/> </p>
              <p className="font-thin text-lightGray"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum pariatur consequatur id asperiores? Odit, unde odio. Fuga
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum pariatur consequatur id asperiores? Odit, unde odio. Fuga
              </p>
          </div>
        </div>

        <div className=" mb-10 text-center">
         <button className="border border-gray-200 p-3 text-lightGray  hover:bg-primary"> Plus d'informations </button>
       </div>
      </div>
    );
  }
  
  export default AboutProduct;

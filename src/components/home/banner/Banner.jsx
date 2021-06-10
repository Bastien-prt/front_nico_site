import "./Banner.css"

function Banner() {
    return (
      <div className="banner-container h-screen w-screen bg-no-repeat bg-center	bg-cover flex justify-center items-center">
        <div className="w-3/4 border-2 border-white from-indigo-50 md:w-1/2 h-1/2 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl text-center mb-5"> Nicolas Roussin </h1>
          <p className="mb-8"> Touvez votre bonheur </p>
          <p className="bg-white bg-opacity-75 hover:bg-opacity-50 cursor-pointer	 py-2 px-10 text-black"> Shop </p>
        </div> 
     </div>
      
    );
  }
  
  export default Banner;

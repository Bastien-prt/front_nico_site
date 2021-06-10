import "./ContactBanner.scss";

function contactBanner() {
    return (
      <div className="mb-64 flex justify-between">
        <div className="bg-primary w-3/5 text-center py-16"> 
            <p className="w-1/2 text-gray-800 font-bold my-0 mx-auto mb-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo nulla earum pariatur rem, dolore, placeat quis natus corporis sed, asperiores accusamus. </p>
            <button className="border border-gray-400 p-3 text-gray-500"> Contactez moi </button>
        </div>
        <img className="hidden lg:picture-contact" src="https://cdn.pixabay.com/photo/2015/07/02/10/45/waterfalls-828948_1280.jpg" alt="" />
        <div className="bg-primary w-1/5"></div>
     </div>
      
    );
  }
  
  export default contactBanner;

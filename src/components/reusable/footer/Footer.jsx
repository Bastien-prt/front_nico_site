import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="border flex flex-col justify-between md:flex md:flex-row px-20 py-10 bg-black  text-center text-white font-thin">
            <div className="py-10 ">
                <p className="mb-4 text-2xl font-normal"> Une Question ? </p>
                <a href="mailto:nicodu29@gmail.com"> nicodu29@gmail.com </a>
            </div>
            <div className="w-32 text-center py-10 my-0 mx-auto ">
                <p className="mb-4"> Suivez moi :) </p>
                <div className="flex justify-between w-full">
                    <a href=""> <img className="h-8 w-8" src="https://bassin-arcachon.com/wp-content/uploads/2017/02/logo-instagram-blanc.png" alt="logo-instagram" /></a>
                    <a href=""> <img  className="h-8 w-8" src="https://i.pinimg.com/236x/12/c8/b4/12c8b4bf266c7fb70078e7d16a96d4db.jpg" alt="logo-pinterest" /></a>
                </div>
            </div>
            <ul className="py-10 ">
                <li className="py-1"> <a href="#home-banner"> Accueil </a> </li>
                <li className="py-1"> A propos </li>
                <li className="py-1"> <Link to="/contact"> Contact </Link> </li>
            </ul>   
        </div>
    );
  }
  
  export default Footer;

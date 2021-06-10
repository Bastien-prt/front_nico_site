import { reseaux } from './Reseaux.js'

import NavBar from "../reusable/NavBar";

import "./Contact.scss"

function Contact() {
  
  return (
    <div>
        <h2 className="flex flex-col mt-24 text-6xl w-10/12 my-0 mx-auto"> Pour me joindre, <span> c'est ici ! </span> </h2>
        <div className="mt-24 flex justify-between w-10/12 my-0 mx-auto mb-20 md:mb-44">
          <div className="container-form border-r-0 lg:border-r-2 py-6 w-full md:w-1/2 lg:w-1/2 sm:px-0 md:px-4 lg:px-20">

            <form>
              <div className="flex justify-between">
                <label htmlFor="">
                  Prénom 
                  <input 
                    className="firstname"
                    type="text" 
                    name="firstname"
                    id="firstname"
                  />
                </label>
                <label htmlFor="">
                  Nom
                  <input 
                    className="lastname"
                    type="text" 
                    name="lastname"
                    id="lastname"
                  />
                </label>
              </div>

              <label htmlFor="">
                Email 
                <input 
                    type="emai" 
                    name="email"
                    id="email"
                  />
              </label>
              <label htmlFor="">
                Ecrivez votre message
                <input
                type="text"
                name="message"
                id="message"
                className="h-36"
                />
              </label>
            </form>

            <button className="bg-primary py-3 px-7 mt-10 text-lightGray" > Envoyer  </button>
          </div>
            <div className="img-contact-container flex items-center my-0 mx-auto">
              <img class="img-contact block md:w-72 lg:w-96 lg:h-5/6 rounded-sm" src="https://cdn.pixabay.com/photo/2013/07/27/05/13/lighthouse-168132_1280.jpg" alt="" />
            </div>

        </div>

        <div className="mb-64 flex flex-col md:flex-row justify-around text-center w-10/12 my-0 mx-auto">
          {reseaux.map((reseaux) => 
            <div className="p-10 md:p-0 "> 
            <a href={reseaux.url}>
              <img className="h-14 w-14 my-0 mx-auto" src={reseaux.image} alt="image-reseaux-sociaux" />
              <p className="text-lightGray font-thin"> {reseaux.id} </p>
            </a>
            </div>
          )}
        </div>

    </div>
  );
}

export default Contact;

import { useEffect, useState } from 'react';
import axios from 'axios';

import "../BackOffice.scss"

function AddArticle() {
    const [ newArdoise, setNewArdoise ] = useState({})

    // ------- POST  -------
    const handleChangeInput = (e) => {
        setNewArdoise({ ...newArdoise, [e.target.id]: e.target.value })
      }

      const handleSubmit = () => {
          axios
            .post(`http://localhost:3000/api/ardoises`, {
                ...newArdoise,
            });
      }

    return (
        <div className="p-5 md:p-20 mt-10">
        <h2 className="w-4/6 md:w-1/2 my-0 mx-auto text-5xl md:text-7xl font-thin"> Ajouter un article </h2>

        <form className="formulaire w-full md:w-1/2 my-0 mx-auto"> 
          <label htmlFor=""> Image </label>  
            <input 
              className="image"
              type="text" 
              name="image"
              id="image"
              onChange={(e) => handleChangeInput(e)}
            />
          

          <label htmlFor=""> Titre </label>
            <input 
              className="title"
              type="text" 
              name="title"
              id="title"
              onChange={(e) => handleChangeInput(e)}
            />
          

          <label htmlFor=""> Prix </label>
            <input 
              className="price"
              type="text" 
              name="price"
              id="price"
              onChange={(e) => handleChangeInput(e)}
            />
          

          <label htmlFor=""> Dimension </label>
            <input 
              className="dimension"
              type="text" 
              name="dimension"
              id="dimension"
              placeholder="20 x 30"
              onChange={(e) => handleChangeInput(e)}
            />
          

          <label htmlFor=""> Description  </label>
            <input 
              className="Description h-36"
              type="text" 
              name="description"
              id="description"
              onChange={(e) => handleChangeInput(e)}
            />
          

          <input
              className="cursor-pointer w-auto bg-primary py-3 px-7 my-20 text-lightGray font-thin" 
              type="submit" 
              value="ajouter"  
              onClick={handleSubmit}/>
        </form>
    </div>
    );
  }
  
  export default AddArticle;

import { useEffect, useState } from 'react';
import axios from 'axios';

import "./BackOffice.scss"

function BackOffice() {
    const [ ardoises, setArdoises ] = useState([]);
    const [ newArdoise, setNewArdoise ] = useState({})
     

    useEffect(() => {
        axios
          .get('http://localhost:3000/api/ardoises')
          .then((response) => response.data)
          .then((data) => setArdoises(data));
      }, []);



      // ------- POST PART -------
      const handleChangeInput = (e) => {
        setNewArdoise({ ...newArdoise, [e.target.id]: e.target.value })
      }

      const handleSubmit = () => {
          axios
            .post(`http://localhost:3000/api/ardoises`, {
                ...newArdoise,
            });
      }


      // ------- DELETE PART -------
      const handleDelete = (id) => {
          axios
            .delete(`http://localhost:3000/api/ardoises/${id}`);
            setArdoises(ardoises.filter((ardoise) => ardoise.id !== id));
      }


    return (
      <div className="mt-32">
          <div className="w-11/12 my-0 mx-auto">
            <div className="flex justify-between flex-wrap">
                {ardoises.map((ardoise) => (
                    <div className="div-card mb-10">
                        <img className="card-product-img" src={ardoise.image} alt="" />
                        <div className="p-2">
                            <p className="text-lightGray uppercase"> {ardoise.title} </p>
                            <p> {ardoise.price} € </p>
                            <p> {ardoise.dimension} </p>
                            <p className="text-lightGray font-thin"> {ardoise.description} </p>
                        </div>
                        <div>
                            <p> cadenas </p>
                            <button 
                                className="" 
                                type="button" 
                                onClick={() => { if (window.confirm('Ëtes vous sur de vouloir supprimer cet article ?')) {handleDelete(ardoise.id)}}}>
                                 X 
                            </button>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
          </div>

          <div className="p-20">
              <h2 className="w-1/2 my-0 mx-auto text-7xl font-thin"> Ajouter un article </h2>

              <form className="formulaire w-1/2 my-0 mx-auto"> 
                <label htmlFor=""> image </label>  
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
                

                <label htmlFor=""> Price </label>
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
                    className="bg-primary py-3 px-7 text-lightGray my-20 cursor-pointer inline-block w-auto" 
                    type="submit" 
                    value="ajouter"  
                    onClick={handleSubmit}/>

              </form>
          </div>
        
      </div>
    );
  }
  
  export default BackOffice;

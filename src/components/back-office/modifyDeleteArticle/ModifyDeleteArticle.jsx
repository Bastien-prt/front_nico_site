import { useEffect, useState } from 'react';
import axios from 'axios';

import { RiDeleteBin6Line } from 'react-icons/ri';

import "../BackOffice.scss"
    

function ModifyDeleteArticle() {
    const [ ardoises, setArdoises ] = useState([]);
    const [ ardoiseModify, setArdoiseModify ] = useState()
    const [ idArdoise, setIdArdoise ] = useState(null);

    useEffect(() => {
        axios
          .get('http://localhost:3000/api/ardoises')
          .then((response) => response.data)
          .then((data) => setArdoises(data));
      }, []);



      // ------- DELETE  -------
      const handleDelete = (id) => {
          axios
            .delete(`http://localhost:3000/api/ardoises/${id}`);
            setArdoises(ardoises.filter((ardoise) => ardoise.id !== id));
      }



      // ------- PUT  -------
      const handleModify = (id) => {
        setIdArdoise(id);
      }

      const handleChangeModify = (e) => {
        setArdoiseModify({ [e.target.name]: e.target.value });
      }

      const handleAcceptModify = (id) => {
          axios
            .put(`http://localhost:3000/api/ardoises/${id}`, {
                ...ardoiseModify,
            });
            
      }
    return (
        <div className="mt-32">
        <div className="w-11/12 my-0 mx-auto">
          <div className="flex justify-between flex-wrap">
              {ardoises.map((ardoise) => (
                  <div className="div-card mb-10 pb-2">
                      <img className="card-product-img" src={ardoise.image} alt="" />
                      <div className="p-2">                            
                          <input
                              className="text-lightGray uppercase"
                              type='text'
                              id={ardoise.id}
                              name="title"
                              placeholder={ardoise.title}
                              onChange={(e) => handleChangeModify(e)}
                              disabled={idArdoise !== ardoise.id}
                          />

                          <input
                              type='text'
                              id={ardoise.id}
                              name="price"
                              placeholder={`${ardoise.price } €`}
                              onChange={(e) => handleChangeModify(e)}
                              disabled={idArdoise !== ardoise.id}
                          />

                          <input
                              type='text'
                              id={ardoise.id}
                              name="dimension"
                              placeholder={ardoise.dimension}
                              onChange={(e) => handleChangeModify(e)}
                              disabled={idArdoise !== ardoise.id}                    
                          />

                          <input
                              className="text-lightGray font-thin h-auto"
                              type='text'
                              id={ardoise.id}
                              name="description"
                              placeholder={ardoise.description}
                              onChange={(e) => handleChangeModify(e)}
                              disabled={idArdoise !== ardoise.id}  
                          />   
                      </div>
                      <div className="flex justify-around w-1/2 my-0 mx-auto p-4">
                          <button
                              className="bg-primary py-2 px-4 rounded font-thin"
                              type='button'
                              id={ardoise.id}
                              onClick={() =>
                                  idArdoise !== ardoise.id
                                    ? handleModify(ardoise.id) 
                                    : handleAcceptModify(ardoise.id)
                                }
                          >
                              {idArdoise !== ardoise.id ? "Modifier" : "Valider"}
                          </button>

                          <button
                              type="button" 
                              onClick={() => { if (window.confirm('Ëtes vous sur de vouloir supprimer cet article ?')) {handleDelete(ardoise.id)}}}>
                               <RiDeleteBin6Line className="w-7 h-7 text-red-700" /> 
                          </button>
                      </div>
                      
                  </div>
                  
              ))}
          </div>
        </div>     
    </div>
    );
  }
  
  export default ModifyDeleteArticle;

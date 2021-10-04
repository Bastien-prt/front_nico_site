import AddArticle from "./addArticle/AddArticle"
import ModifyDeleteArticle from "./modifyDeleteArticle/ModifyDeleteArticle"

import "./BackOffice.scss"

function BackOffice() {
    return (  
        <div>
            <ModifyDeleteArticle />
            <AddArticle /> 
        </div>
    );
  }
  
  export default BackOffice;

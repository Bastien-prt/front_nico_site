function Footer() {
    return (
      <div className="bg-gray-500 h-64">
        <div className="flex justify-between items-center px-20 h-5/6 border border-white">
            <div className="border border-white">
                <p className="mb-4"> Besoin d'informations ?</p>
                <a href="mailto:nicodu29@gmail.com"> nicodu29@gmail.com </a>
            </div>
            <div>
                <p> Suivez moi :) </p>
                <p></p>
            </div>
            <div>
                <ul>
                    <li> Acueil </li>
                    <li> A propos </li>
                    <li> Contact </li>
                </ul>
            </div>
        </div>
        <div className="w-full text-center">
            <p>@nicolas Roussin </p>
        </div>
      </div>
    );
  }
  
  export default Footer;

import NavBar from "../reusable/NavBar";
import Banner from "./banner/Banner"
import AboutProduct from "./aboutProduct/AboutProduct";
import Product from "./product/Product"
import ContactBanner from "./contactBanner/ContactBanner";

function Home() {
  return (
    <div>
        <Banner />
        <AboutProduct />
        <Product />
        <ContactBanner />
    </div>
  );
}

export default Home;

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Item } from "../components/Item";
export default function Main() {
    return(
        <div>
            <Navbar />
            
            <Item image="900px-Instagram_icon.png" price={0}/>
            <Item image="900px-Instagram_icon.png" price={0}/>
            <Footer />
            
        </div>
    );
}
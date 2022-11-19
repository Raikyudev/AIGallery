import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Item } from "../components/Item";
export default function Main() {
    const componentArray = [
        <Item key="key-1" image="900px-Instagram_icon.png" price={0}/>,
        <Item key="key-2" image="900px-Instagram_icon.png" price={0}/>
    ];
    return(
        <div>
            <Navbar />
            <main className="grid gap-12 grid-cols-1 md:grid-cols-2">
                {componentArray}
            </main>
            <Footer />
            
        </div>
    );
}
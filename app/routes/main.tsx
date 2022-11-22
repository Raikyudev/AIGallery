import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Item } from "../components/Item";
export default function Main() {
    const componentArray = [
        <Item key="key-1" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-2" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-3" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-4" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-5" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-6" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-7" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-8" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-9" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-10" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-11" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
        <Item key="key-12" image="900px-Instagram_icon.png" price={0} artist="Guy"/>,
    ];
    return(
        <div className="">
            <Navbar />
            <main className="flex flex-col items-center mt-20">
                <div className="grid gap-x-64 gap-y-32 grid-cols-1 grid-flow-row md:grid-cols-2 place-items-center">
                    {componentArray}
                </div>
            </main>
            <Footer />
            
        </div>
    );
}
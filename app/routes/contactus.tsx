
import { Navbar } from "~/components/Navbar"
import { Footer } from "~/components/Footer"

export default function Contactus() {
    return(
        <div className="h-screen">
            <Navbar />
            <main className="flex flex-col items-center">
                <div className="flex flex-col border-solid border-2 border-black w-3/4 items-center mt-24 lg:mt-8 lg:w-1/2">
                    <p className="font-bold text-xl w-3/4 border-solid border-b-2 border-black text-center m-2 lg:pb-4 lg:text-5xl"> Contact us</p>
                    <div className="flex flex-row justify-between w-full p-4 mb-8 items-center lg:p-10">
                        <img className="inline w-8 h-8 lg:w-16 lg:h-16" src="/assets/phone-call_1.png"></img>
                        <p className="inline lg:text-3xl">0343 420 6969</p>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-4 mb-8 lg:p-10">
                        <img className="inline w-8 h-8 lg:w-16 lg:h-16 " src="/assets/email_2.png"></img>
                        <a className="inline text-xs lg:text-3xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="mailto:infoaigallery@gmail.com">infoaigallery@gmail.com</a>
                    </div>
                    <div className="flex flex-row justify-between w-full p-4 mb-2 items-center lg:pt-10 lg:px-10">
                        <img className="inline w-8 h-8 lg:w-16 lg:h-16" src="/assets/home_1.png"></img>
                        <div className="flex flex-col text-right">
                            <p className="inline lg:text-3xl">Unit 69, Archingerback Rd</p>
                            <p className="inline lg:text-3xl">Sheluk, Fiynazhal,</p>
                            <p className="inline lg:text-3xl">Ambatukumsohard, USA</p>
                        </div>
                        
                    </div>
                </div>
            </main>
            <Footer />  
        </div>
    )
}
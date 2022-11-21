import {useState} from 'react';
export const Item = (props:{image:string, price:number, artist:string}) => {
    const [isShown, setIsShown] = useState(false);
    const displayMenu = () => {
        setIsShown(current => !current);
    };
    return(
        <div className={`${isShown && "border-black border-2"} flex flex-col items-center w-64 md:w-96 pt-2 pb-2`}>
            <img src={"/assets/" + props.image}  className="w-60 h-60 md:w-80 md:h-80 mb-4 mt-2" onClick={displayMenu}/>
            {isShown && (
                <div>
                    <div className="ml-2 flex flex-col items-start w-60 md:w-72 mb-4">
                        <p className="font-bold"> Artist: {props.artist}</p>
                        <p className='font-bold'>Price £{props.price},00</p>                       
                    </div>
                    <div>
                        
                    </div>
                    <button className="font-bold bg-black text-white px-10 w-60 h-10 md:w-72 md:h-10 ml-1 md:ml-2">Add to basket</button>
                </div>
                
            )}
        </div> 
    );
}


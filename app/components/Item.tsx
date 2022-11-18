import {useState} from 'react';
export const Item = (props:{image:string, price:number}) => {
    const [isShown, setIsShown] = useState(false);
    var amount = 0;
    const displayMenu = () => {
        setIsShown(current => !current);
    };
    return(
        <div className="flex flex-col items-center">
            <img src={"/assets/" + props.image}  className="w-72 h-48" onClick={displayMenu}/>
            {isShown && (
                <div>
                    <div>
                        <p>Price £{props.price},00</p>
                        <p className="inline">Quantity:</p>
                        <input type="number"></input>
                    </div>
                    <button>Add to basket</button>
                </div>
            )}
        </div>
    );
}


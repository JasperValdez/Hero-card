export default function Hero(props) {

    return (
        <>
        <div className="asd">
            <img src ={props.imgSrc} />

            <div id="cardText">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
               
            </div>
        </div>
    </> 
);
    
 }

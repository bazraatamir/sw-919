import CardText from "./cardText";
import FirstComponnent from "./Test";

function Card( {data}) {
    console.log(data)
    return ( 
    <div className="w-[200px]  ">
        <FirstComponnent imgsrc={data.imageSrc}/>
        <CardText Title={data.Title} desc={data.desc}/>
    </div> 
    );
}

export default Card;


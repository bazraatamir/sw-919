function CardText({Title,desc}) {
    console.log(Title,desc)
    return ( <>
    <h1 className="text-3xl font-bold">{Title}</h1>
    <p>{desc} </p>
    </> );
}

export default CardText;
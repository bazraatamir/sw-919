function FirstComponnent({imgsrc}) {
    console.log(imgsrc)
    return ( 
        <div className="w-[200px] h-[200px] bg-black">
            <img  src={imgsrc} alt="" />
        </div>
    );
}

export default FirstComponnent;
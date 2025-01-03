import { useState, useEffect } from "react";
function MySecondComponent (){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height]);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <h1>Width: {width}</h1>
            <h1>Height: {height}</h1>
        </div>
    )

}

export default MySecondComponent;
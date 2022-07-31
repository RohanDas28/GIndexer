// This section contains JOKE and buy me a coffee.
import Image from "next/image";
import axios from "axios"
import { useEffect, useState } from "react";


const Fun = () => {

    const [joke, setJoke] = useState(`Debugging: Removing the needles from the haystack.
    `);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const result = await axios("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single");
        // console.log(result.data);
        setJoke(`${result.data.joke}`);
    }

    return (
        <div className="fun__container">
            <div className="coffee">
                <div className="coffee__data">
                    <Image src="/coffee.png" alt="logo" width="55" height="55" id="coffee"></Image>
                    <a className="coffee__text" target="_blank" rel="noopener noreferrer"  href="https://www.buymeacoffee.com/rohandas">Buy me a coffee</a>
                </div>
            </div>
            <div className="jokes__container">
                <div className="jokes">

                    <h3 className="h3">A Little joke for you</h3>
                    <p className="joke"><q>{joke}</q></p>
                </div>
            </div>
        </div>
    )
}

export default Fun


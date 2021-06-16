import React from "react"
import { Navbar } from "../components/Navbar"
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function NotFound(){
    return(
        <>
            <div className="md:px-12 px-4">
                <Navbar/>
            </div>
            <div className="h-5/6 flex justify-center text-center  items-center">
                <div>
                    <h1>404</h1>
                    <p>Hmm, you must have ventured off somewhere while picking mangoes...</p>
                    <Image
                    src="/lost.svg"
                    alt="Oh no!"
                    width={500}
                    height={500}
                    layout="intrinsic"
                    quality={100}
                    />
                </div>
            </div>
            <Footer/>  
        </>
    )
}


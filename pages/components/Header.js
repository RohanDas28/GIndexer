
import Image from 'next/image'
import Head from 'next/head'
const Header = () =>{
    return (
        <>
        <Head>
            <meta property="og:image" content="/Meta-Image.png" />
        </Head>

        <div className="navbar">
            
            <div className="navbar-brand">
            <Image src="/gindexwhite.svg" alt="logo" width="131" height="26"></Image>
            </div>

            <div className="navbar-image">
            <a href="https://github.com/RohanDas28/GIndexer" rel="noopener noreferrer" target={"_blank"}>
            <Image src="/github.svg" alt="me" width="64" height="64" />
            </a>
            </div>
            
        </div>
        </>
    )
}

export default Header;

import Image from 'next/image'
const Header = () =>{
    return (
        <div className="navbar">
            
            <div className="navbar-brand">
                <a href="#">
                <span style={{"color" :"#F4B400",}}>G</span>
                <span style={{"color" :"#0F9D58",}}>I</span>
                </a>
            </div>

            <div className="navbar-image">
            <a href="https://github.com/RohanDas28/GIndexer" rel="noopener noreferrer" target={"_blank"}>
            <Image src="/github.png" alt="me" width="64" height="64" />
            </a>
            </div>
            
        </div>
    )
}

export default Header;
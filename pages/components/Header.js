
import Image from 'next/image'
const Header = () =>{
    return (
        <div className="navbar">
            
            <div className="navbar-brand">
                <a href="#">
                    <h1>GI</h1>
                </a>
            </div>

            <div className="navbar-image">
            <Image src="/github.png" alt="me" width="64" height="64" />
            </div>
            
        </div>
    )
}

export default Header;
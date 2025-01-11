import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer bg-primary text-secondary font-primary py-2">
            <div className="container flex justify-between items-center">
            <p className="text-sm">© capstone project 2025</p>
            <Link className="text-5xl tracking-widest flex items-center font-black" to="/">TBR</Link>
            </div>
        </div>
    )
}

export default Footer;
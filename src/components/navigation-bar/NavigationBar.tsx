import "./NavigationBar.css"
import { Link } from "react-router-dom"
function NavigationBar() {

return (
        <nav className="navigation-bar">
            <Link 
            className="navigator-link"
                to="/"
                >
                    Home
            </Link>
            <Link 
            className="navigator-link"
                to="/ours-team"
                >
                    Our team
            </Link>
            <Link 
            className="navigator-link"
                to="/contact-us"
                >
                    Contact us
                </Link>
        </nav>
    )
}

export default NavigationBar
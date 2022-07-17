import "./NavigationBar.css"
import { Link } from "react-router-dom"
function NavigationBar() {

return (
        <nav className="navigation-bar">
            <Link 
            className="navigator-link"
                to="/yrdx-ai/"
                >
                    Home
            </Link>
            <Link 
            className="navigator-link"
                to="/yrdx-ai/ours-team"
                >
                    Our team
            </Link>
            <Link 
            className="navigator-link"
                to="/yrdx-ai/publications"
                >
                    Publications
            </Link> 
            <Link 
            className="navigator-link"
                to="/yrdx-ai/fundings"
                >
                    Fundings
            </Link>
            
            <Link 
            className="navigator-link"
                to="/yrdx-ai/contact-us"
                >
                    Contact us
                </Link>
        </nav>
    )
}

export default NavigationBar
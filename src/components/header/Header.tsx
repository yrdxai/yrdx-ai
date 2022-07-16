import Logo from "../../assets/logo/logo.png"
import NavigationBar from "../navigation-bar/NavigationBar"
import "./Header.css"
function Header() {

    return (
      <>
        <header className="header">
            <div className="logo-header">
              <img src={Logo} alt="logo" />
            </div>
            <h2 className="header-title">YRDx-AI Laboratory for Medical Diagnosis Researches</h2>
        </header>
        <NavigationBar />
        <div className="header-divider"></div>
      </>
    )
  }
  
  export default Header
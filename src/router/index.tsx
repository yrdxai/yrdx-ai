import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ContactUs from "../page/ContactUs";
import Home from "../page/home/Home"
import OurTeam from "../page/OurTeam";


function AppRouter() {
    return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ours-team" element={<OurTeam />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </div>
    )
}

export default AppRouter;
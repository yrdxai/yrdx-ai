import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ContactUs from "../page/contact-us/ContactUs";
import Home from "../page/home/Home"
import OurTeam from "../page/our-team/OurTeam";


function AppRouter() {
    return (
            <div>
                <Routes>
                    <Route path="/yrdx-ai/" element={<Home />} />
                    <Route path="/yrdx-ai/ours-team" element={<OurTeam />} />
                    <Route path="/yrdx-ai/contact-us" element={<ContactUs />} />
                </Routes>
            </div>
    )
}

export default AppRouter;
import {  Route,  Routes } from "react-router-dom";
import ContactUs from "../page/contact-us/ContactUs";
import Fundings from "../page/fundings/Fundings";
import Home from "../page/home/Home"
import OurTeam from "../page/our-team/OurTeam";
import Publications from "../page/publications/Publications";


function AppRouter() {
    return (
            <div>
                <Routes>
                    <Route path="/yrdx-ai/" element={<Home />} />
                    <Route path="/yrdx-ai/ours-team" element={<OurTeam />} />
                    <Route path="/yrdx-ai/publications" element={<Publications />} />
                    <Route path="/yrdx-ai/fundings" element={<Fundings />} />
                    <Route path="/yrdx-ai/contact-us" element={<ContactUs />} />
                </Routes>
            </div>
    )
}

export default AppRouter;
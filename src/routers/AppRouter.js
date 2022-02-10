import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar, Home, About, Contact, ErrorPage, Projects } from "../components";
import { Main } from '../golbal-styles';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Main>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />


                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </Main>
        </BrowserRouter>
    )
}

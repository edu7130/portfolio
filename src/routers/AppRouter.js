import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Home, About, Contact, ErrorPage, Projects, Redirect } from "../components";
import { Main } from '../golbal-styles';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app/:project' element={
                    <Main height='100vh'>
                        <Redirect />
                    </Main>
                } />
                <Route path='/*' element={
                    <>
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
                    </>
                } />
            </Routes>
        </BrowserRouter>
    )
}

/*
<BrowserRouter>
            <NavBar />
            <Main>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    <Route path='/project/:project' element={<MyRedirect />} />
                    
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </Main>
        </BrowserRouter>
 */

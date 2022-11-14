import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import SingleNotice from './components/pages/SingleNotice/SingleNotice';
import AddNotice from './components/pages/AddNotice/AddNotice';
import EditNotice from './components/pages/EditNotice/EditNotice';
import SearchPage from './components/pages/SearchPage/SearchPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import NotFound from './components/pages/NotFound/NotFound';

function App() {

  // fetch data here?

  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice/:id" element={<SingleNotice />} />
          <Route path="/notice/add" element={<AddNotice />} />
          <Route path="/notice/edit/:id" element={<EditNotice />} />
          <Route path="/notice/search/:searchPhrase" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>  
  );
}

export default App;

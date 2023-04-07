import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNotices } from './redux/noticesReducer';
import './styles/global.scss';

import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import SingleNotice from './components/pages/SingleNotice/SingleNotice';
import AddNotice from './components/pages/AddNotice/AddNotice';
import EditNotice from './components/pages/EditNotice/EditNotice';
import SearchPage from './components/pages/SearchPage/SearchPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LogoutPage from './components/pages/LogoutPage/LogoutPage';
import NotFound from './components/pages/NotFound/NotFound';
import TopBar from './components/views/TopBar/TopBar';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchNotices(dispatch)), [dispatch])

  return (
    <main>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice/:id" element={<SingleNotice />} />
          <Route path="/notice/add" element={<AddNotice />} />
          <Route path="/notice/edit/:id" element={<EditNotice />} />
          <Route path="/searchResult/:searchPhrase" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/logout" element={<LogoutPage/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>  
  );
}

export default App;

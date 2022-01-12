import { Routes, Route } from "react-router-dom";
import './app.css';

import Header from '../Header';
import Footer from '../Footer';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ContactsPage from '../../pages/ContactsPage';
import CategoryPage from '../../pages/CategoryPage';
// import MealPage from '../../pages/MealPage';
import SinglePage from '../../pages/SinglePage';

const App = () => {

  return (
    <>
      <Header />

      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/category/:name' element={<CategoryPage />}/>
          <Route path='/resipe/:id' element={<SinglePage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

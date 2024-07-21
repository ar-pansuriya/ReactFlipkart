import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './Pages/User/UserPage';
import AdminPage from './Pages/Admin/AdminPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from './Utils/api';
import { addCategories } from './ReduxToolKit/AllSlice';


function App() {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.AllStore.categories);
  console.log(categories, 'categories');
  useEffect(() => {
    const fetchCategories = async () => {
        try {
            if (categories.length <= 0) {
                const { data } = await api.get('/categories');
                console.log(data);
                dispatch(addCategories(data.data));
            }
        } catch (error) {
            console.error('Failed to fetch categories', error);
        }
    };
    fetchCategories();
}, [categories, dispatch]);
  return (
    <Routes>
      <Route path="/*" element={<UserPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

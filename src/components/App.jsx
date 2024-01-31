// https://6529142055b137ddc83e2c0b.mockapi.io/api/cars

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favourites = lazy(() => import('pages/Favourites'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

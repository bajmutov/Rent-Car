import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('pages/Home'));
const Catalog = lazy(() => import('pages/Catalog'));
const Favourites = lazy(() => import('pages/Favourites'));

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

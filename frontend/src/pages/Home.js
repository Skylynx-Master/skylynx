import React from 'react';
import '../assets/styles/pages/Home.scss';
import GalleryRadom from '../components/GalleryRadom';
import Landing from '../components/Landing';

const Home = () => {

  return (
    <main className="home">
      <GalleryRadom />
      <Landing />
    </main>
  )
}

export default Home;
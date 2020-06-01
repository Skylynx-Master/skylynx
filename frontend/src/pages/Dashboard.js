import React from 'react';
import '../assets/styles/pages/Dashboard.scss';
import '../assets/styles/components/PropertyCard.scss';
import PropertyCard from '../components/PropertyCard';
import Slider from '../components/Slider';

const Dashboard = () => {
  return (
    <main className="dashboard">
        <div className="actions">
            <button className="dash__add">Crear Inmueble</button>
        </div>
        <div className="publish">
            <h2 className="publish__title">Inmuebles Publicados</h2>
            
        </div>
        <div className="publish__pendding">
        <h2 className="publish__title">Mis Inmuebles por aprobar</h2>
        </div>
        <div className="publish__none">
        <h2 className="publish__title">Mis Inmuebles no aprobar</h2>
        </div>
    </main>
  )
}

export default Dashboard;

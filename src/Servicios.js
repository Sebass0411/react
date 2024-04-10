import React, { useEffect, useState } from 'react';

function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Simula una llamada API
    setServicios([{ id: 1, nombre: "Servicio 1", descripcion: "Descripción del Servicio 1" }]);
  }, []);

  return (
    <div>
      <h1>Servicios Ofrecidos</h1>
      {servicios.map(servicio => (
        <div key={servicio.id}>
          <h2>{servicio.nombre}</h2>
          <p>{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default Servicios;

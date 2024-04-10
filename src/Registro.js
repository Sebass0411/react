import React, { useState } from 'react';

function Registro() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario || !email || !password) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }
    // Aquí iría la lógica para enviar los datos al servidor
    console.log("Registrando:", { usuario, email, password });
    setMensaje('Registro exitoso (simulado)');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        {mensaje && <p className={mensaje.includes("exitoso") ? "mensaje-exito" : "mensaje-error"}>{mensaje}</p>}
        <div>
          <label>Usuario:</label>
          <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

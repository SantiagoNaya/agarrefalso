import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario.css'; // Asegúrate de crear este archivo CSS o de ajustar el estilo en línea.

const Formulario = ({ plansList, setPlansList }) => {
  const [newPlan, setNewPlan] = useState({
    name: '',
    price: '',
    hours: '',
    consultation: '',
    minibar: '',
    description: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prevPlan) => ({ ...prevPlan, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPlans = [...plansList];
      updatedPlans[editingIndex] = newPlan;
      setPlansList(updatedPlans);
      setMessage('Editaste el plan');
      setEditingIndex(null);
    } else {
      setPlansList((prevPlans) => [...prevPlans, newPlan]);
      setMessage('Añadiste un plan');
    }
    setNewPlan({ name: '', price: '', hours: '', consultation: '', minibar: '', description: '' });
  };

  const handleEdit = (index) => {
    setNewPlan(plansList[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPlans = plansList.filter((_, i) => i !== index);
    setPlansList(updatedPlans);
    setMessage('Eliminaste un plan');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="formulario-container">
      <button onClick={handleBack}>Volver al inicio</button>
      {message && <p className="message">{message}</p>}
      <form className="exercise-form" onSubmit={handleSubmit}>
        <h2>{editingIndex !== null ? 'Editar plan' : 'Agregar plan'}</h2>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={newPlan.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="text"
            name="price"
            value={newPlan.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Horas de Ejercicio:</label>
          <input
            type="text"
            name="hours"
            value={newPlan.hours}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Consulta Gratuita con Entrenadores:</label>
          <input
            type="text"
            name="consultation"
            value={newPlan.consultation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Acceso al Minibar:</label>
          <input
            type="text"
            name="minibar"
            value={newPlan.minibar}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="description"
            value={newPlan.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{editingIndex !== null ? 'Actualizar Plan' : 'Agregar Plan'}</button>
      </form>
      <div className="plans-list">
        <h2>Planes de Ejercicio</h2>
        <ul>
          {plansList.map((plan, index) => (
            <li key={index}>
              <div>
                <strong>{plan.name}</strong> - Precio: ${plan.price}
                <p>Horas de Ejercicio: {plan.hours}</p>
                <p>Consulta Gratuita con Entrenadores: {plan.consultation}</p>
                <p>Acceso al Minibar: {plan.minibar}</p>
                <p>Descripción: {plan.description}</p>
              </div>
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Formulario;

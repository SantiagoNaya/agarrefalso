import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Formulario.css';
import { AuthContext } from '../../context/AuthContext';

const Formulario = ({ plansList, setPlansList }) => {
  const { token } = useContext(AuthContext);

  const [newPlan, setNewPlan] = useState({
    nombre: '',
    precio: '',
    features: [{ id: '', descripcion: '' }],
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const getAllPlanes = () => {
    axios.get('http://localhost:8888/planes')
      .then(response => {
        setPlansList(response.data.results);
      })
      .catch(error => {
        console.error('There was an error fetching the plans!', error);
      });
  };

  useEffect(() => {
    getAllPlanes();
  }, [setPlansList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prevPlan) => ({ ...prevPlan, [name]: value }));
  };

  const handleFeatureChange = (featureIndex, field, value) => {
    const newFeatures = [...newPlan.features];
    newFeatures[featureIndex] = { ...newFeatures[featureIndex], [field]: value };
    setNewPlan((prevPlan) => ({ ...prevPlan, features: newFeatures }));
  };

  const addFeature = () => {
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      features: [...prevPlan.features, { id: '', descripcion: '' }],
    }));
  };

  const removeFeature = (featureIndex) => {
    const newFeatures = newPlan.features.filter((_, i) => i !== featureIndex);
    setNewPlan((prevPlan) => ({ ...prevPlan, features: newFeatures }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const planId = plansList[editingIndex].id;
      axios.put(`http://localhost:8888/planes/${planId}`, newPlan, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          getAllPlanes();
          setEditingIndex(null);
          setNewPlan({ nombre: '', precio: '', features: [{ id: '', descripcion: '' }] });
        })
        .catch(error => {
          console.error('TError actualizando plan', error);
        });
    } else {
      axios.post('http://localhost:8888/planes', newPlan, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          getAllPlanes();
          setNewPlan({ nombre: '', precio: '', features: [{ id: '', descripcion: '' }] });
        })
        .catch(error => {
          console.error('Error creando un plan', error);
        });
    }
  };

  const handleEdit = (index) => {
    const planToEdit = plansList[index];
    const features = planToEdit.features;
    setNewPlan({
      nombre: planToEdit.nombre,
      precio: planToEdit.precio,
      features,
    });
    setEditingIndex(index);
  };

  const handleDelete = (planId) => {
    axios.delete(`http://localhost:8888/planes/${planId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setPlansList(plansList.filter(plan => plan.id !== planId));
      })
      .catch(error => {
        console.error('Error borrando plan', error);
      });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="formulario-container">
      <button onClick={handleBack}>Volver al inicio</button>
      <form className="exercise-form" onSubmit={handleSubmit}>
        <h2>{editingIndex !== null ? 'Editar plan' : 'Agregar plan'}</h2>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={newPlan.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="text"
            name="precio"
            value={newPlan.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Features:</label>
          {newPlan.features.map((feature, index) => (
            <div key={index} className="feature-group">
              <input
                type="text"
                disabled
                placeholder="ID del Feature"
                value={feature.id}
                onChange={(e) => handleFeatureChange(index, 'id', e.target.value)}
              />
              <input
                type="text"
                placeholder="Descripción del Feature"
                value={feature.descripcion}
                onChange={(e) => handleFeatureChange(index, 'descripcion', e.target.value)}
              />
              <button type="button" onClick={() => removeFeature(index)}>
                Eliminar Feature
              </button>
            </div>
          ))}
          <button type="button" onClick={addFeature}>Agregar Feature</button>
        </div>
        <button type="submit">
          {editingIndex !== null ? 'Actualizar Plan' : 'Agregar Plan'}
        </button>
      </form>
      <div className="plans-list">
        <h2>Planes de Ejercicio</h2>
        <ul>
          {plansList.map((plan, index) => (
            <li key={plan.id}>
              <div>
                <strong>{plan.nombre}</strong> - Precio: ${plan.precio}
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature.id}>{feature.descripcion}</li>
                  ))}
                </ul>
              </div>
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(plan.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Formulario;
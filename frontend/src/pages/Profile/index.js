import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')
  const history = useHistory()

  useEffect(() => {
    api.get('incidents/profile',{
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  },[])

  async function handleDelete(id){
    if (window.confirm('Deseja deletar o caso?')) {
      try {
        await api.delete(`incidents/${id}`,{
          headers: {
            Authorization: ongId
          }
        })
        setIncidents(incidents.filter((e) => e.id != id))
      } catch(err) {
        console.log('Falha ao deletar esse caso!')
      }
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  // useEffect(() => {
  // },[ongName]) sempre que ongName atualizar o useEffect irá disparar

  return (
    <div className="profile-container">
      <header>
          <img src={logoImg} alt="Be The HERO" />
          <span>Bem vindo, {ongName} </span>

          <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
          <button type="button" style={{"cursor": "pointer"}} onClick={() => handleLogout()}>
              <FiPower size={18} color="#E02041" />
          </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
            <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
            <strong>VALOR:</strong>
            <p>{ Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(incident.value) }</p>
        
            <button type="button" style={{"cursor": "pointer"}} onClick={() => handleDelete(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
            </button>
        </li>
      
      ))}
      </ul>
    </div>
  )
}

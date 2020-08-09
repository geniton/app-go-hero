import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { FiLogOut } from 'react-icons/fi'
import api from '../../services/api'

export default function Logon() {
  const history = useHistory()
  const [id, setId] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const { data: { name } } = await api.post('sessions',{ id })
      localStorage.setItem('ongId',id)
      localStorage.setItem('ongName',name)
      history.push('/profile')
    }
    catch (err) {
      alert(`Falha ao fazer login`)
    }
  }
  
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg}/>
          <form onSubmit={(e) => handleLogin(e)}>
            <h1>Faça seu logon</h1>
            <input type="text" 
              placeholder="Sua ID"
              value={id} 
              onChange={e => setId(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>
            <Link to="/register" className="back-link">
              <FiLogOut size={16} color={"#e02041"}/>
              Não tenho cadastro
            </Link>
          </form>
      </section>
      <img src={heroesImg} alt="" />
    </div>
  )
}

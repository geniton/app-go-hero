import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'


export default function Register() {
  
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('users',data)
      history.push('/')
      alert(`${response.data.id}`)

    }catch (err) {
      
      console.log(err)
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao login
          </Link>
        </section>
        <form action="#" onSubmit={handleRegister}>
          <input type="email" name="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="text" name="ong" id="" placeholder="nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
          <input type="text" placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>

          <div className="input-group">
            <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
            <input type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)}/>
          </div>
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div> 
  )
}

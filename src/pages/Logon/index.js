import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon () {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin (e) {
    e.preventDefault()

    const res = await api.post('/sessions', { id })
    const { name } = res.data.data

    localStorage.setItem('ongId', id)
    localStorage.setItem('ongName', name)

    history.push('/profile')
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be The Hero' />
        <form>
          <h1>Faça Seu Logon</h1>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder='Sua ID'
          />
          <button onClick={handleLogin} className='button' type='submit'>
            Entrar
          </button>

          <Link to='/register' className='back-link'>
            <FiLogIn size={16} color='#E02041' />
            Não Tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  )
}

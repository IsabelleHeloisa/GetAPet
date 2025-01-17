import { useContext, useState } from 'react'

import Input from '../../form/Input'
import Styles from '../../form/Form.module.css'
import { Link } from 'react-router-dom'

import { Context } from '../../../context/UserContext'

function Register() {
  const [user, setUser] = useState({})
  const { register } = useContext(Context)

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // enviar o usuario para o banco
    await register(user)
  }

  return (
    <section className={Styles.form_container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Telefone"
          type="tel"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleOnChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleOnChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  )
}
export default Register

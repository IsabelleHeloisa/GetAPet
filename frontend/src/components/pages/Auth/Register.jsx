import Input from '../../form/Input'

function Register() {
  function handleOnChange(e) {}

  return (
    <section>
      <h1>Register</h1>
      <form>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="name"
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
    </section>
  )
}
export default Register

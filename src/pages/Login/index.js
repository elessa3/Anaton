import React, { useState } from "react";
import { Link } from "react-router-dom";

function inicialState() {
  return {user: '', password: ''};
}

const Login = () => {

  const [values, setValues] = useState(inicialState);

  function onChange (event) {
    const { value, name} = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }


  return (
    <container className="container at-5">
      <h1>Tela Login</h1>
      <div className="d-flex justfy-content-center align-itens-center">
        <form>
          <div className="form-group">
            <label htmlFor="inputemail">Digite seu e-mail</label>
            <input
              type="email"
              name="user"
              className="form-control"
              id="inputEmail"
              placeholder="Digite seu email"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="form-group nt-3">
            <label htmlFor="inputSenha">Digite sua senha</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputSenha"
              placeholder="Digite sua senha"
              onChange={onChange}
              value={values.password}
            />
          </div>
          <div className="form-check nb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="inputCheck"
            />
            <label className="form-check-label" htmlFor="inputCheck">
              Me mantenha logado
            </label>
          </div>
          
<Link to={"/"}>
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
</Link>
        </form>
      </div>
    </container>
  );
};

export default Login;

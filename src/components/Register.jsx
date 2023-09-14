import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/api.jsx";

const Register = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    calGoal: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password === formValue.confirmPassword) {
      auth
        .register(formValue.username, formValue.password, formValue.email)
        .then((res) => {
          navigate("/login", { replace: true });
        });
    }
  };

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formValue.email || ""}
          className="register__input"
          id="email"
          minLength="2"
          maxLength="40"
          required
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={formValue.password}
          className="register__input"
          id="password"
          minLength="2"
          maxLength="40"
          required
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <button className="register__submit-btn" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="sign-in" className="register__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;

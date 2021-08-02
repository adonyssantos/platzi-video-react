import React from 'react';
import '../assets/styles/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Sign up</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Sign up</button>
      </form>
      <a href='/login'>Sign in</a>
    </section>
  </section>
);

export default Register;

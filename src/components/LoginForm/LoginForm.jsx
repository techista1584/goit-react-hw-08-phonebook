import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

import email_icon from '../icons/email_icon.png';
import password_icon from '../icons/password_icon.png';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <div className={css.header}>
        <div className={css.text}>Login</div>
        <div className={css.underline}></div>
      </div>

      <div className={css.inputContainer}>
        <div className={css.inputDiv}>
          <img src={email_icon} className={css.img} alt="email_icon" />
          <input type="email" name="email" placeholder="user@mail.com" className={css.input} autoComplete="email" />
        </div>

        <div className={css.inputDiv}>
          <img src={password_icon} className={css.img} alt="Password icon" />
          <input type="password" name="password" placeholder="Password" className={css.input} autoComplete="current-password" />
        </div>
      </div>

      <div className={css.submitContainer}>
        <button className={css.submit} type='submit'>Login</button>
      </div>
    </form>
  );
};

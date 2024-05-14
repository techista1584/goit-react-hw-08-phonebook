// RegisterForm.jsx
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

import person_icon from '../icons/email_icon.png';
import email_icon from '../icons/email_icon.png';
import password_icon from '../icons/password_icon.png';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset(); // Uncomment this line if you want to reset the form after submission
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <div className={css.header}>
        <div className={css.text}>Register</div>
        <div className={css.underline}></div>
      </div>

      <div className={css.inputContainer}>
        <div className={css.inputDiv}>
          <img src={person_icon} className={css.img} alt="Person icon" />
          <input type="text" name="name" placeholder="Username" className={css.input} />
        </div>

        <div className={css.inputDiv}>
          <img src={email_icon} className={css.img} alt="Email icon" />
          <input type="email" name="email" placeholder="Email" className={css.input} />
        </div>

        <div className={css.inputDiv}>
          <img src={password_icon} className={css.img} alt="Password icon" />
          <input type="password" name="password" placeholder="Password" className={css.input} />
        </div>
      </div>

      <div className={css.submitContainer}>
        <button className={css.submit} type="submit">Register</button>
      </div>
    </form>
  );
};

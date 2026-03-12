import styles from './Auth.module.css'
import Button from '../../components/ui/buttons/button/Button.jsx'
import { useState } from 'react'

import { AuthInput } from './AuthInput.jsx'
import { AuthCheckbox } from './AuthCheckbox.jsx'

import { isValidEmail, isValidPassword, passwordsMatch } from '../../utils/validation';

const Auth = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repeatPassword, setRepeatPassword] = useState('');
   const [agree, setAgree] = useState(false);
   const [touched, setTouched] = useState({email: false, password: false, repeatPassword: false});

   const [isRegistered, setIsRegistered] = useState(false);

   // перевірки
   const emailValid = isValidEmail(email);
   const passwordValid = isValidPassword(password);
   const passwordsEqual = passwordsMatch(password, repeatPassword);
   const formValid = emailValid && passwordValid && passwordsEqual && agree;
   
   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <h2 className={styles.title}>Create an account</h2>

            <div className={styles.authBox}>

               <AuthInput
                  label='PUT YOUR EMAIL HERE'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                  error={touched.email && !emailValid ? 'Enter a valid email' : null}
               />

               <AuthInput
                  label='CREATE A PASSWORD'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
                  error={touched.password && !passwordValid ? 'Password must be at least 6 characters' : null}
               />

               <AuthInput
                  label='REPEATE A PASSWORD'
                  type='password'
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, repeatPassword: true }))}
                  error={touched.repeatPassword && !passwordsEqual ? 'Passwords do not match' : null}
               />

               <AuthCheckbox checked={agree} onChange={(e) => setAgree(e.target.checked)}/>

               <Button title={'Sign in'} variant='authSignIN' disabled={!formValid}/>
            </div>
         </div>
      </div>
   )
}

export default Auth;
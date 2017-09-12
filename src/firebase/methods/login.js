import {app} from '../app';

export function login(email = '', password = '') {

  // console.log(`emai: ${email}, password: ${password}`);
  if (email !== '' && password !== '')
  {
    return app.auth().signInWithEmailAndPassword(email, password);
  }
}
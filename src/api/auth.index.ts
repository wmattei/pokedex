export class AuthApi {
  static login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'usuario@totvs.com' && password === 'totvs123') {
          return resolve({
            token: 'meu-token',
            user: {
              name: 'Wagner Mattei',
              email: 'wagner.mattei@gmail.com',
            },
          });
        }

        return reject('Email ou senha incorretos');
      }, 1000);
    });
  }
}

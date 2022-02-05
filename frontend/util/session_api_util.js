export const signup = (user) => {
    debugger
    return $.ajax({
      url: '/api/users',
      method: 'POST',
      data: {
          user: {
              email: user.email,
              password: user.password
          }
      }
    });
};


export const login = (user) => {
    return $.ajax({
      url: '/api/session',
      method: 'POST',
      data: {
          user: {
              email: user.email,
              password: user.password
          }
      }
    });
};


export const logout = () => {
    return $.ajax({
      url: '/api/session',
      method: 'DELETE'
    });
};
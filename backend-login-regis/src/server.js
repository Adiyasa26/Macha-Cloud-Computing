const Hapi = require('@hapi/hapi');
const { RegisterNewUser, loginUser } = require('./handler');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: '0.0.0.0',
  });

  server.route([
    {
      method: 'POST',
      path: '/users',
      handler: RegisterNewUser,
    },
    {
      method: 'POST',
      path: '/users/login',
      handler: loginUser,
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

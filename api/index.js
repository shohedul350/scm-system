const AdminRoutes = require('./adminRoute/adminRoute');

const routes = [
  {
    path: '/api',
    handler: AdminRoutes,
  },

];

module.exports = (app) => {
  routes.forEach((r) => {
    if (r.path == '/') {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};

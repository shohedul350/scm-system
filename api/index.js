const AdminRoutes = require('./adminRoute/adminRoute');
const ProductRoute = require('./ProductRoute/productRoute')

const routes = [
  {
    path: '/api',
    handler: AdminRoutes,
  },
  {
    path: '/api',
    handler: ProductRoute,
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

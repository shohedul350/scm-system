const AdminRoutes = require('./adminRoute/adminRoute');
const ProductRoute = require('./ProductRoute/productRoute')
const CustomerRoute = require('./customerRoute/customerRoute');
const InvoiceRoute = require('./invoiceRoute/invoiceRoute');

const routes = [
  {
    path: '/api',
    handler: AdminRoutes,
  },
  {
    path: '/api',
    handler: ProductRoute,
  },
  {
    path: '/api',
    handler: CustomerRoute,
  },
  {
    path: '/api',
    handler: InvoiceRoute,
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

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';
class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../Widgets/index.js'))}
        />
         <Route
          exact
          path={`${url}/add-product`}
          component={asyncComponent(() => import('../Product/addNew/Product'))}
        />
         <Route
          exact
          path={`${url}/stock`}
          component={asyncComponent(() => import('../Product/productList/ProductTable'))}
        />
         <Route
          exact
          path={`${url}/edit-product`}
          component={asyncComponent(() => import('../Product/productList/EditProduct'))}
        />

         <Route
          exact
          path={`${url}/create-customer`}
          component={asyncComponent(() => import('../Customer/CreateCustomer'))}
        />
         <Route
          exact
          path={`${url}/customer-list`}
          component={asyncComponent(() => import('../Customer/CustomerList'))}
        />

        <Route
          exact
          path={`${url}/customer-details`}
          component={asyncComponent(() => import('../Customer/CustomerDetails'))}
        />

        <Route
          exact
          path={`${url}/customer-details/customer-invoice`}
          component={asyncComponent(() => import('../Customer/ChalanPrint'))}
        />
         <Route
          exact
          path={`${url}/customer-details/customer-bill`}
          component={asyncComponent(() => import('../Customer/Print'))}
        />
          <Route
          exact
          path={`${url}/cart`}
          component={asyncComponent(() => import('../cart/Cart'))}
        />
     {/* <Route
          exact
          path={`${url}/product`}
          component={asyncComponent(() => import('../Product/add-product'))}
        /> */}
         {/* <Route
          exact
          path={`${url}/product`}
          component={asyncComponent(() => import('../Product/Stock'))}
        />
      
        <Route
          exact
          path={`${url}/invoice`}
          component={asyncComponent(() => import('../Page/invoice/invoice'))}
        />
          <Route
          exact
          path={`${url}/add-invoice`}
          component={asyncComponent(() => import('../Page/Addinvoice/Addinvoice'))}
        /> */}

       
        
      
      </Switch>
    );
  }
}

export default AppRouter;

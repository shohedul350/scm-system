import qs from 'qs';
export function setUrl(searchState) {
  const search = searchState
    ? `${window.location.pathname}?${qs.stringify(searchState)}`
    : '';
  window.history.pushState(searchState, null, search);
}

export function getDefaultPath() {
  const getParent = lastRoute => {
    const parents = {
     
      product:[
        'addProduct',
        'stock'
      ],
      invoice:[
        'newInvoice',
        'invoiceReport'
      ],
      pages: [
        '404',
        '500',
        'signin',
        'signup',
        'forgotpassword',
        'resetpassword',
        'invoice',
        'comingSoon'
      ]
    };
    let parent;
    Object.keys(parents).forEach(key => {
      parents[key].forEach(p => {
        if (p === lastRoute) {
          parent = key;
        }
      });
    });
    return parent ? [parent, lastRoute] : [lastRoute];
  };
  if (window && window.location.pathname) {
    const routes = window.location.pathname.split('/');
    if (routes.length > 1) {
      const lastRoute = routes[routes.length - 1];
      if (lastRoute) {
        return getParent(lastRoute);
      }
    }
  }
  return [];
}

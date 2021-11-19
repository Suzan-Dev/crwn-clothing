import React, { useEffect } from 'react';
import { Navigate, Outlet, ReactLocation, Router } from 'react-location';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

const location = new ReactLocation();

const Routes = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Router
      location={location}
      routes={[
        {
          path: '/',
          element: () =>
            import('./pages/homepage/homepage.component').then((mod) => (
              <mod.default />
            )),
        },
        {
          path: 'shop',
          element: () =>
            import('./pages/shop/shop.component').then((mod) => (
              <mod.default />
            )),
          children: [
            {
              path: '/',
              element: () =>
                import(
                  './components/collection-overview/collection-overview.container'
                ).then((mod) => <mod.default />),
            },
            {
              path: '/:collectionId',
              element: () =>
                import('./pages/collection/collection.container').then(
                  (mod) => <mod.default />
                ),
            },
          ],
        },
        {
          path: 'checkout',
          element: () =>
            import('./pages/checkout/checkout.component').then((mod) => (
              <mod.default />
            )),
        },
        {
          path: 'signin',
          element: () =>
            currentUser ? (
              <Navigate to="/" />
            ) : (
              import(
                './pages/signin-and-signup/signin-and-signup.component'
              ).then((mod) => <mod.default />)
            ),
        },
      ]}
    >
      <Header />
      <Outlet />
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

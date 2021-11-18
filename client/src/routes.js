import React, { useEffect } from 'react';
import { Navigate, Outlet, ReactLocation, Router } from 'react-location';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import CollectionOverviewContainer from './components/collection-overview/collection-overview.container';
import CollectionPageContainer from './pages/collection/collection.container';
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
        { path: '/', element: <HomePage /> },
        {
          path: 'shop',
          element: <ShopPage />,
          children: [
            { path: '/', element: <CollectionOverviewContainer /> },
            { path: '/:collectionId', element: <CollectionPageContainer /> },
          ],
        },
        { path: 'checkout', element: <CheckoutPage /> },
        {
          path: 'signin',
          element: currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />,
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

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.action';
import { Outlet } from 'react-location';

export const ShopPage = ({ fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shoppage">
      <Outlet />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

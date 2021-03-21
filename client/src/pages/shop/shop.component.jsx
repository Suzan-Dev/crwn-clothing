import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shop.action';

import Spinner from '../../components/spinner/spinner.component';

// Container Pattern
const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

export const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className='shoppage'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

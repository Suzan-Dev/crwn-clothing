import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updatedCollection } from '../../redux/shop/shop.action';

import {
  firestore,
  convertCollectionToShopData,
} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collection');

    // without any pattern
    // fetch(
    //   'https://firestore.googleapis.com/v1/crwn-clothing-db-fdf58/databases/(default)/documents/collection'
    // )
    //   .then((res) => res.json())
    //   .then((collection) => console.log(collection));

    // Observer Pattern
    collectionRef.onSnapshot(async (snapshot) => {
      const updatedCollection = convertCollectionToShopData(snapshot);
      updateCollection(updatedCollection);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shoppage'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collection) => dispatch(updatedCollection(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

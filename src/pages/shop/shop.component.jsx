import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Container Pattern
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionStart } from '../../redux/shop/shop.action';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shoppage'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

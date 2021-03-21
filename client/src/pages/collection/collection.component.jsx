import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
  CollectionItemContainer,
} from './collection.style';

import { selectCollections } from '../../redux/shop/shop.selector';

export const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer className='title'>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

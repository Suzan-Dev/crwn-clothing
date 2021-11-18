import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';
import { useMatch } from 'react-location';
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
  CollectionItemContainer,
} from './collection.style';

export const CollectionPage = ({ collection }) => {
  const match = useMatch().params;
  const { title, items } = collection(match.collectionId);

  return (
    <CollectionPageContainer>
      <TitleContainer className="title">{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state) => ({
  collection: (collectionId) => selectCollections(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

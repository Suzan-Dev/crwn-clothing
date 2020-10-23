import styled from 'styled-components';
import CollectionItem from '../../components/collection-item/collection-item.component';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CollectionItemContainer = styled(CollectionItem)`
  margin-bottom: 30px;
`;

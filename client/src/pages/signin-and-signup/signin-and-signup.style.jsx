import styled from 'styled-components';

export const SigninAndSignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 15px;

  @media screen and (min-width: 800px) {
    width: 750px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 25px auto;
  }

  @media screen and (min-width: 900px) {
    width: 765px;
  }

  @media screen and (min-width: 1000px) {
    width: 850px;
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;

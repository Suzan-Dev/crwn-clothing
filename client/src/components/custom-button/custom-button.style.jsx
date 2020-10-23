import styled, { css } from 'styled-components';

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #357ae8;
    color: white;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid white;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;

const defaultStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }

  return inverted ? invertedStyles : defaultStyles;
};

export const ButtonContainer = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  cursor: pointer;
  outline: none;

  ${getButtonStyles}
`;

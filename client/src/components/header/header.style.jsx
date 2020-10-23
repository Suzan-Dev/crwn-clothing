import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 5px;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    padding: 10px 15px;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  @media screen and (min-width: 800px) {
    margin-bottom: 25px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 40px;
  padding-top: 10px;
  padding-left: 5px;

  @media screen and (min-width: 800px) {
    padding: 15px;
    width: 70px;
  }
`;

export const OptionsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;

export const OptionLink = styled(Link)`
  font-size: 16.5px;
  ${OptionContainerStyles}

  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
`;

export const OptionDiv = styled.div`
  font-size: 16.5px;
  ${OptionContainerStyles}

  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
`;

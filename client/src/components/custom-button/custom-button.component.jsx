import React from 'react';

import { ButtonContainer } from './custom-button.style';

const CustomButton = ({ children, ...otherProps }) => (
  <ButtonContainer {...otherProps}>{children}</ButtonContainer>
);

export default CustomButton;

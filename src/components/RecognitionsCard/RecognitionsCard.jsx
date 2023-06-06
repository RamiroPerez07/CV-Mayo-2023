import React from 'react';
import { StyledCard, StyledCardBody, StyledText } from './StyledCard';

export const RecognitionsCard = (props) => {

  const {period,title,description} = props;

  return (
    <>
      <StyledCard>
        <StyledText>
          {period}
        </StyledText>
        <StyledCardBody>
          <StyledText style={{fontWeight:'bold'}}>{title}</StyledText>
          <StyledText>{description}</StyledText>
        </StyledCardBody>
      </StyledCard>
    </>
  )
}


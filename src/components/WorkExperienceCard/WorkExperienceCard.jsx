import React from 'react';
import { StyledCard, StyledCardBody, StyledText } from './WorkExperienceCard';

export const WorkExperienceCard = (props) => {

  const {period,company,position,description} = props;

  return (
    <>
      <StyledCard>
        <StyledText>
          {period}
        </StyledText>
        <StyledCardBody>
          <StyledText style={{fontWeight:'bold'}}>{position + " - " + company}</StyledText>
          <StyledText>{description}</StyledText>
        </StyledCardBody>
      </StyledCard>
    </>
  )
}


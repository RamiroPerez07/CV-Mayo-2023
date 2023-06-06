import React from 'react';
import { StyledCard, StyledCardBody, StyledLi } from './StyledCard';

export const SkillsCard = (props) => {

  return (
      <StyledCard>
        <StyledCardBody>
          <ul>
            {
              props.skills.map((item, index) => <StyledLi key={index}>{item}</StyledLi> )
            }
          </ul>
        </StyledCardBody>
      </StyledCard>
  )
}


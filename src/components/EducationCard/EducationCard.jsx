import React from 'react'
import { StyledCard, StyledCardBody, StyledText } from './StyledCard'

export const EducationCard = (props) => {

  const {period, title, average, institution, location} = props;


  return (
    <>
      <StyledCard>
        <StyledText >
          {period}
        </StyledText>
        <StyledCardBody>
          <StyledText style={{fontWeight:'bold'}}>{average ? (title + " - Promedio: " + average):(title)}</StyledText>
          <StyledText>{institution}</StyledText>
          <StyledText>{location}</StyledText>
        </StyledCardBody>
      </StyledCard>
    </>
  )
}

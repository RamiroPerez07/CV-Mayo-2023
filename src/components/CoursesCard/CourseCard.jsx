import React from 'react'
import { StyledCard, StyledText, StyledCardBody } from './StyledCard'

export const CourseCard = (props) => {

  const {period, title, hours, institution} = props

  return (
    <>
      <StyledCard>
        <StyledText >
          {period}
        </StyledText>
        <StyledCardBody>
          <StyledText /*style={{fontWeight:'bold'}}*/>{(hours ? (title + " - Duración: " + hours):(title))+" - "+institution}</StyledText>
        </StyledCardBody>
      </StyledCard>
    </>
  )
}


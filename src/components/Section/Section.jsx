import React from 'react'
import { StyledSection, StyledSectionTitle, StyledContent } from './StyledSection.js'

export const Section = ({title, className, children}) => {
  return (
    <>
      <StyledSection className={className}>
        <StyledSectionTitle>{title}</StyledSectionTitle>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledSection>
    </>
  )
}


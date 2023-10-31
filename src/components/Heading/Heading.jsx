import React from 'react';
import {StyledHeading, StyledLi} from './StyledHeading.js';
import {StyledImage} from './StyledHeading.js';
import { StyledTitle } from './StyledHeading.js';
import { myData } from '../../data/cv-data.js';

export const Heading = () => {
  return (
    <>
      <StyledHeading>
        <div style={{gridColumn: "1/3", width: "100%"}}>
          <StyledTitle>{myData.personalInfo.name}</StyledTitle>
          <ul>
            <StyledLi>{myData.personalInfo.professions.primary+" - "+myData.personalInfo.professions.secondary}</StyledLi>
            <StyledLi>{"Birthdate: "+myData.personalInfo.birthdate}</StyledLi>
            <StyledLi>{"Email: "+myData.personalInfo.email + " | Cellphone: "+myData.personalInfo.cellphone}</StyledLi>
            <StyledLi>{myData.personalInfo.location}</StyledLi>
            <StyledLi>{"Linkedin: "+myData.personalInfo.socialNetworks.linkedin + "  |  Github: " + myData.personalInfo.socialNetworks.github}</StyledLi>
          </ul>
        </div>
        <StyledImage data={myData} />
      </StyledHeading>
    </>
  )
}


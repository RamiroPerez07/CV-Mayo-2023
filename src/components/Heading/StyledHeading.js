import styled from "styled-components";

export const StyledHeading = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
  column-gap: 10px;
  padding: 5px;
  background-color: white; 
`;

export const StyledImage = styled.div`
  width: 100%;
  max-width: 120px;
  min-height: 120px;
  background-image: ${props => "url("+props.data.image+")"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 3/4;
  border-radius: 100%;
  grid-row: 1/3;
  align-self: center;
`;

export const StyledTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  grid-column: 1/3;
  text-align: center;
  margin-left: 15px;
`

export const StyledLi = styled.li`
  font-size: 0.7rem;
  font-weight: 300;
  grid-column: 1/3;
  justify-self: start;
  margin-top: 3px;
  margin-left: 15px;
`
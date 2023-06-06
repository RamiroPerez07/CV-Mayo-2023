import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: start;
  justify-items: center;
  gap: 5px;
`;

export const StyledCardBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  align-items: start;
  gap: 5px;
  grid-auto-rows: min-content;
`;

export const StyledText = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  margin: 0px;
`;
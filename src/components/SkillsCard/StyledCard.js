import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  justify-items: center;
`;

export const StyledCardBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  align-items: start;
  gap: 5px;
  padding: 5px;
  grid-auto-rows: min-content;
`;

export const StyledLi = styled.li`
  font-size: 0.7rem;
  font-weight: 400;
  margin-bottom: 10px;
`;
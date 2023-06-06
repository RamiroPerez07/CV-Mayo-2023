import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
  background-color: #efefef;
  width: 100%;
  padding: 10px;
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin: 5px 0px 10px 0px;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-items: start;
  justify-items: center;
  grid-auto-rows: min-content;
`;
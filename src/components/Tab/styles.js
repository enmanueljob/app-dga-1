import styled from "styled-components";

export const WrapperTab = styled.div`
  width: 100%;
  height: 300px;
  border-top: 3px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  overflow: hidden;
`;

export const StyledUl = styled.ul`
  display: flex;
  /* border: 1px solid red; */
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const StyledLi = styled.li`
  background: black;

  &.selected {
    background: white;
  }
`;

export const StyledButton = styled.button`
  outline: none !important;
  border: none;
  background: transparent;
  color: white;

  &.selected {
    color: black;
  }
`;

export const StyledMain = styled.main`
  height: 100%;
  overflow: auto;
`;

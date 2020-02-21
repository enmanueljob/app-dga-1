import React from "react";
import styled from "styled-components";

const WrapperModal = styled.div`
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  background: #808080bd;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
`;

const Main = styled.main`
  height: 400px;
  width: 52%;
  background: white;
  position: absolute;
  top: 70px;
`;

export default () => {
  return (
    <WrapperModal>
      <Background />
      <Main>modal</Main>
    </WrapperModal>
  );
};

import React, { useContext } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { TabContext } from ".";
// @styles
import { StyledUl, StyledButton, StyledLi } from "./styles";

const TabHeaderButton = ({ child }) => {
  const tabContext = useContext(TabContext);

  const btnClass = classnames({
    selected: child.props.id === tabContext.selectedTab
  });

  return (
    <StyledLi className={btnClass}>
      <StyledButton
        className={btnClass}
        onClick={() => tabContext.onSelectTab(child.props.id)}
      >
        {child.props.title}
      </StyledButton>
    </StyledLi>
  );
};

const TabHeader = ({ tabs }) => {
  return (
    <StyledUl>
      {React.Children.map(tabs, child => (
        <TabHeaderButton child={child} />
      ))}
    </StyledUl>
  );
};

export default TabHeader;

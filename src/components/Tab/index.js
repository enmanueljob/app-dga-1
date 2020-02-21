import React, { useState, createContext } from "react";
import TabHeader from "./TabHeader";
// @tstyles
import { WrapperTab, StyledMain } from "./styles";

export const TabContext = createContext();

const TabItem = ({ children }) => <>{children}</>;

const Tab = ({ children, defaultTab }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const onSelectTab = id => setSelectedTab(id);

  const findPanel = id => {
    const child = React.Children.toArray(children).find(
      item => item.props.id === id
    );
    return child;
  };

  return (
    <TabContext.Provider value={{ onSelectTab, selectedTab }}>
      <WrapperTab>
        <TabHeader tabs={children} onSelectTab={onSelectTab} />
        <StyledMain>{findPanel(selectedTab)}</StyledMain>
      </WrapperTab>
    </TabContext.Provider>
  );
};

Tab.TabItem = TabItem;

export default Tab;
{
  /* <Tab>
  <Tab.TabItem title="Tab 1" id="tab1">
    tab 1
  </Tab.TabItem>
  <Tab.TabItem title="Tab 2" id="tab2">
    tab 2
  </Tab.TabItem>
  <Tab.TabItem title="Tab 3" id="tab3">
    tab 3
  </Tab.TabItem>
  <Tab.TabItem title="Tab 4" id="tab4">
    tab 4
  </Tab.TabItem>
</Tab> */
}

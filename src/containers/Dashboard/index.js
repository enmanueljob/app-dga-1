// @vendors
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Tab from "../../components/Tab";
import Countries from "../Countries";
import PageD from "./PageD";

export default () => {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/page-c">Page C</Link>
          </li>
          <li>
            <Link to="/dashboard/page-d">Page D</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={() => (
              <Tab defaultTab="tab1">
                <Tab.TabItem title="Tab 1" id="tab1">
                  tab 1
                </Tab.TabItem>
                <Tab.TabItem title="Tab 2" id="tab2">
                  tab 2
                </Tab.TabItem>
                <Tab.TabItem title="Tab 3" id="tab3">
                  <p>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                  <p>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                  <p>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </Tab.TabItem>
              </Tab>
            )}
          />
          <Route path="/dashboard/page-c" component={() => <Countries />} />
          <Route path="/dashboard/page-d" component={() => <PageD />} />
        </Switch>
      </div>
    </div>
  );
};

import {
  Brand,
  Nav, NavItem, NavList,
  Page, PageHeader, PageSection, PageSidebar,
  Text, TextContent
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import { BrowserRouter, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import { hc } from './hc';
import imgLogo from './logo.svg';

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => (
  <BrowserRouter>
    <Page
      header={<AppHeader />}
      sidebar={<AppSidebar />}
      isManagedSidebar>
      <Switch>
        {hc.getPlugins().map(plugin => (
          <Route
            key={plugin.id}
            path={plugin.path}
            component={plugin.component} />
        ))}
        <Route path='/'>
          <PageSection>
            <TextContent>
              <Text component="h1">HC App</Text>
              <Text component="p"> Hello world!</Text>
            </TextContent>
          </PageSection>
        </Route>
      </Switch>
    </Page>
  </BrowserRouter>
);

const AppHeader: React.FunctionComponent = () => (
  <PageHeader
    logo={<Brand src={imgLogo} alt="HC App" />}
    logoProps={{ href: '/' }}
    showNavToggle
  />
);

const AppSidebar: React.FunctionComponent = () => {
  const location = useLocation();
  const PageNav = (
    <Nav>
      <NavList>
        {hc.getPlugins().map(plugin => (
          <NavItem key={plugin.id} isActive={plugin.path === location.pathname}>
            <NavLink to={plugin.path}>{plugin.title}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
  return <PageSidebar nav={PageNav} />;
};

export default App;

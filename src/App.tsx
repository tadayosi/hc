import {
  EmptyState, Nav, NavItem, NavList,
  Page, PageHeader, PageSection, PageSidebar,
  Title
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => (
  <BrowserRouter>
    <Page
      header={<AppHeader />}
      sidebar={<AppSidebar />}
      isManagedSidebar>
      <Switch>
        <Route path='/app1' />
        <Route path='/app2' />
        <Route path='/app3' />
        <Route path='/'>
          <PageSection>
            <EmptyState>
              <p>Hello, HC!</p>
            </EmptyState>
          </PageSection>
        </Route>
      </Switch>
    </Page>
  </BrowserRouter>
);

const AppHeader: React.FunctionComponent = () => (
  <React.Fragment>
    <PageHeader
      showNavToggle
    />
  </React.Fragment>
);

const AppSidebar: React.FunctionComponent = () => (
  <PageSidebar>
    <Nav>
      <NavList>
        <NavItem itemId={0}>
          <Link to='/app1'>App 1</Link>
        </NavItem>
        <NavItem itemId={1}>
          <Link to='/app2'>App 2</Link>
        </NavItem>
        <NavItem itemId={2}>
          <Link to='/app3'>App 3</Link>
        </NavItem>
      </NavList>
    </Nav>
  </PageSidebar>
);

export default App;

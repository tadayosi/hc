import {
  EmptyState, EmptyStateIcon, EmptyStateVariant,
  Nav, NavItem, NavList,
  Page, PageHeader, PageSection, PageSectionVariants, PageSidebar,
  Title
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import { CubesIcon } from '@patternfly/react-icons';
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
          <PageSection variant={PageSectionVariants.light}>
            <EmptyState variant={EmptyStateVariant.full}>
              <EmptyStateIcon icon={CubesIcon} />
              <Title headingLevel="h5" size="lg">Hello!</Title>
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
  <PageSidebar theme="dark">
    <Nav theme="dark">
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

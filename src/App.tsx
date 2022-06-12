import {
  Brand,
  Nav, NavItem, NavList,
  Page, PageHeader, PageSection, PageSidebar,
  Text, TextContent
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import App1 from './examples/App1';
import App2 from './examples/App2';
import App3 from './examples/App3';
import imgLogo from './logo.svg';

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => (
  <BrowserRouter>
    <Page
      header={<AppHeader />}
      sidebar={<AppSidebar />}
      isManagedSidebar>
      <Switch>
        <Route path='/app1' component={App1} />
        <Route path='/app2' component={App2} />
        <Route path='/app3' component={App3} />
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

class AppSidebar extends React.Component<{}, { activeItem: number; }> {
  constructor(props: {}) {
    super(props);
    this.state = { activeItem: 0 };
  }

  private onSelect = (result: { itemId: string | number; }) => {
    if (typeof result.itemId === 'number') {
      this.setState({ activeItem: result.itemId });
    }
  };

  render() {
    const { activeItem } = this.state;
    const PageNav = (
      <Nav onSelect={this.onSelect}>
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0}>
            <NavLink to='/app1'>App 1</NavLink>
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            <NavLink to='/app2'>App 2</NavLink>
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            <NavLink to='/app3'>App 3</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    );
    return <PageSidebar nav={PageNav} />;
  }
}

export default App;

import {
  Nav, NavItem, NavList,
  Page, PageHeader, PageSection, PageSidebar,
  Text, TextContent
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App1 from './examples/App1';
import App2 from './examples/App2';
import App3 from './examples/App3';

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => (
  <BrowserRouter>
    <Page
      header={<PageHeader showNavToggle />}
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

class AppSidebar extends React.Component<{}, { activeItem: number; }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeItem: 0
    };
  }

  private onSelect(result: { itemId: string | number; }) {
    console.log('>>>', result);
    console.log('>>>', typeof result.itemId);
    if (typeof result.itemId === 'number') {
      this.setState({ activeItem: result.itemId });
    }
  }

  render() {
    const { activeItem } = this.state;
    const PageNav = (
      <Nav onSelect={this.onSelect}>
        <NavList>
          <NavItem to='/app1' itemId={0} isActive={activeItem === 0}>
            App 1
          </NavItem>
          <NavItem to='/app2' itemId={1} isActive={activeItem === 1}>
            App 2
          </NavItem>
          <NavItem to='/app3' itemId={2} isActive={activeItem === 2}>
            App 3
          </NavItem>
        </NavList>
      </Nav>
    );
    return <PageSidebar nav={PageNav} />;
  }
}

export default App;

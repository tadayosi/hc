import { PageSection, Text, TextContent } from '@patternfly/react-core';
import React from 'react';

const App1: React.FunctionComponent = () => (
  <PageSection>
    <TextContent>
      <Text component="h1">App 1</Text>
      <Text component="p">This is an example plugin #1.</Text>
    </TextContent>
  </PageSection>
);

export default App1;

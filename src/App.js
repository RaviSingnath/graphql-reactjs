import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './ApolloClient'

import TopicExplorer from './TopicExplorer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <TopicExplorer />
    </ApolloProvider>
  );
}

export default App;

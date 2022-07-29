import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

// Construct our main GraphQL API endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />}>
              Home
            </Route>
            <Route path='/about' element={<About />}>
              About
            </Route>
          </Routes>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;

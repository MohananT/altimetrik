import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Root from './components/Root';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({});

const customTheme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
    // You can specify different fonts for other parts of your UI too
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <div className="App">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Root />
          </QueryClientProvider>

        </BrowserRouter>
      </div>
    </ChakraProvider>

  );
}

export default App;

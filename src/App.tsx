// import './App.css';
import ChakraStyleProvider from './provider/ui/ChakraStyleProvider'
import RouterConfig from './router/RouterConfig'
import QueryProvider from './provider/query/QueryProvider'

const App = () => (
  <div className="App">
    <QueryProvider>
      <ChakraStyleProvider>
        <RouterConfig />
      </ChakraStyleProvider>
    </QueryProvider>
  </div>
)

export default App

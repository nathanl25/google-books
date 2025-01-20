import Header from './components/Header/Header';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import SearchResultContextProvider from './context/SearchResultContextProvider';
function App() {
  return (
    <>
      <Header />
      <SearchResultContextProvider>
        <SearchContainer />
      </SearchResultContextProvider>
    </>
  );
}

export default App;

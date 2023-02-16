import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export { default as Feature } from './components';
export { default as Loading } from './components';
export { default as Preview } from './components';
export { default as Search } from './components';
export { default as Title } from './components';

// These imports won't work until you fix ./components/index.js
import {
  Feature,
  Loading,
  Preview,
  Search,
  Title
} from './components';

const App = () => {
  /**
   * We are at the App level component, which is top-most. Any state which needs to be shared between immediate children should
   * be made here, so create state pairs using useState() for:
   * 
   * searchResults, setSearchResults (default should be this object:  {info: {}, records: []} )
   * featuredResult, setFeaturedResult (default should be null)
   * isLoading, setIsLoading (default should be false)
   */

  return <div className="app">
    {/* <Title /> is static, doesn't need any props */}
    <Title />
    {/* <Search /> needs props for setIsLoading and setSearchResults (trigger <Loading /> on search start/end, and transfer results to preview) */}
    <Search />
    {/* <Preview /> needs props for searchResults, setIsLoading and setSearchResults (clicking prev/next buttons), and setFeaturedResult (clicking a preview) */}
    <Preview />
    {/* <Feature /> needs props for featuredResult, as well as setIsLoading and setSearchResults (clicking on searchable properties) */}
    <Feature />
    {/* <Loading /> is static, but should only render when isLoading is true */}
    <Loading /> {/* use a ternary and render null if isLoading is false */}
  </div>
}
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('app'));
/**
 * Boostrap the <App /> component into the '#app' element in the DOM,
 * using ReactDOM.render();
 */
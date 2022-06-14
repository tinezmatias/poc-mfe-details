// Vendor
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Internal
import { DataProvider } from './provider';
import { AppProvider } from './context';
import './index.css';

import Details from './containers/Details';

function App() {
  return (
    <AppProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/:movieid' element={<Details />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AppProvider>
  );
}

export default App;

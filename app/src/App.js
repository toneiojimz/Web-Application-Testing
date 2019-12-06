import React from 'react';
import Dashboard from './Components/Dashboard';
import styled from 'styled-components';

const Thepage = styled.div`
  background: orangered;
`;


function App() {
  return (
    <Thepage>
      <Dashboard/>
    </Thepage>
  );
}

export default App;

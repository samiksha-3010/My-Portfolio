// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>PortFolio</h2>

//     </div>
//   );
// }

// export default App;

import styled from 'styled-components'
import './App.css';
const H1 = styled.h1`
color: red;
`

const DefaultButton = styled.button`
background-color: black;
border: none;
padding: 10px;
color: white;
`

function App() {
  return (
    <div>
      <H1>Styled Components</H1>
      <p>My First styled  Project style Cmponent.</p>
      <DefaultButton>Click ME!</DefaultButton>

      
    </div>
  );
}

export default App;

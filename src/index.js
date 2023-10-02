import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
import { getDatabase } from "firebase/database";

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
//     <App />
  
// );

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
// export const database = getDatabase(App);


// reportWebVitals();

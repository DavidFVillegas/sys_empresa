import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import  "./index.css";
import Container from './Container';
import Clientes from './Clientes';
import Productos from './Productos';
import Proveedores from './Proveedores';



function App() {
  return (
    <Router>
      <section className="body">
        <section className="container">
          <Navbar />
          <hr className="divider" />
          <Routes>
            <Route path="/" exact element={<Container/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/productos" element={<Productos/>} />
            <Route path="/proveedores" element={<Proveedores/>} />
          </Routes>
        </section>
      </section>
    </Router>
  );
}

export default App


// import Navbar from './Navbar';
// import './index.css';
// import Container from './Container'

// function App() {  

//   return (
//       <section className='body'>
//         <section className='container'>
//           <Navbar/>
//           <hr class="divider" />
//           <Container/>
//         </section>
//       </section>
//   )
// }

// export default App
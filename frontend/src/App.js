import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header/>
      <main className='py-5'>
        <Container>
         <h1>Welcome to Budget Buddy</h1> 
        </Container>
      </main> 
      <Footer/>
    </div>
  );
}

export default App;

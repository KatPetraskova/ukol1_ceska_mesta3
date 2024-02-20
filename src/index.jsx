import { createRoot } from 'react-dom/client';
import './global.css';
import City from './components/City';
import cities from './cz-cities'



createRoot(
  document.querySelector('#app'),
).render(<City cities={cities} />);

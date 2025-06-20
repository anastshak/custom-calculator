import './styles/style.css';

import createCalculator from './components/layout';

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

createCalculator();

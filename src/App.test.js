import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders 日本研究', () => {
  render(
  	<BrowserRouter>
		  <App />
	  </BrowserRouter>,
  );
  const linkElement = screen.getByText(/日本研究/i);
  expect(linkElement).toBeInTheDocument();
});

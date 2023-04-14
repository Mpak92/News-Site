import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/redux';

describe('TEST APP', () => {
  test('titul check', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/latest news/i);
    expect(linkElement).toBeInTheDocument();
    screen.debug();
  });
})


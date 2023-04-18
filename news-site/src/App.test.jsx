import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/redux';
import useFetch from './components/customHooks/useFetch';

jest.mock('./components/customHooks/useFetch', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {
      let data = {
        "by": "author",
        "score": "0",
        "time": "0",
        "titul": "newsTitul"
      }
    })
  }
});

describe('TEST APP', () => {
  // let data;
  // beforeAll(() => {
  //   data = {
  //     "by": "author",
  //     "score": "0",
  //     "time": "0",
  //     "titul": "newsTitul"
  //   }
  // })
  test('titul check', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const titul = screen.getByText(/latest news/i);
    expect(titul).toBeInTheDocument();
  });
  test('refresh button check', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByTestId('newslist-refresh');
    expect(button).toBeInTheDocument();
  });
  test('closing loading indicator after receiving data', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    useFetch.mockReturnValue({data: data});
    const newsContainer = await screen.findByTestId('news-container');
    expect(newsContainer).toBeInTheDocument();
    // screen.debug();
  });
})


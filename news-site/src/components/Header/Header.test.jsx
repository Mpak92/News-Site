import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

test('titul check', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    const titul = screen.getByText(/latest news/i);
    expect(titul).toBeInTheDocument();
});
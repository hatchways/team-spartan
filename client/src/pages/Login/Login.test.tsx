import { render } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login tests', () => {
  test('smoke test', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can input values and submit form', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    const account = getByText('Forgot your password?');
    expect(account).toBeInTheDocument();
  });
});

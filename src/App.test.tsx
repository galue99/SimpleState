import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import {Search} from './components/Search';
import {Button} from './components/Button';
import {NavBar} from './components/NavBar';
import {Pagination} from './components/Pagination';

import {data} from './mock/data.json';
import {Favorites} from './page/Favorites';

describe('App', () => {

  it('should initialise navbar Component', () => {
    const { queryByTestId } = render(<NavBar />, { wrapper: BrowserRouter });
    expect(queryByTestId('my-title-id')).toHaveTextContent('Star wars characters');
  });

});

describe('Search', () => {

  it('should initialise with "No Query"', () => {
    const { queryByTestId } = render(<Search />, { wrapper: RecoilRoot });

    const input = queryByTestId('input') as HTMLInputElement;
    expect(input.value).toEqual('');
  });

  it('should initialise with "Query"', () => {
    const { queryByTestId } = render(<Search />, { wrapper: RecoilRoot });

    const input = queryByTestId('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Tatooine' } });

    expect(input.value).toEqual('Tatooine');

  });

  it('should call props.onClick when clicked', async () => {

    const mockOnClick = jest.fn();

    const { getByTestId } = render(
      <Button onClick={mockOnClick} data-testid="button">Search</Button>
    );

    fireEvent.click(getByTestId('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);

  });

  it('should initialise with "Data Queries"', () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<Pagination data={data} />, { wrapper: RecoilRoot });

    expect(screen.getByText('Tatooine')).toBeInTheDocument();

  });

  it('should initialise with "Favorites"', () => {

    render(<Favorites />, { wrapper: RecoilRoot });

    expect(screen.getByTestId('no-data')).toBeInTheDocument();

  });

});

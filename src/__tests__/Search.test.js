import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search';

describe("Search", () => {
    const setSearchResults = () => {}
    const { asFragment } = render(<Search setSearchResults={setSearchResults} />);

    it("renders correctly", () =>{
        expect(asFragment()).toMatchSnapshot();
    })
})
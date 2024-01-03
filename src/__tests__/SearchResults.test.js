import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("SearchResults", () => {
    const search = ["https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]

    const { asFragment } = render(<SearchResults searchResults={search} />);

    it("renders correctly", () =>{
        expect(asFragment()).toMatchSnapshot();
    })
})
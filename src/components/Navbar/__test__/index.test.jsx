import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme/theme';

const Component = ({account}) => {
    return (
            <ThemeProvider theme={theme}>
                <Navbar account={account} />
            </ThemeProvider>
    )
}

describe('Navbar', () => {
    it('should render logo properly', () => {
        render(<Component account={{user: 'Lorem'}} />)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument();
    })

    it('should get user name properly', () => {
        render(<Component account={{user: 'Lorem'}} />)
        expect(screen.queryByText('Lorem')).toBeInTheDocument()
    })
})



// it('should render the logo image with correct alt text', () => {
//   render(<Component/>);
//   const image = screen.getByRole('img');

//   expect(image).toBeInTheDocument();

//   expect(image).toHaveAttribute('alt', 'logo');
//   expect(image).toHaveAttribute('src', Logo);
// });

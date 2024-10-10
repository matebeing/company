import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '..';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme/theme';

// jest.mock('react-router-dom', () => {
//   return {
//     useLocation: () => ({
//       state: { data: { user: 'Lorem' } }
//     })
//   }
// })

jest.mock('react-router-dom', () => {
  // const actual = await jest.requireActual('react-router-dom')
  return {
    // MemoryRouter: 'div',
    Link: 'a',
    useLocation: () => ({
      state : {
        data: {
          user: 'Lorem'
        }
      }
    })
  }
})

jest.mock('axios', () => {
  return {
    get: () => Promise.resolve({
      data: [
        {
          id: 1,
          title: "Post 1",
          content: "conteudo",
          category: "categoria",
          thumbnail: "thumbnail1.jpg",
          publishedAt: "02/12/2021 12:00:00",
        },
        {
          id: 2,
          title: "Post 2",
          content: "conteudo",
          category: "categoria",
          thumbnail: "thumbnail2.jpg",
          publishedAt: "02/12/2021 12:00:00",
        },
      ]
    })
  }
});


describe('Home', () => {
  const Component = () => {
    return (
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
    );
  }
  
  it('should render posts', async () => {
    console.log(MemoryRouter)
    render(<Component />)
    screen.debug()
    const article = await screen.findByText('Post 1')
    console.log(article )
    expect(article).toBeInTheDocument()
    screen.debug()
  })
});

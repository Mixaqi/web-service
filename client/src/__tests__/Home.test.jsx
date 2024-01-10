import { render } from '@testing-library/react'
import Home from '../Pages/Home'

describe('Header', () => {
  it('Home should display in App', () => {
    const component = render(<Home />)
    expect(component).toMatchSnapshot()
  })
})

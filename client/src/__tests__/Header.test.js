import { render } from '@testing-library/react'
import Header from '../Components/Header'

describe('Header', () => {
  it('Header should display in App', () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })
})

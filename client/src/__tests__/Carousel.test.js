import { render } from '@testing-library/react'
import Carousel from '../Components/CarouselBox'

describe('Carousel', () => {
  it('snapshot for carousel', () => {
    const component = render(<Carousel />)
    expect(component).toMatchSnapshot()
  })
})

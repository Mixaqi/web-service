import { render} from '@testing-library/react'
import Cards from '../Components/Cards'

describe('Cards', () => {
    it('snapshot test', ()=>{
        const component = render(<Cards />)
    expect(component).toMatchSnapshot()
})
})
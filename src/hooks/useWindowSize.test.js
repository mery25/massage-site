import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import useWindowSize from './useWindowSize'

const fireResize = (width, height) => {
    window.innerWidth = width
    window.innerHeight = height
    act(() => {
        window.dispatchEvent(new Event('resize'))
    })

}

const TestComponent = () => {
    const [width, height] = useWindowSize()
    return (
        <div>
            <span>{width}</span>
            <span>{height}</span>
        </div>
    )
}

test('useWindowSize listen to window resize and set width and height', () => {
    const { container, rerender } = render(<TestComponent />)
    const widthSpan = container.firstChild.children[0]
    const heightSpan = container.firstChild.children[1]

    fireResize(320, 450)
    rerender(<TestComponent />)
    expect(widthSpan.textContent).toBe('320')
    expect(heightSpan.textContent).toBe('450')

    fireResize(450, 320)
    rerender(<TestComponent />)
    expect(widthSpan.textContent).toBe('450')
    expect(heightSpan.textContent).toBe('320')

    fireResize(655, 655)
    rerender(<TestComponent />)
    expect(widthSpan.textContent).toBe('655')
    expect(heightSpan.textContent).toBe('655')

})
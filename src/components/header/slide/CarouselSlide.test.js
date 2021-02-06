import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import CarouselSlide from "./CarouselSlide"

const fireResize = (width, height) => {
    window.innerWidth = width
    window.innerHeight = height
    act(() => {
        window.dispatchEvent(new Event('resize'))
    })

}

describe("CarouselSlide", () => {

    test('Should have an image', () => {
        const image = {
            src: "",
            alt: "Image"
        }
        render(<CarouselSlide image={image} />);

        expect(screen
            .getByAltText('Image')
            .closest('img')).toBeInTheDocument()

    })

    test('Should change image classname when resize screen', () => {
        const image = {
            src: "",
            alt: "Image"
        }
        const { rerender } = render(<CarouselSlide image={image} />);

        const img = screen
            .getByAltText('Image')
            .closest('img')

        fireResize(345, 500)
        rerender(<CarouselSlide image={image} />)
        expect(img.className).toContain('carousel-slide__image--portrait')

        fireResize(690, 234)
        rerender(<CarouselSlide image={image} />)
        expect(img.className).toContain('carousel-slide__image--landscape')

        //Set portrait className when whe aspect ratio is lower than image aspect ratio
        fireResize(1024, 690)
        rerender(<CarouselSlide image={image} />)
        expect(img.className).toContain('carousel-slide__image--portrait')

        //Set landscape className when whe aspect ratio is higher than image aspect ratio
        fireResize(1024, 650)
        rerender(<CarouselSlide image={image} />)
        expect(img.className).toContain('carousel-slide__image--landscape')

    })

    test('Should change image position when resize screen', () => {
        const image = {
            src: "",
            alt: "Image"
        }
        const { rerender } = render(<CarouselSlide image={image} />);

        const img = screen
            .getByAltText('Image')
            .closest('img')

        fireResize(345, 500)
        rerender(<CarouselSlide image={image} />)
        expect(img.style).toHaveProperty('bottom', '0px')
        expect(img.style).toHaveProperty('left', '-202.5px')

        fireResize(690, 234)
        rerender(<CarouselSlide image={image} />)
        expect(img.style).toHaveProperty('bottom', '-113px')
        expect(img.style).toHaveProperty('left', '0px')

        fireResize(1024, 690)
        rerender(<CarouselSlide image={image} />)
        expect(img.style).toHaveProperty('bottom', '0px')
        expect(img.style).toHaveProperty('left', '-5.5px')

        fireResize(1024, 650)
        rerender(<CarouselSlide image={image} />)
        console.log(img.style)
        expect(img.style).toHaveProperty('bottom', '-16.33px')
        expect(img.style).toHaveProperty('left', '0px')
    })
})
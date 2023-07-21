import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage } from '../../src/components/ProductImage';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';

describe('ProductImage', () => { 

    test('Debe mostrar con la url por props', () => { 
        const wrapper = renderer.create(
            <ProductImage img='https://' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot()

     })

     test('Debe mostrar la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 } >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot()

     })

  })
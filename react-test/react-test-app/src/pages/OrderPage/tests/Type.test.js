import { render } from '@testing-library/react'
import Type from '../Type'

test('displat product images from server', async () => {
  render(<Type orderType='products' />)

  const productsImages = await screen.finAllByRole('img', {
    name: /products$/i,
  })
  expect(productsImages).toHaveLength(2);

  const altText = productsImages.map((element) => element.alt);
  expect(allText).toEqual(['America product', 'England product']);
})
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails())).toBeTruthy();
    expect(productDetails('itemUm', 'itemDois')).toHaveLength(2);
    expect(productDetails('itemUm', 'itemDois')[0]).toBeInstanceOf(Object);
    expect(productDetails('itemUm', 'itemDois')[1]).toBeInstanceOf(Object);
    expect(productDetails('itemUm', 'itemDois')[0]).not.toEqual(productDetails('itemUm', 'itemDois')[1])
    expect(productDetails('itemUm', 'itemDois')[0].details.productId).toMatch('123');
    expect(productDetails('itemUm', 'itemDois')[1].details.productId).toMatch('123');
  });
});

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('number')).toEqual(undefined);
    expect(typeof circle(5)).toEqual('object');
    expect(Object.keys(circle(7)).length).toBe(3);
    expect(circle()).toBeUndefined();
    expect(circle(2)['circumference']).toEqual(12.56);
    expect(circle(3)['area']).toBeCloseTo(28.26);
    expect(circle(3).area).toBeCloseTo(28.26);
    expect(circle(3).radius).toBe(3);
    expect(circle(3).circumference).toBe(18.84);
  });
});

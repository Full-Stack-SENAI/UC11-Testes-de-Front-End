describe("Teste de Calculadora", function()
{
  it("Somas válidas", function()
  {
      expect(soma(4,6)).toBe(10);
      expect(soma(8,8)).toBe(16);
  });

  it("Subtração válidas", function()
  {
      expect(subtracao(10,6)).toBe(4);
      expect(subtracao(12,2)).toBe(10);
  });

  it("Multiplicação válidas", function()
  {
      expect(multiplicacao(3,6)).toBe(18);
      expect(multiplicacao(8,8)).toBe(64);
  });

  it("Divisão válidas", function()
  {
      expect(divisao(42,6)).toBe(7);
      expect(divisao(88,8)).toBe(11);
  });


});
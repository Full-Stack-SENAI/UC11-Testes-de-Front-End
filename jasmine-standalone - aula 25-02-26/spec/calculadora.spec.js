describe('Teste Calculadora', function() {
  it('Deve somar dois números corretamente', function(){
      expect(soma(1, 2)).toBe(3);
      expect(soma(9, 9)).toBe(18);
  });

  it('Deve subtrair dois números corretamente', function(){
      expect(subtracao(5, 2)).toBe(3);
      expect(subtracao(19, 9)).toBe(10);
  });

  it('Deve multiplicar dois números corretamente', function(){
      expect(multiplicacao(3, 4)).toBe(12);
      expect(multiplicacao(7, 2)).toBe(14);
  });

  it('Deve dividir dois números corretamente', function(){
      expect(divisao(10, 2)).toBe(5);
      expect(divisao(15, 3)).toBe(5);
  });
  
});

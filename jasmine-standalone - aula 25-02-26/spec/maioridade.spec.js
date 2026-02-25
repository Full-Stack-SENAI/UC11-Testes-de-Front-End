describe('Teste de validação - Maior de idade', function() {

  it('Deve retornar "Maior de idade" para idades maiores ou iguais a 18', function() {
    expect(maioridade(20)).toBe('Maior de idade');
  });
  
  it('Deve retornar "Menor de idade" para idades menores ou iguais a 18', function() {
    expect(maioridade(15)).toBe('Menor de idade');
  });

  it('Deve retornar "Idade invalida" em outra situação', function() {
    expect(maioridade(-20)).toBe('Idade invalida');
  });

});
describe("Função maioridade", function()
{
    it("Deve retornar 'Maior de idade' para idades acima de 18 anos.", function()
  {
      expect(maioridade(20)).toBe("Maior de idade");
  });

    it("Deve retornar 'Menor de idade' para idades abaixo de 18 e acima de 0.", function()
  {
      expect(maioridade(15)).toBe("Menor de idade");
  });

    it("Deve retornar 'Idade inválida' para entradas iguais a 0 ou negativas.", function()
  {
      expect(maioridade(-5)).toBe("Idade inválida");
      expect(maioridade(0)).toBe("Idade inválida");
  });

});

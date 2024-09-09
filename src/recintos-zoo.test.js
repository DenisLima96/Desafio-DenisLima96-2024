import RecintosZoo from './recintos-zoo';

describe('Recintos do Zoológico', () => {
  let recintosZoo;

  beforeEach(() => {
    recintosZoo = new RecintosZoo();
  });

  it('deve rejeitar Animal inválido', () => {
    const resultado = recintosZoo.analisaRecintos('unicornio', 1); // Animal inválido
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('deve rejeitar Quantidade inválida', () => {
    const resultado = recintosZoo.analisaRecintos('macaco', -1); // Quantidade inválida
    expect(resultado.erro).toBe('Quantidade inválida');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('deve encontrar recintos para 2 macacos', () => {
    const resultado = recintosZoo.analisaRecintos('macaco', 2);
    expect(resultado.erro).toBeNull();
    expect(resultado.recintosViaveis).toEqual([
      'Recinto 1 (espaço livre: 4 total: 10)',
      'Recinto 2 (espaço livre: 3 total: 5)',
      'Recinto 5 (espaço livre: 3 total: 9)'
    ]);
  });
  

  it('deve encontrar recinto para 1 crocodilo', () => {
    const resultado = recintosZoo.analisaRecintos('crocodilo', 1);
    expect(resultado.erro).toBeNull(); // Deve ser nulo se houver recinto viável
    expect(resultado.recintosViaveis).toEqual([
      'Recinto 4 (espaço livre: 5 total: 8)',
      'Recinto 6 (espaço livre: 4 total: 12)' // Ambos os recintos devem ser incluídos
    ]);
  });
  
  
  
})  

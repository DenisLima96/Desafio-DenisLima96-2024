import RecintosZoo from './recintos-zoo';

describe('Recintos do zoológico', () => {
  let recintosZoo;

  beforeEach(() => {
    recintosZoo = new RecintosZoo();
  });

  it('deve retornar recintos viáveis para macacos', () => {
    const resultado = recintosZoo.analisaRecintos('MACACO', 2);
    expect(resultado.erro).toBeNull();
    expect(resultado.recintosViaveis).toEqual([
      'Recinto 1 (espaço livre: 7 total: 10)',
      'Recinto 3 (espaço livre: 7 total: 7)'
    ]);
  });

  it('deve retornar erro se o animal for inválido', () => {
    const resultado = recintosZoo.analisaRecintos('GATO', 2);
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('deve retornar erro se a quantidade for inválida', () => {
    const resultado = recintosZoo.analisaRecintos('MACACO', -1);
    expect(resultado.erro).toBe('Quantidade inválida');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('deve retornar erro se não houver recintos viáveis para a quantidade especificada', () => {
    const resultado = recintosZoo.analisaRecintos('MACACO', 10);
    expect(resultado.erro).toBe('Não há recinto viável');
    expect(resultado.recintosViaveis).toEqual([]);
  });

  it('deve encontrar recintos para 1 crocodilo', () => {
    const resultado = recintosZoo.analisaRecintos('CROCODILO', 1);
    expect(resultado.erro).toBeNull();
    expect(resultado.recintosViaveis).toEqual([]);
  });
});

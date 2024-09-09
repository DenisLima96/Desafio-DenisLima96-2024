class RecintosZoo {
  constructor() {
    this.recintos = [
      { nome: 'Recinto 1', bioma: 'savana', espacoLivre: 7, espacoTotal: 10, animais: ['macaco', 'macaco', 'macaco'] },
      { nome: 'Recinto 2', bioma: 'floresta', espacoLivre: 5, espacoTotal: 5, animais: [] },
      { nome: 'Recinto 3', bioma: 'savana e rio', espacoLivre: 5, espacoTotal: 7, animais: ['gazela'] },
      { nome: 'Recinto 4', bioma: 'rio', espacoLivre: 8, espacoTotal: 8, animais: [] },
      { nome: 'Recinto 5', bioma: 'savana', espacoLivre: 6, espacoTotal: 9, animais: ['leão'] },
      { nome: 'Recinto 6', bioma: 'rio', espacoLivre: 7, espacoTotal: 12, animais: [] }
    ];

    this.animaisValidos = [
      { tipo: 'leão', tamanho: 3, biomas: ['savana'], carnivoro: true },
      { tipo: 'leopardo', tamanho: 2, biomas: ['savana'], carnivoro: true },
      { tipo: 'crocodilo', tamanho: 3, biomas: ['rio'], carnivoro: true },
      { tipo: 'macaco', tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
      { tipo: 'gazela', tamanho: 2, biomas: ['savana'], carnivoro: false },
      { tipo: 'hipopotamo', tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
    ];
  }

  analisaRecintos(tipoAnimal, quantidade) {
    const animal = this.animaisValidos.find(a => a.tipo.toLowerCase() === tipoAnimal.toLowerCase());

    if (!animal) {
      return { erro: 'Animal inválido', recintosViaveis: [] };
    }

    if (quantidade <= 0) {
      return { erro: 'Quantidade inválida', recintosViaveis: [] };
    }

    let recintosViaveis = [];

    for (let recinto of this.recintos) {
      // Verificar se o bioma é compatível
      if (!animal.biomas.includes(recinto.bioma) && !(animal.tipo === 'hipopotamo' && recinto.bioma === 'savana e rio')) continue;

      // Verificar se há espaço suficiente
      const espacoNecessario = quantidade * animal.tamanho + (recinto.animais.length > 0 ? 1 : 0);
      if (recinto.espacoLivre < espacoNecessario) continue;

      // Regras específicas para carnívoros
      if (animal.carnivoro && recinto.animais.length > 0 && !recinto.animais.every(a => a === animal.tipo)) {
        continue;  // Carnívoros só podem ficar com a própria espécie
      }

      // Regras específicas para hipopótamos
      if (animal.tipo === 'hipopotamo' && recinto.bioma !== 'savana e rio' && recinto.animais.length > 0 && recinto.animais[0] !== 'hipopotamo') {
        continue;  // Hipopótamos só toleram outras espécies em savana e rio
      }

      // Macaco não pode ficar sozinho
      if (animal.tipo === 'macaco' && recinto.animais.length === 0 && quantidade === 1) {
        continue;  // Um macaco sozinho não se sente confortável
      }

      // Verificação específica para crocodilos
      if (animal.tipo === 'crocodilo' && recinto.bioma !== 'rio') {
        continue;  // Crocodilos só podem estar em recintos com o bioma rio
      }

      // Atualizar espaço livre
      const espacoRestante = recinto.espacoLivre - espacoNecessario;

      recintosViaveis.push({
        nome: recinto.nome,
        espacoLivre: espacoRestante,
        espacoTotal: recinto.espacoTotal
      });
    }

    if (recintosViaveis.length === 0) {
      return { erro: 'Não há recinto viável', recintosViaveis: [] };
    }

    // Ordenar os recintos viáveis pelo número do recinto
    recintosViaveis.sort((a, b) => parseInt(a.nome.split(' ')[1]) - parseInt(b.nome.split(' ')[1]));

    return {
      erro: null,
      recintosViaveis: recintosViaveis.map(recinto => `${recinto.nome} (espaço livre: ${recinto.espacoLivre} total: ${recinto.espacoTotal})`)
    };
  }
}

export default RecintosZoo;

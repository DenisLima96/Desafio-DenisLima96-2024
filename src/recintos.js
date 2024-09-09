class Recinto {
  constructor(id, tipo, capacidade, animais) {
    this.id = id;
    this.tipo = tipo;
    this.capacidade = capacidade;
    this.animais = animais;
    this.espacoLivre = capacidade - animais.length;
  }
}

export default Recinto;
// ============================================================
// CLASSE Pessoa
// ------------------------------------------------------------
// Acompanhe o professor e digite TODO o código abaixo.
// Consulte o diagrama UML mostrado em aula:
//   Atributos:  nome, dataNascimento
//   Métodos:    calcularIdade(), toJSON()
// ============================================================

// TODO: abra a classe -> class Pessoa {


  // TODO: crie o constructor(nome, dataNascimento) {
  //   - atribua o parâmetro "nome" ao atributo this.nome
  //   - converta "dataNascimento" em um objeto Date de verdade
  //     e atribua ao atributo this.dataNascimento
  // }


  // TODO: crie o método calcularIdade() {
  //   - crie uma constante "hoje" com um novo objeto Date()
  //   - calcule a diferença de anos entre hoje e this.dataNascimento
  //   - ajuste a idade caso o aniversário deste ano ainda não
  //     tenha chegado (compare mês e dia)
  //   - retorne a idade calculada
  // }


  // TODO: crie o método toJSON() {
  //   - retorne um objeto simples com nome, dataNascimento
  //     (como string) e idade (chamando calcularIdade())
  // }


// TODO: feche a classe -> }


// TODO: exporte a classe -> module.exports = Pessoa;

class Pessoa {
  constructor(nome, dataNascimento){
    this.nome = nome;
    this.dataNascimento = new Date(dataNascimento);
  }

  calcularIdade() {
    const hoje = new Date();
    let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
    const diferencaMes = hoje. getMonth() - this.dataNascimento.getMonth();
    const aniversarioAindaNaochegou =
    diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < this.dataNascimento.getDate());

    if (aniversarioAindaNaochegou) {
      idade--;
    }
    return idade;
  }
  toJSON() {
    return {
      nome: this.nome,
      dataNascimento: this.dataNascimento.toISOString().split('T')[0],
      idade: this.calcularIdade(),
    };
  }
}
module.exports = Pessoa;
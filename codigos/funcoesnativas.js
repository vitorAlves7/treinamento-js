const alunos = [
    {
        nome: "Manuel",
        idade: 18,
        media: 6
    },
    {
        nome: "Francisco",
        idade: 15,
        media: 4
    },
    {
        nome: "Alisson",
        idade: 18,
        media: 8
    },
]

const employees = [{
    name: 'Luke',
    department: 'Financeiro',
    salary: 1500
  }, {
    name: 'Han',
    department: 'Financeiro',
    salary: 1200
  }, {
    name: 'Ben',
    department: 'Marketing',
    salary: 2000
  }, {
    name: 'Leia',
    department: 'Marketing',
    salary: 1750
  }, {
    name: 'Rey',
    department: 'Financeiro',
    salary: 1000
  }]

const nomes = alunos.map(aluno => aluno.nome)

console.log(nomes);


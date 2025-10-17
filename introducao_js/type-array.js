const arrayValor = [1, 2, 3, 4, 5, 6];
console.log(arrayValor);

const arrayObjects =[
    {nome: 'Fulano de tal', idade: 23, presidente: false},
    {nome: 'Lula da Silva', idade: 80, presidente: true},
];
console.log('Antes: ', arrayObjects);

arrayObjects.push(
    {nome: 'Dilma Rousseff', idade: 75, presidente: false}
)

console.log('Depois: ', arrayObjects);
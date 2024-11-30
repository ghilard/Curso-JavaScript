const carrinho = [
    {name: 'Caneta', qtde: 10, preco: 7.99},
    {name: 'Impressora', qtde: 0, preco: 649.50},
    {name: 'Caderno', qtde: 4, preco: 27.10},
    {name: 'Lapis', qtde: 3, preco: 5.82},
    {name: 'Tesoura', qtde: 1, preco: 19.20}
]

const getNome = item => item.name;
console.log(carrinho.map(getNome));

const getTotal = item => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);
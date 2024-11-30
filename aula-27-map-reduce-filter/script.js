const carrinho = [
    {name: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {name: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {name: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {name: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {name: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]

// filter, map, reduce

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const fragil = item => item.fragil;
const getTotal = item => item.qtde * item.preco;
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1;
    const novoTotal = acc.total + el;
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediainicial = {qtde: 0, total: 0, media: 0};

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce(getMedia, mediainicial)
    .media

console.log(`A media é ${media}`);
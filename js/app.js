let totalGeral;

limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;

    let nomeProduto = produto.split('-')[0]; // no html o produto está assim: produtoX - R$100, essa funcão
    // separa isso em 2 partes, sendo a primeira parte: "produtoX" e a segunda parte> "R$100", nesse caso
    // ficamos com a primeira parte, por isso usamos [0]

    let valorUnitario = produto.split('R$')[1]; //no html o produto está assim: produtoX - R$100, essa funcão
    // separa isso em 2 partes, sendo a primeira parte: "produtoX - " e a segunda parte> "100", nesse caso
    // ficamos com a segunda parte, por isso usamos [1]

    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  totalGeral = totalGeral + preco;

  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`;

  document.getElementById('quantidade').value = '';

}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';

}

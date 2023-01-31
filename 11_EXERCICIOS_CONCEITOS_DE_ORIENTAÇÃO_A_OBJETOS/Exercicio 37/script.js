class Carrinho {
    constructor(itens, quantidade, valorTotal) {
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    addItem(item) {
        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade += item.quantidade;

                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push(item);
        }

        this.quantidade += item.quantidade;
        this.valorTotal += item.preco * item.quantidade;
    }

    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].quantidade += item.quantidade;

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function (obj) {
                    return obj.id == item.id
                })

                this.quantidade -= this.itens[itemCarrinho].quantidade;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        quantidade: 5,
        preco: 20
    },
    {
        id: 02,
        nome: "Short",
        quantidade: 5,
        preco: 15
    }
], 10, 35);

console.log(carrinho);

carrinho.addItem({
    id: 01, nome: "Sapato", quantidade: 40, preco: 100
});

console.log(carrinho);


carrinho.addItem({
    id: 03, nome: "Boné", quantidade: 5, preco: 50
});

console.log(carrinho);

carrinho.removeItem({
    id: 03, nome: "Boné", quantidade: 5, preco: 50
});

console.log(carrinho);
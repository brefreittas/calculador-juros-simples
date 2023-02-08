//Criando a função global
function exec() {
    // Criando uma função que calcula os juros
    function calcJuros(c, t, p) {
        taxaPorCento = t / 100;
        juros = c * taxaPorCento * p;
        return juros;
    }

    //Capturando o clique do usuario no botão de calcular
    document.addEventListener('click', (e) => {
        const element = e.target;
        
        //Capturando as informações que foram escritas pelo user
        capital = document.querySelector('.capital').valueAsNumber;
        taxa = document.querySelector('.taxa').valueAsNumber;
        periodo = document.querySelector('.periodo').valueAsNumber;
        //Capturando o corpo da página
        main = document.querySelector('.main');
        
        //Vendo se o botão clicado foi o de calcular
        if (element.classList.contains('btn-calcular')) {
            if (isNaN(capital) || isNaN(taxa) || isNaN(periodo)) {
                alert('Preencha todos os campos corretamente!');
            } else {
                //Executando a função com as informações dadas pelo usuário
                calcJuros(capital, taxa, periodo);

                //Criando uma tag "p" no main para exibir o resultado para o user.
                const res = document.createElement('p');
                res.setAttribute('class', 'res');
                res.innerHTML = `Com um capital de R$${capital}, uma taxa de ${taxa}% a.a, e com um período de ${periodo} anos, o juros recebido ao final é de R$${juros}, dando um total de R$${
                    capital + juros
                }`;
                main.appendChild(res);
            }
        }
    });
    
}

exec();

const conexao = require('../data/database-context')();
const { dateDiffInDays } = require('../utils/datediff');


module.exports = () => {
    const repository = {};    
    
    const relatorio = {};

    function totalFechamento(valor){
        relatorio.totalFechamento = valor;
    }

    function calculoFechamento(dados) {
        const dias = dateDiffInDays(new Date(dados.data_locacao), new Date());
        return (dias * dados.valor_diaria);        
    }    

    repository.getCustoTotalLocacao = (callback) => {
        const selectString = 'select * from locadora';       

        conexao.query(selectString, (error, rows) => {
            if(error){
                console.log(error);
                return;
            }

            if (rows !== undefined && rows.length > 0) {
                let valorTotal = rows.reduce((accumulator, currentValue) => accumulator + calculoFechamento(currentValue), 0);
                totalFechamento(valorTotal);
                callback(relatorio);
            }
            else {
                callback(undefined);
            }
        });
    }

    return repository;
}
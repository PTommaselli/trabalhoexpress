const app = require('./config/server');//faz a requisição em config/server buscando outras requisições e configuracoes
app.listen(3000, () => console.log('servidor online'));//funcao que indica em qual a porta que o server deve ser aberto nesse caso a porta 3000
                                                       //alerta no console um 'server on' para indicar que escutou a porta 3000 e o server foi aberto

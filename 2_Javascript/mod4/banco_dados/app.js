// Sync do sequelize com banco de dados
(async () => {
    
	const Produto = require('./models/produto');

	try {
			// 1- CREATE
			const resultadoCreate = await Produto.create({
				nome: 'Violão acústico nylon clássico',
				preco: 447.00,
				descricao: 'Marca: Tagima, Cor: NTS'
		})
		console.log('Produto cadastrado com sucesso:', resultadoCreate);
		
	} catch (error) {
			console.log('ERRO\n',error);

	} finally {
	 	//await Produto.close();
	}
})();
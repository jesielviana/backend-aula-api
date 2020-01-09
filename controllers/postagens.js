class Postagens { 
  constructor(postagemModel) { 
    this.Postagem = postagemModel;
  }

  async adicionar (postagemDTO) { 
    const postagem = new this.Postagem(postagemDTO);
    await postagem.save();
    return 'Adicionado com sucesso!';
  }

  async consultarTodos () { 
    const postagens = await this.Postagem.find({}, null, { sort: {dataAlteracao: -1}});
    return postagens;
  }

  async alterarPorId (id, postagemDTO) { 
    await this.Postagem.updateOne({_id: id}, postagemDTO);
  }
}

module.exports = Postagens;
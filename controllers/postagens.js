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


  async consultaPorId(id) {
    try {
      return await this.Postagem.findById(id, '_id titulo texto dataAlteracao autor');
    } catch (err) {
      throw new Error(err);
    }
  }

  async consultarPorAutor(autor) { 
    const postagens = await this.Postagem.find( {autor : autor}, null, { sort: {dataAlteracao: -1}});
    return postagens;
  }

  async alterar (id, postagemDTO) { 
    await this.Postagem.updateOne({_id: id}, postagemDTO);
  }
}

module.exports = Postagens;
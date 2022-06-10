class UsuariosController {
  constructor (Usuario) {
    this.Usuario = Usuario;
  }

  async consultaTodos() {
    try {
      return await this.Usuario.find({});
    } catch (err) {
      throw new Error(err);
    }
  }

  async consultaPorId(id) {
    try {
      return await this.Usuario.findById(id, '_id nome idade dataAlteracao');
    } catch (err) {
      throw new Error(err);
    }
  }

  async adicionar(UsuarioDTO) {
    try {
      const Usuario = new this.Usuario(UsuarioDTO);
      const UsuarioSalvo = await Usuario.save();
      return UsuarioSalvo;
    } catch (err) {
      throw new Error(err);
    }
  }

  async alterar(id, UsuarioDTO) {
    try {
      await this.Usuario.findOneAndUpdate({ _id: id }, UsuarioDTO);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remover(id) {
    try {
      await this.Usuario.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UsuariosController;
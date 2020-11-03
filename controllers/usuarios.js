class UsersController {
  constructor(User) {
    this.User = User;
  }

  async consultaTodos() {
    try {
      return await this.User.find({});
    } catch (err) {
      throw new Error(err);
    }
  }

  async consultaPorId(id) {
    try {
      return await this.User.findById(id, '_id nome idade dataAlteracao');
    } catch (err) {
      throw new Error(err);
    }
  }

  async adicionar(userDTO) {
    try {
      const user = new this.User(userDTO);
      await user.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async alterar(id, userDTO) {
    try {
      await this.User.findOneAndUpdate({ _id: id }, userDTO);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remover(id) {
    try {
      await this.User.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UsersController;
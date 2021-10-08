export default class BrBad {
  getMainUrl = () => {
    return "https://www.breakingbadapi.com/api/";
  };

  async getAllCharacters() {
    const elements = await (
      await fetch(`${this.getMainUrl()}characters`)
    ).json();
    return elements.map((element) => {
      return this._transformChar(element);
    });
  }
  async getCharacter(id) {
    const data = await (
      await fetch(`${this.getMainUrl()}characters/${id}`)
    ).json();
    return this._transformChar(data[0]);
  }
  _transformChar(char) {
    return {
      id: char.char_id,
      name: char.name,
      birthday: char.birthday,
      img: char.img,
      nickname: char.nickname,
    };
  }
}

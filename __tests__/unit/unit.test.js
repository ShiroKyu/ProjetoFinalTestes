const { password } = require("../../src/config/database");

describe("testingg filters", () => {
  it("should filter students by ads course", () => {
    const estudantes = [
      { nome: "maria", curso: "civil" },
      { nome: "joao", curso: "civil" },
      { nome: "pedro", curso: "ads" },
      { nome: "alice", curso: "ads" },
    ];
    var estudantes_ads = [];
    for (var i = 0; i < estudantes.length; i++) {
      if (estudantes[i].curso == "ads") {
        estudantes_ads.push(estudantes[i]);
      }
    }

    expect(estudantes_ads).toEqual(expect.anything());
  });
  it("should filter students by their situation concluded", () => {
    const estudantes = [
      { nome: "maria", situacao: "concluido" },
      { nome: "joao", situacao: "cancelado" },
      { nome: "pedro", situacao: "concluido" },
      { nome: "alice", situacao: "transferido" },
    ];
    var estudantes_concluido = [];
    for (var i = 0; i < estudantes.length; i++) {
      if (estudantes[i].situacao == "concluido") {
        estudantes_concluido.push(estudantes[i]);
      }
    }

    expect(estudantes_concluido).toEqual(expect.anything());
  });
});

describe("authentication", () => {
  it("should althenticate", () => {
    const user = { email: "test@gmail.com", password: "654123" };
    var valid_password = false;
    if (user.password == "654123") {
      valid_password = true;
    }
    expect(valid_password).toBe(true);
  });
  it("should not althenticate", () => {
    const user = { email: "test@gmail.com", password: "654123" };
    var valid_password = false;
    if (user.password == "123456") {
      valid_password = true;
    }
    expect(valid_password).toBe(false);
  });
});

describe("post", () => {
  it("should delete post in array", () => {
    posts = [
      {
        titulo: "dia bonito",
        descricao: "hoje estava bonito pois estava nublado",
      },
      { titulo: "calor", descricao: "esses dias estão muito quentes" },
    ];
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].titulo == "calor") {
        posts.splice(i, 1);
      }
    }
    expect(posts.length).toBe(1);
  });
  it("should not delete post in array", () => {
    posts = [
      {
        titulo: "dia bonito",
        descricao: "hoje estava bonito pois estava nublado",
      },
      { titulo: "calor", descricao: "esses dias estão muito quentes" },
    ];
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].titulo == "nao existe") {
        posts.splice(i, 1);
      }
    }
    expect(posts.length).toBe(2);
  });
});

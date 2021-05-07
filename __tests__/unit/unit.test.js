const { password } = require("../../src/config/database");

describe("Testing filters", () => {
  it("should filter students by ADS course", () => {
    const estudantes = [
      { nome: "Maria", curso: "Engenharia Civil" },
      { nome: "João", curso: "Engenharia Civil" },
      { nome: "Pedro", curso: "Análise e Desenvolvimento de Sistemas" },
      { nome: "Alice", curso: "Análise e Desenvolvimento de Sistemas" },
    ];

    const estudantesFiltrados = [
      { nome: "Pedro", curso: "Análise e Desenvolvimento de Sistemas" },
      { nome: "Alice", curso: "Análise e Desenvolvimento de Sistemas" },
    ];

    let estudantes_ads = [];
    for(let i of estudantes)
      if(i.curso === 'Análise e Desenvolvimento de Sistemas')
        estudantes_ads.push(i);


    expect(estudantes_ads).toEqual(estudantesFiltrados);
  });

  it("should filter students by their situation concluded", () => {
    const estudantes = [
      { nome: "Maria", situacao: "Concluído" },
      { nome: "João", situacao: "Cancelado" },
      { nome: "Pedro", situacao: "Concluído" },
      { nome: "Alice", situacao: "Transferido" },
    ];

    const estudantesFiltrados = [
      { nome: "Maria", situacao: "Concluído" },
      { nome: "Pedro", situacao: "Concluído" },
    ];

    let estudantes_concluido = [];

    for(let i of estudantes)
      if(i.situacao === "Concluído")
        estudantes_concluido.push(i);

    expect(estudantes_concluido).toEqual(estudantesFiltrados);
  });
});

describe("authentication", () => {
  it("should authenticate", () => {
    const user = { email: "test@gmail.com", password: "654123" };

    let valid_password = false;
    if (user.password == "654123") valid_password = true;
    
    expect(valid_password).toBe(true);
  });

  it("should not authenticate", () => {
    const user = { email: "test@gmail.com", password: "654123" };
    let valid_password = false;

    if (user.password == "123456") valid_password = true;
    
    expect(valid_password).toBe(false);
  });
});

describe("post", () => {
  it("should delete post in array", () => {
    const posts = [
      {
        titulo: "dia bonito", descricao: "hoje estava bonito pois estava nublado",
      },
      { 
        titulo: "calor", descricao: "esses dias estão muito quentes" 
      },
    ];

    for (let i = 0; i < posts.length; i++)
      if (posts[i].titulo === "calor") posts.splice(i, 1);
    
    expect(posts.length).toBe(1);
  });

  it("should not delete post in array", () => {
    const posts = [
      {
        titulo: "dia bonito", descricao: "hoje estava bonito pois estava nublado",
      },
      { 
        titulo: "calor", descricao: "esses dias estão muito quentes" 
      },
    ];

    for (let i = 0; i < posts.length; i++)
      if (posts[i].titulo == "Não existe") posts.splice(i, 1);

    expect(posts.length).toBe(2);
  });
});

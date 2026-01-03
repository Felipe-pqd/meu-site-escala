const funcionarios = [
  { nome: "João", ultimaEscala: "2026-01-02" },
  { nome: "Maria", ultimaEscala: "2025-12-28" },
  { nome: "Carlos", ultimaEscala: null },
  { nome: "Ana", ultimaEscala: "2025-12-30" }
];

function diasEntreDatas(data1, data2) {
  const umDia = 24 * 60 * 60 * 1000;
  return Math.floor((data2 - data1) / umDia);
}

function podeSerEscalado(funcionario, dataAtual, diasMinimosFolga) {
  if (!funcionario.ultimaEscala) return true;

  const ultima = new Date(funcionario.ultimaEscala);
  const hoje = new Date(dataAtual);

  return diasEntreDatas(ultima, hoje) >= diasMinimosFolga;
}

function gerar() {
  const data = document.getElementById("data").value;
  const qtd = Number(document.getElementById("qtd").value);
  const folga = Number(document.getElementById("folga").value);
  const resultado = document.getElementById("resultado");

  if (!data) {
    alert("Escolha uma data!");
    return;
  }

  const hoje = new Date(data);

  const elegiveis = funcionarios.filter(f =>
    podeSerEscalado(f, hoje, folga)
  );

  elegiveis.sort((a, b) => {
    if (!a.ultimaEscala) return -1;
    if (!b.ultimaEscala) return 1;

    const diasA = diasEntreDatas(new Date(a.ultimaEscala), hoje);
    const diasB = diasEntreDatas(new Date(b.ultimaEscala), hoje);

    return diasB - diasA;
  });

  const escalados = elegiveis.slice(0, qtd);

  escalados.forEach(f => f.ultimaEscala = data);

  let html = `<h3>Escalados (${data})</h3>`;

  if (escalados.length === 0) {
    html += "<p>Ninguém disponível para essa data.</p>";
  } else {
    html += `
      <table>
        <tr><th>Nome</th><th>Última Escala</th></tr>
    `;
    escalados.forEach(f => {
      html += `<tr><td>${f.nome}</td><td>${f.ultimaEscala}</td></tr>`;
    });
    html += "</table>";
  }

  resultado.innerHTML = html;
}

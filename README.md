# 📅 Sistema de Escala de Plantão

Sistema web simples para **gerenciamento automático de escalas de plantão**, desenvolvido em **HTML, CSS e JavaScript puro**, sem dependências externas e sem custo de desenvolvimento.

O objetivo é garantir **justiça na distribuição dos plantões**, respeitando regras de **dias mínimos de folga**, mesmo com **escalas paralelas** (dias úteis e finais de semana/feriados).

---

## 🚀 Demonstração

Após a publicação via **GitHub Pages**, o sistema pode ser acessado em:



---

## 🧠 Regras de Negócio Implementadas

✔ O administrador define quantas pessoas serão escaladas por dia  
✔ O administrador define o número mínimo de dias de folga  
✔ O sistema prioriza quem está há mais tempo sem plantão  
✔ Um funcionário não pode ser escalado antes de cumprir a folga mínima  
✔ A regra de folga vale **mesmo entre escalas diferentes**  
✔ Evita escala em dias consecutivos indevidos  
✔ Funciona para dias úteis, finais de semana e feriados  

### Exemplo real:
> Se o funcionário João for escalado na sexta-feira e a folga mínima for de 2 dias,  
> ele **não poderá** ser escalado no sábado, mesmo sendo o mais folgado,  
> retornando apenas na próxima escala válida.

---

## 🛠 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- GitHub Pages (Hospedagem gratuita)

---
├── index.html
├── script.js
├── style.css (opcional)
└── README.md


---

## ⚙️ Como Usar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

## 📁 Estrutura do Projeto


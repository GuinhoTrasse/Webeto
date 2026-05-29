# 📱 Aula Prática: Media Queries & Design Responsivo

Bem-vindo ao repositório da nossa aula prática sobre **Media Queries e Design Responsivo**! 🚀

Nesta aula, exploramos como criar layouts modernos e flexíveis que se adaptam dinamicamente a diferentes tamanhos de tela (como celulares, tablets e computadores) utilizando o recurso de **Media Queries** do CSS.

Desenvolvemos um protótipo interativo composto por **6 caixas principais**, onde algumas delas (Caixa 2 e Caixa 4) contêm sub-elementos aninhados que também reagem e mudam sua organização interna de acordo com a largura da tela do dispositivo.

---

## 📁 Estrutura do Projeto

O repositório é composto pelos seguintes arquivos:

*   **[media.html](file:///Users/beto/Developer/IFMS/2026-1/web1/web1/media/media.html)**: Estrutura semântica HTML contendo a estrutura de caixas principais e caixas aninhadas.
*   **[style.css](file:///Users/beto/Developer/IFMS/2026-1/web1/web1/media/style.css)**: Folha de estilos CSS contendo a definição de variáveis de cores, resets globais e a estilização básica focada em dispositivos móveis (**Mobile-First**).
*   **[MEDIA_QUERY.md](file:///Users/beto/Developer/IFMS/2026-1/web1/web1/media/MEDIA_QUERY.md)**: Guia teórico-prático completo contendo explicações detalhadas sobre tipos de mídia, recursos de mídia, operadores lógicos e estratégias de desenvolvimento.

---

## 🚀 Como Executar Localmente

1. Abra o arquivo **[media.html](file:///Users/beto/Developer/IFMS/2026-1/web1/web1/media/media.html)** no seu navegador (ou utilize a extensão *Live Server* do VS Code).
2. Pressione `F12` para abrir as Ferramentas do Desenvolvedor.
3. Ative a **Visualização de Dispositivo** (ícone de celular/tablet) para redimensionar a tela e testar os diferentes comportamentos de tela.

---

## ✍️ Exercício Prático: Completando a Responsividade

Atualmente, o arquivo **[style.css](file:///Users/beto/Developer/IFMS/2026-1/web1/web1/media/style.css)** possui apenas as regras aplicadas para **Celular (telas menores que 600px)**. 

Seu objetivo é **complementar o arquivo CSS** implementando as Media Queries para os modos **Tablet** e **Desktop**, seguindo estritamente as especificações abaixo.

---

### 🎛️ 1. Breakpoint: Tablet (Telas de 600px a 959px)

Adicione uma regra de Media Query para telas com largura mínima de **`600px`** (`@media screen and (min-width: 600px)`):

*   **Tema de Cor**: O fundo das caixas e a borda das mini-caixas devem usar a variável `--cor-tablet`.
*   **Layout do Container**: O `.container` principal deve deixar de ser uma coluna única e passar a exibir as caixas em um **Grid de 2 colunas** com largura igual (`grid-template-columns: repeat(2, 1fr)`).
*   **Alturas das Caixas**:
    *   As caixas simples (1, 3, 5 e 6) devem ter altura de `150px`.
    *   As caixas complexas (2 e 4) devem ter altura de `200px`.
*   **Organização Interna**:
    *   **Caixa 2**: Os mini-quadrados internos (A e B) devem ficar dispostos horizontalmente (lado a lado).
    *   **Caixa 4**: Os quatro mini-quadrados (1, 2, 3 e 4) devem ficar dispostos horizontalmente em linha única.
*   **Indicador Visual**:
    *   Mude a cor de fundo do `.indicador-tela` para `--cor-tablet`.
    *   Altere o texto dentro da badge para: `"Visualização: Tablet (600px a 959px)"`.

---

### 🖥️ 2. Breakpoint: Desktop (Telas de 960px ou mais)

Adicione uma regra de Media Query para telas com largura mínima de **`960px`** (`@media screen and (min-width: 960px)`):

*   **Tema de Cor**: O fundo das caixas e a borda das mini-caixas devem usar a variável `--cor-desktop`.
*   **Layout do Container**: O `.container` deve passar a exibir as caixas em um **Grid de 3 colunas** com largura igual (`grid-template-columns: repeat(3, 1fr)`).
*   **Alturas das Caixas**:
    *   Todas as caixas (incluindo as caixas 2 e 4) devem possuir altura uniforme de `180px`.
*   **Organização Interna**:
    *   **Caixa 2**: Os mini-quadrados (A e B) devem passar a ser exibidos verticalmente (um abaixo do outro).
    *   **Caixa 4**: Os quatro mini-quadrados (1, 2, 3 e 4) devem ser organizados em um **Grid interno de 2x2** (2 colunas de `50px` cada).
*   **Indicador Visual**:
    *   Mude a cor de fundo do `.indicador-tela` para `--cor-desktop`.
    *   Altere o texto dentro da badge para: `"Visualização: Desktop (tela >= 960px)"`.

---

### 🏆 Desafios Extras (Opcional)

Se você quer ir além e consolidar seus conhecimentos, experimente implementar:

1.  **Suporte a Dark Mode**: Adicione suporte para detectar a preferência do sistema operacional (`prefers-color-scheme: dark`) mudando o fundo do `body` para uma cor ainda mais escura ou adaptando os textos.
2.  **Folha de Impressão (`print`)**: Adicione uma media query `@media print` para oculatar o rodapé e o `.indicador-tela` caso a página seja impressa, garantindo uma formatação limpa e legível em papel.

---

*Bons estudos e boa prática! 💻*

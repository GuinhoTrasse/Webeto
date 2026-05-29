# Roteiro de Aula Prática - Media Queries

Roteiro prático e progressivo para o desenvolvimento de aula sobre Media Queries e Design Responsivo, focado na criação de layouts que adaptam sua estrutura e elementos internos conforme o tamanho da tela.

- Prof. Beto

---

## 📖 Fundamentos Teóricos: O que são Media Queries?

Antes de iniciarmos a prática, vamos compreender o conceito, os tipos, recursos e o funcionamento das **Media Queries** no CSS.

### 💡 1. Conceito e Importância

Uma **Media Query** é uma técnica introduzida no CSS3 que permite aplicar estilos diferentes com base nas características do dispositivo de exibição (como largura, altura, orientação da tela ou resolução).

É a ferramenta essencial para o desenvolvimento de **Design Responsivo**, permitindo que uma única página HTML se adapte perfeitamente desde telas minúsculas de smartphones até monitores ultra-wide.

---

### 🛠️ 2. Sintaxe Básica

A estrutura básica de uma Media Query consiste na palavra-chave `@media`, seguida por um ou mais filtros de condição, e um bloco de regras CSS:

```css
@media [tipo-de-midia] and ([recurso-de-midia]) {
  /* As regras CSS abaixo só serão aplicadas se as condições acima forem verdadeiras */
  .seletor {
    propriedade: valor;
  }
}
```

---

### 📱 3. Tipos de Mídia (_Media Types_)

Os tipos de mídia descrevem a categoria geral do dispositivo onde a página está sendo exibida:

| Tipo         | Descrição                                                                         |
| :----------- | :-------------------------------------------------------------------------------- |
| **`all`**    | Padrão (caso nenhum tipo seja indicado). Aplica-se a todos os dispositivos.       |
| **`screen`** | Destinado principalmente a telas digitais (computadores, smartphones, tablets).   |
| **`print`**  | Destinado a impressoras ou à visualização de visualização de impressão de página. |
| **`speech`** | Destinado a sintetizadores de voz e leitores de tela (acessibilidade).            |

---

### 📐 4. Recursos de Mídia (_Media Features_)

Os recursos de mídia testam condições ou características específicas do dispositivo e da tela. Os mais comuns são:

- **`width` / `height`**: Largura e altura da janela de visualização (_viewport_).
- **`min-width`**: Largura **mínima** da tela. Os estilos são aplicados se a largura da tela for **igual ou maior** que o valor definido (ex: ideal para estratégias _Mobile-First_).
- **`max-width`**: Largura **máxima** da tela. Os estilos são aplicados se a largura da tela for **igual ou menor** que o valor definido (ex: ideal para estratégias _Desktop-First_).
- **`orientation`**:
  - `portrait`: Quando a altura da tela é maior que a largura (modo retrato).
  - `landscape`: Quando a largura da tela é maior que a altura (modo paisagem).
- **`prefers-color-scheme`**: Detecta se a preferência de tema do sistema operacional do usuário é `light` (claro) ou `dark` (escuro).
- **`hover`**: Detecta se o dispositivo possui um cursor apontador físico (como mouse ou trackpad), permitindo aplicar efeitos de hover apenas onde faz sentido.

---

### 🔗 5. Operadores Lógicos

Podemos encadear ou alterar o comportamento das condições com os seguintes operadores:

1.  **`and` (e)**: Exige que **todas** as condições combinadas sejam verdadeiras ao mesmo tempo.
    ```css
    @media screen and (min-width: 768px) and (max-width: 1024px) { ... }
    ```
2.  **`not` (não)**: Inverte o resultado lógico da query inteira.
3.  **`only` (apenas)**: Impede que navegadores antigos que não suportam media queries modernas apliquem os estilos dentro do bloco.
4.  **`,` (vírgula - equivale ao OR/ou)**: Aplica o CSS se **pelo menos uma** das condições separadas por vírgula for verdadeira.
    ```css
    @media screen, print { ... }
    ```

---

### 🚀 6. Estratégias de Desenvolvimento

#### 📱 Mobile-First (Recomendado)

A estratégia _Mobile-First_ foca em escrever primeiro os estilos para telas pequenas (celular) por padrão, sem o uso de media queries. Conforme a tela aumenta, adicionamos e refinamos os estilos usando `@media (min-width: ...)`.

- **Vantagens**: Excelente desempenho em dispositivos móveis, código mais enxuto e carregamento mais ágil.

#### 💻 Desktop-First

Foca em desenhar primeiro o visual da tela maior (computadores/desktops) e, em seguida, usar `@media (max-width: ...)` para compactar, ocultar ou redimensionar os elementos para telas menores.

---

### 📝 7. Exemplos Práticos

#### A) Responsividade de Layout (Mobile-First)

Muda a direção das caixas de coluna única para linha quando a tela é maior ou igual a 768px:

```css
/* Estilo Padrão (Celular) */
.container {
  display: flex;
  flex-direction: column;
}

/* Telas Maiores (Tablet / Desktop) */
@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

#### B) Suporte a Tema Escuro (_Dark Mode_)

Adapta o fundo e a cor do texto conforme as configurações do sistema operacional do usuário:

```css
body {
  background-color: #ffffff;
  color: #000000;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #ffffff;
  }
}
```

#### C) Estilos Próprios para Impressão

Oculta menus de navegação e botões interativos ao imprimir a página no papel:

```css
@media print {
  nav,
  footer,
  button {
    display: none;
  }
  body {
    font-size: 12pt;
    font-family: serif;
    color: #000000;
  }
}
```

---

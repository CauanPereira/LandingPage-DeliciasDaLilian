# 📁 Estrutura CSS Organizada - SMACSS

Este projeto foi reorganizado seguindo a arquitetura **SMACSS** (Scalable and Modular Architecture for CSS) com organização por seções.

## 🏗️ Estrutura de Pastas

```
LandigPageLilian/
├── css/
│   ├── base.css              # Estilos base e variáveis
│   └── main.css              # Arquivo principal (importa consolidados)
├── layout/
│   ├── header.css            # Layout do cabeçalho
│   ├── hero.css              # Layout da seção hero
│   ├── produtos.css          # Layout da seção produtos
│   ├── footer.css            # Layout do rodapé
│   ├── clients.css           # Layout da seção clientes
│   └── layout.css            # Arquivo consolidado (importa todos)
├── components/
│   ├── header-content.css    # Componentes do cabeçalho
│   ├── hero-content.css      # Componentes da seção hero
│   ├── produtos-content.css  # Componentes da seção produtos
│   ├── buttons.css           # Componente de botões
│   ├── seasonal-cards.css    # Componente de cards sazonais
│   ├── product-tables.css    # Componente de tabelas de produtos
│   ├── gallery.css           # Componente de galeria
│   ├── contact.css           # Componente de contato
│   ├── about.css             # Componente sobre
│   ├── validation.css        # Componente de validação
│   ├── menu-bolos.css        # Componente de cardápio
│   └── componentes.css       # Arquivo consolidado (importa todos)
└── style.css                 # Arquivo antigo (pode ser removido)
```

## 📋 Organização por Seções

### 🎯 **Base** (`css/base.css`)

- Variáveis CSS (cores, fontes, etc.)
- Reset e estilos globais
- Container base
- Títulos base
- Media queries base

### 🏗️ **Layout** (`layout/`)

Para cada seção da página:

- **`header.css`**: Estrutura do cabeçalho
- **`hero.css`**: Estrutura da seção hero
- **`produtos.css`**: Estrutura da seção produtos
- **`footer.css`**: Estrutura do rodapé
- **`clients.css`**: Estrutura da seção clientes
- **`layout.css`**: Arquivo consolidado

### 🧩 **Components** (`components/`)

Para cada seção da página:

- **`header-content.css`**: Elementos do cabeçalho (links, menu, etc.)
- **`hero-content.css`**: Elementos da seção hero (textos, imagens, etc.)
- **`produtos-content.css`**: Elementos da seção produtos (cards, etc.)
- **`buttons.css`**: Todos os botões da página
- **`seasonal-cards.css`**: Cards de datas especiais
- **`product-tables.css`**: Tabelas de produtos
- **`gallery.css`**: Grid de imagens
- **`contact.css`**: Seção de contato
- **`about.css`**: Seção sobre
- **`validation.css`**: Seção de validação
- **`menu-bolos.css`**: Cardápio especial
- **`componentes.css`**: Arquivo consolidado

## 🔄 Como Usar

### Para Desenvolvedores:

1. **Adicionar nova seção**:
   - Crie `layout/nova-secao.css` (estrutura)
   - Crie `components/nova-secao-content.css` (elementos)
2. **Modificar seção existente**: Edite os arquivos específicos
3. **Alterar base**: Modifique `css/base.css`
4. **Importar**: Adicione imports nos arquivos consolidados

### Exemplo de Adição:

```css
/* layout/nova-secao.css */
.nova-secao {
  /* estrutura aqui */
}
```

```css
/* components/nova-secao-content.css */
.nova-secao__elemento {
  /* elementos aqui */
}
```

```css
/* layout/layout.css */
@import url("./nova-secao.css");
```

```css
/* components/componentes.css */
@import url("./nova-secao-content.css");
```

## 🎨 Benefícios da Organização

### ✅ **Manutenibilidade**

- Cada seção tem seus próprios arquivos de layout e componentes
- Fácil localização de estilos
- Modificações isoladas por seção

### ✅ **Reutilização**

- Componentes modulares por seção
- Menos duplicação de código
- Estrutura clara

### ✅ **Escalabilidade**

- Fácil adição de novas seções
- Estrutura padronizada
- Separação clara entre layout e conteúdo

### ✅ **Performance**

- Imports organizados e consolidados
- Carregamento otimizado
- Cache eficiente

## 📱 Responsividade

Cada arquivo inclui suas próprias media queries, mantendo a responsividade organizada e específica para cada seção.

## 🔧 Manutenção

- **Não edite** `style.css` (arquivo antigo)
- **Sempre edite** os arquivos específicos em `layout/` ou `components/`
- **Atualize** os arquivos consolidados ao adicionar novas seções
- **Mantenha** a nomenclatura: `nome-secao.css` (layout) e `nome-secao-content.css` (componentes)

## 📋 Arquivos Consolidados

### `css/main.css`

```css
@import url("./base.css");
@import url("../layout/layout.css");
@import url("../components/componentes.css");
```

### `layout/layout.css`

```css
@import url("./header.css");
@import url("./hero.css");
@import url("./produtos.css");
@import url("./footer.css");
@import url("./clients.css");
```

### `components/componentes.css`

```css
@import url("./header-content.css");
@import url("./hero-content.css");
@import url("./produtos-content.css");
@import url("./buttons.css");
@import url("./seasonal-cards.css");
@import url("./product-tables.css");
@import url("./gallery.css");
@import url("./contact.css");
@import url("./about.css");
@import url("./validation.css");
@import url("./menu-bolos.css");
```

---

**Estrutura criada seguindo as melhores práticas de SMACSS com organização por seções! 🚀**

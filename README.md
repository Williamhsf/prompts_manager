# Aula 01

### 🔗 Link do Projeto

    Figma Community: https://www.figma.com/pt-br/comunidade/file/1554529095872857492/prompts-manager

### 🛠️ Ferramentas

    Figma-Context-MCP: https://github.com/GLips/Figma-Context-MCP

    Node.js: https://nodejs.org/pt/download

### 💡 Prompts para Agilizar o Projeto

#### Adicionar Favicon

    Adicione o favicon.svg como ícone da página.

#### Extrair as Variáveis CSS de Cores da Imagem (anexando print da área de cores do projeto)

    Transcreva a imagem como variáveis CSS mantendo o mesmo nome para cada token de cor.

#### Utilizando Fonte do Google

    "Importe a fonte Inter do Google Fonts com pesos 400, 500, 600 e 700 no index.html e aplique no styles.css a fonte nos elementos body, input e button."

#### Criando o HTML da Área de Conteúdo

    Utilize o #Figma MCP e selecione está parte do Figma:

    [LINK DA SELEÇÃO MAIN DO FIGMA]

    Escreva dentro da #sym:main.main o HTML exatamente como está no Figma.

    Se fizer sentido aplicar classe, utilize exatamente os nomes definidos no Figma. Preserve a ordem e hierarquia dos elementos e não invente atributos. Para ícones busque na pasta #file:assets.

    Também utilize o conteúdo do prompt-title e o prompt-content que está no Figma.

#### Implementando a Estilização do Main com IA

    Implemente o CSS para a classe main e de todos os elementos dentro do main respeitando o visual do Figma:

    [LINK DA SELEÇÃO MAIN DO FIGMA]

# Aula 02

### 💡 Prompts para Agilizar o Projeto

#### Gerar o código do Placeholder do título e conteúdo

    Crie um objeto chamado elements que selecione por id os elementos prompt-title, prompt-content, title-wrapper e content-wrapper.

    Implemente uma função updateEditableWrapperState(element, wrapper) que verifique se o elemento de texto possui conteúdo, se não houver adicione a classe is-empty.

    Crie a função updateAllEditableStates() para atualizar o estado de todos os elementos, e configure ouvintes de evento input para o prompt-title e prompt-content para dentro de uma função chamada attachAllEditableHandlers atualizar seus respectivos wrappers em tempo real.

    Por fim, implemente uma função init() que chame attachAllEditableHandlers e execute a inicialização.

#### Implementar abertura e fechamento da sidebar

    Implemente a abertura e o fechamento da #sym:aside.sidebar utilizando o #sym:btnOpen para abrir e o #sym:btnCollapse para fechar. Faça isso usando apenas JavaScript e não modifique o CSS

#### Gerar o conteúdo da sidebar

    Reecrie o HTML e CSS do sidebar_content com o input de search com o icone svg de search do lado esquerdo, button de novo prompt abaixo do input e uma linha abaixo do botão com um border-bottom do próprio search-container. Faça exatamente igual está aqui:

    [LINK DA SELEÇÃO DO SEARCH-CONTAINER DO FIGMA]
// chave para identificar os dados salvos pela nossa aplicação no navegador
const STORAGE_KEY = "prompts_storage"

// estado carregar os prompts salvos no navegador e exibir
const state = {
  prompts: [],
  selectdId: null // vai identificar se tem algum prompt selecionado
}

// Seleção dos elementos HTML por id
const elements = {
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  titleWrapper: document.getElementById("title-wrapper"),
  contentWrapper: document.getElementById("content-wrapper"),
  btnOpen: document.getElementById("btn-open"),
  btnCollapse: document.getElementById("btn-collapse"),
  sidebar: document.querySelector(".sidebar"),
  btnSave: document.getElementById("btn-save"),
  list: document.getElementById("prompt-list")
}

// Atualiza o estado do wrapper conforme o conteúdo do elemento
function updateEditableWrapperState(element, wrapper) {
  // somente saber se tem ou nao texto
  // o que o trim faz? remove espaços em branco do início e do fim de uma string
  const hasText = element.textContent.trim().length > 0
  wrapper.classList.toggle("is-empty", !hasText) //!hasText - pedindo para remover a classe is-empty se tiver texto
}

// --- Controle da sidebar (abrir / fechar) ---
function openSidebar() {
  elements.sidebar.style.display = "flex"
  elements.btnOpen.style.display = "none"
}

function closeSidebar() {
  elements.sidebar.style.display = "none"
  elements.btnOpen.style.display = "block"
}

// Atualiza o estado de todos os elementos editáveis
function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

// Anexa ouvintes de evento input para atualizar os wrappers em tempo real.
function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener("input", function () {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  })

  elements.promptContent.addEventListener("input", function () {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
  })
}

function save() {
  const title = elements.promptTitle.textContent.trim()
  const content = elements.promptContent.innerHTML.trim() // usado somente para salvar
  const hasContent = elements.promptContent.textContent.trim() // variavel auxiliar

  if (!title || !hasContent) {
    alert("O título e conteudo não podem estar vazio.")
    return
  }

  // saber se o usuario esta criando um novo prompt ou se está salvando
  if (state.selectdId) {
    // Editando um prompt existente
  } else {
    // criando um novo prompt
    const newPrompt = {
      id: Date.now().toString(36),
      title,
      content
    }

    state.prompts.unshift(newPrompt) // adiciona no inicio do array
    state.selectdId = newPrompt.id
  }

  persist() // salvar os dados no navegador
}

// função de persistir os dados no navegador
function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.prompts)) // converter o array em texto (string)
    alert("Dados salvos com sucesso!")
  } catch (error) {
    console.log("Não foi possível salvar os dados.", error)
  }
}

// função carregar os dados salvos no navegador
function load() {
  try {
    const storage = localStorage.getItem(STORAGE_KEY)
    state.prompts = storage ? JSON.parse(storage) : [] // converter o texto de volta para um objeto
    state.selectdId = null
  } catch (error) {
    console.log("Erro ao carregar do localStorage.", error)
  }
}

// create prompt item - criar o item da lista
function createPromptItem(prompt) {
  return `
      <li class="prompt-item">
        <div class="prompt-item-content">
          <span class="prompt-item-title">${prompt.title}</span>
          <span class="prompt-item-description">${prompt.content}</span>
        </div>

        <button class="btn-icon" title="Remover">
          <img src="assets/remove.svg" alt="Remover" class="icon icon-trash"/>
        </button>
      </li>
  `
}

// renderizar a lista de prompts
function renderList() {
  const filteredPrompts = state.prompts
    .filter((prompt) =>
      prompt.title.toLowerCase().includes(state.filterText.toLowerCase().trim())
    )
    .map((p) => createPromptItem(p))
    .join("") // juntar tudo em uma string só

  elements.list.innerHTML = filteredPrompts
}

// eventos dos botões
elements.btnSave.addEventListener("click", save)

// Inicializador público
function init() {
  load() // carregar os dados salvos no navegador
  renderList() // renderizar a lista de prompts
  attachAllEditableHandlers() // anexar os ouvintes de evento input
  updateAllEditableStates() // atualizar o estado dos wrappers

  // Abrir sidebar, botão de abrir oculto
  elements.sidebar.style.display = ""
  elements.btnOpen.style.display = "none"

  // Anexa ouvintes de evento click para abrir e fechar a sidebar
  elements.btnOpen.addEventListener("click", openSidebar)
  elements.btnCollapse.addEventListener("click", closeSidebar)
}

// Executa a inicialização
init()

// 1:07:00

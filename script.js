// Seleção dos elementos HTML por id
const elements = {
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  titleWrapper: document.getElementById("title-wrapper"),
  contentWrapper: document.getElementById("content-wrapper"),
  btnOpen: document.getElementById("btn-open"),
  btnCollapse: document.getElementById("btn-collapse"),
  sidebar: document.querySelector(".sidebar"),
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

// Inicializador público
function init() {
  attachAllEditableHandlers()
  updateAllEditableStates()

  // Abrir sidebar, botão de abrir oculto
  elements.sidebar.style.display = ""
  elements.btnOpen.style.display = "none"
  
  // Anexa ouvintes de evento click para abrir e fechar a sidebar
  elements.btnOpen.addEventListener("click", openSidebar)
  elements.btnCollapse.addEventListener("click", closeSidebar)
}

// Executa a inicialização
init()
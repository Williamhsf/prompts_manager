// Seleção dos elementos HTML por id
const elements = {
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  titleWrapper: document.getElementById("title-wrapper"),
  contentWrapper: document.getElementById("content-wrapper"),
}

// Atualiza o estado do wrapper conforme o conteúdo do elemento
function updateEditableWrapperState(element, wrapper) {
  // somente saber se tem ou nao texto
  // o que o trim faz? remove espaços em branco do início e do fim de uma string
  const hasText = element.textContent.trim().length > 0
  
  //!hasText - pedindo para remover a classe is-empty se tiver texto
  wrapper.classList.toggle("is-empty", !hasText)
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

// 49 minutos de vídeo

// Inicializador público
function init() {
  attachAllEditableHandlers()
  updateAllEditableStates()
}

// Executa a inicialização
init()

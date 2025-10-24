// Aguarda até que todo o HTML seja carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
  // Pega a referência do formulário com id "formTarefa"
  const form = document.getElementById('formTarefa');
  // Pega a referência do input de nova tarefa com id "novaTarefa"
  const input = document.getElementById('novaTarefa');
  // Pega a referência da lista (ul) onde as tarefas serão inseridas
  const lista = document.getElementById('listaTarefas');

  // Adiciona um listener para o envio do formulário
  form.addEventListener('submit', (e) => {
    // Impede o comportamento padrão do form (recarregar a página)
    e.preventDefault();

    // Lê o valor do input e remove espaços no início/fim
    const texto = input.value.trim();
    // Se o texto estiver vazio (após trim), não faz nada e sai
    if (texto === '') return;

    // Cria um novo elemento <li> para representar a tarefa
    const item = document.createElement('li');
    // Define as classes do Bootstrap e utilitárias para o <li>
    item.className =
      'list-group-item d-flex justify-content-between align-items-center';
    // Define o conteúdo interno do <li> usando template literal:
    // - um <span> contendo o texto da tarefa
    // - um <button> para remover a tarefa
    item.innerHTML = `
      <span>${texto}</span>
      <button class="btn btn-sm btn-danger">Remover</button>
    `;

    // Seleciona o botão criado dentro do <li> e adiciona um listener de clique
    item.querySelector('button').addEventListener('click', () => {
      // Remove o elemento <li> da DOM (remove a tarefa da lista)
      item.remove();
      // Cria uma instância do modal Bootstrap apontando para o modal de confirmação
      const modal = new bootstrap.Modal(
        document.getElementById('modalConfirmacao')
      );
      // Exibe o modal (mostra a confirmação de remoção)
      modal.show();
    });

    // Adiciona o <li> ao final da lista de tarefas (ul)
    lista.appendChild(item);
    // Limpa o campo de input para permitir nova entrada
    input.value = '';
  });
});

<h1>Cadastro de Usuário</h1>

A aplicação permite que novos usuários se cadastrem fornecendo nome, email e telefone. Ao enviar o formulário, os dados são validados e enviados para o servidor Node.js.

# Fluxo:

- Frontend (React): O usuário preenche o formulário e clica em "Cadastrar".
- Backend (Node.js):
- Recebe os dados do usuário via requisição POST.
- Valida os dados (e.g., email válido, campos obrigatórios).
- Armazena as informações em um banco de dados.
- Retorna uma resposta indicando o sucesso ou falha da operação.

# Frontend (React):
- Exibe uma mensagem de sucesso ou erro ao usuário.
- Redireciona o usuário para a página de login ou para uma página de boas-vindas.

# Tecnologias:

Frontend: React
- Backend: Node.js, Express.js, [ORM] (e.g., Mongoose para MongoDB)
- Banco de dados: [MongoDB, PostgreSQL, etc.]

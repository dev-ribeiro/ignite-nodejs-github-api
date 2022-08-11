# GitHub API

## Requisitos

- [] Deverá ser capaz de criar um repositório, passando o title, url e techs no body da request, com as seguintes especificações:

    ```js
        {
            id: uuid(),
            title,
            url,
            techs,
            likes: 0

        }
    ```

- [] Deverá listar todos os repositórios
- [] Deverá ser possível atualizar um repositório passando o id como parâmetro da request
- [] Deverá ser possível deletar um repositório passando o id como parâmetro da request

## Regras de negócio

- [] Não pode atualizar um repositório que não existe
- [] Não pode deletar um repositório que não existe

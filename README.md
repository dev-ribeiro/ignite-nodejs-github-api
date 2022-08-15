# GitHub API

## Requisitos

- [x] Deverá ser capaz de criar um repositório, passando o title, url e techs no body da request, com as seguintes especificações:

    ```js
        {
            id: uuid(),
            title,
            url,
            techs,
            likes: 0

        }
    ```

- [x] Deverá listar todos os repositórios
- [x] Deverá ser possível atualizar um repositório passando o id como parâmetro da request
- [x] Deverá ser possível deletar um repositório passando o id como parâmetro da request

## Regras de negócio

- [] Não pode atualizar um repositório que não existe
- [] Não pode deletar um repositório que não existe

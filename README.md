# Desafio da vaga para desenvolver backend.



### meu Contacto:
[linkdin](https://www.linkedin.com/in/yazalde-filimone-65142b206)
[WhatsApp](https://wa.me/message/SKLD3JTW5CFYN1)



### NB:
a dependecia joi esta dando um erro mas resolve da seguinte maneira  talvez quando instalar na tua maquina tambem de o mesmo erro:
``
node_modules/@hapi/hoek/lib/assert.js
``
no directorio acima e so comentar a linha : ``20  //   throw new AssertError(args);``

### Neste projeto usariemas seguintes tecnologias:

- [x]  Typescript
- [x]  ExpressJs
- [x]   MongoDB
- [x]  Bcryptjs
- [x]  JSON WebToken
- [ ]  mullter
- [ ]  mullter-s3
- [ ]  Jest(ts-Jest)

### Requisitos 
- [x]  [POST]:[/users] - criar  um usuário (**).
- [x]  [POST]:[/users/login] - Logar com um usuário (**).
- [x]  [POST]:[/classes] - Criar uma nova aula.
- [x]  [GET]:[/classes] - Listar aulas cadastradas (*1).
- [x]  [GET]:[/classes/:id] - 	Obter detalhes de uma aula pelo o id(*2).
- [x]  [PUT]:[/classes/:id] - Atualizar o cadastro de uma aula.
- [x]  [DELETE]:[/classes/:id] - Excluir o cadastro de uma aula.
- [x]  [POST]:[/classes/comment/:id_aula] - Cadastrar um comentário de uma aula (*3).
- [x]  [GET]:[/classes/comment/:id] - Listar todos os comentários de uma aula.
- [x]  [DELETE]:[/classes/:id_class/:id] - Excluir um comentário( nao fiz teste ).


### Regras da api.

- [ ] so o admim pode criar as aulas.


### Padrão do projeto

- [x] Clean architecture.
- [x] Domain driven  Design

### Hospedagem.
Antes de eu começar a dizer onde  vou hospedar vou falar de uma breve vantegam do  ambiente elástico, Um ambiente elástico possui Alta Performance em tecnologia Containers. Ou seja a minha  aplicação ficará isolada de outros clientes. Permitindo rodar minhas aplicações em Node.js com alta velocidade e segurança.

***Vantagens:***

***Memoria RAM Dedicada*** – Sua aplicação rodando com recursos garantidos em um ambiente sem sobrecarga.

***Recursos Isolados*** – A Arquitetura Elástica isola e dedica os recursos de cada cliente.

***Segurança e SSL on click***  – Certificado SSL incluso, gerando credibilidade para o site/sistema e proteção para seus visitantes através de um click.


***Deploy Simples e Rápio*** – A melhor forma para se fazer deploy é via FTP. Logo será necessário realizar a compilação da aplicação antes de enviar seus arquivos.



***Acesso SSH pleno e integração ao Git Hub*** – Acesso SSH fácil e simplificado. Com alguns clicks você configura seu acesso. Em suma a plataforma é optimizada para instalação além de ter integração ao GitHub.



Então com isso eu escolheria a ***AWS*** e escolheria a plataforma elástica (EC2) por me proporcionar isso aí acima mencionado.


## descrição


Neste projecto tentei no maximo desacoplar o express da minha aplicacao tanto que a minha aplicação so conhece o requet do express para poder pegar os dados do body etc, o response eu usei um type de retorno que eu mesmo fiz pra poder controlar o retorno e assim eu posso tocar o express pelo hapi e nao quebrar a minha aplicação no maximo eu vou moduficar os adapters e a intefce que recebe o request com a propria implementação.
E pra os erros eu usei o either que e uma metodologia usada la na programaçõe funcional isso ajuda porque alem de laçar os erros eu retorno eles e passo para o cliente.
Uma coisa importante também e que na minha aplicação na camada de dominio eu so tenho types e interface no momento assim a minha regra de negócio pode ser usanda ou implementada com qualquer framework ou biblioteca desde do momento que respeite a mina regra de negócio.

***Noao tive tempo pra fazer os testes de automacao nem pra implementação do multer pra uploud de arquivos e tabem estava pessando em ter algumas premisoes de adimim nao tive tempo de testar todas as rotas e nem de fazer paginacao***


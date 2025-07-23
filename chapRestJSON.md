Computação Distribuída utilizando o Formato *JavaScript Object Notation* (JSON)
===============================================================================

Introdução
----------

Nesse capítulo, iremos estudar o desenvolvimento de software utilizando
utilizando **arquitetura** **Computação Distribuída** utilizando o
formato de representação de estruturas denominado de *JavaScript Object
Notation* (JSON).

Neste tipo de arquitetura temos componentes denominados de
**servidores** que processam as requisições, controlam as regras de
negócios e fazem acesso a Servidores de Banco de Dados (SGBDs) e
componentes denominados de **clientes** que controlam as interface com o
usuário. Esses componentes rodam de forma desacoplados um dos outros.

Iremos aprender durante este capítulo:

-   O formato JSON e sua estrutura

-   Serviços de Webservices

-   APIs e REST

-   Computação *Back-End* e *Front-End*.

Computação Distribuída
----------------------

Computação distribuída é o processo de realizar uma tarefa usando vários
computadores, cada um com seu próprio hardware e software. A computação
distribuída é usada para uma variedade de tarefas, como programação
cliente-servidor, computação em nuvem, Big data e jogos online.

-   A **programação cliente-servidor** é um modelo de computação em que
    os recursos são compartilhados entre os clientes e os servidores. Os
    clientes solicitam recursos aos servidores e os servidores fornecem
    esses recursos aos clientes.

    -   **Importante**: no modelo cliente-servidor não é caracterizado
        exclusivamente pelo uso de diversos computadores, mas o uso de
        diversos processos ora fazendo o papel de cliente e ora fazendo
        o papel de servidores. Por exemplo: em um computador pode estar
        rodando um processo do *Enterprise Resource Planning* (ERP) com
        as regras de negócio e um processo do SGBD. O **processo do
        ERP** é considerado servidor para os computadores clientes deste
        sistema, mas é considerado cliente para o **processo do SGBD**.

-   **Computação em nuvem**: a computação distribuída é usada para
    fornecer serviços de computação em nuvem. Isso inclui serviços como
    armazenamento de dados, computação e processamento de dados.

-   **Jogos online**: a computação distribuída é usada para executar
    jogos online. Isso é importante para garantir que os jogos sejam
    executados de forma suave e que todos os jogadores tenham uma
    experiência consistente.

-   **Big data**: a computação distribuída é usada para processar
    grandes quantidades de dados. Isso é importante para uma variedade
    de tarefas, incluindo análise preditiva, aprendizado de máquina e
    mineração de dados.

### Vantagens da Computação Distribuída

Algumas vantagens:

-   A computação distribuída pode permitir que tarefas sejam
    **executadas mais rapidamente** do que se fossem executadas em um
    único computador. Isso ocorre porque vários computadores podem
    trabalhar na tarefa ao mesmo tempo.

-   A computação distribuída pode permitir que tarefas sejam executadas
    em computadores que estão localizados em diferentes locais. Isso
    pode ser útil para tarefas que precisam acessar dados que estão
    localizados em diferentes locais, ou para tarefas que precisam ser
    executadas rapidamente, mesmo que os computadores não estejam
    localizados na mesma rede.

### Desvantagens da Computação Distribuída

Algumas desvantagens:

-   A computação distribuída pode ser mais **complexa de gerenciar** do
    que a computação em um único computador. Isso ocorre porque os
    administradores de sistema precisam garantir que todos os
    computadores estejam funcionando corretamente e que eles estejam se
    comunicando entre si de forma eficaz.

-   A computação distribuída pode ser mais cara do que a computação em
    um único computador. Isso ocorre porque as organização precisam
    comprar e manter vários computadores.

-   Como os sistemas executam de forma desacoplada, a equipe de
    desenvolvimento é formada por diversos profissionais tornando mais
    complexa a implementação do sistema.

*JavaScript Object Notation* (JSON)
-----------------------------------

*O JavaScript Object Notation (*JSON) é um formato leve para armazenar e
transportar dados. JSON é frequentemente usado quando os dados são
enviados de um servidor para uma página da web, para outro servidor,
para aplicações em celulares, etc.

O JSON é autodescritivo e fácil de se entender, ler e escrever por
humanos e também pode ser facilmente interpretado por computadores.

Arquivos JSON são usados para armazenar e transmitir dados entre
diferentes aplicativos. Eles são usados em uma ampla variedade de
aplicativos, incluindo:

-   Requisições Asynchronous JavaScript and XML (AJAX)

-   *Application programming interface* (API) web

-   Aplicativos móveis

-   Bancos de dados não relacionais

-   Ferramentas de análise de dados

Os arquivos JSON podem ser abertos e manipulados em uma variedade de
linguagens de programação, incluindo JavaScript, Python, Java e PHP.
Também existem ferramentas disponíveis para converter arquivos JSON para
outros formatos de dados, como XML, CSV e HTML.

### Dados JSON

Os dados JSON são gravados **como pares** de *nome-valor*. Um par
*nome-valor* consiste em um nome de campo (entre aspas duplas), seguido
por **dois pontos**, seguido por um valor:

    "firstName":"John"

### Objetos JSON

Os objetos JSON são escritos entre **chaves**. Assim como em
*JavaScript*, os objetos podem conter vários pares nome/valor:

    {"firstName":"John", "lastName":"Doe"}

### Matrizes JSON

As matrizes JSON são escritas entre colchetes. Assim como em
*JavaScript*, um *array* pode conter objetos:

``` {#lis:Array-de-objetos caption="\emph{Array} de objetos JSON." label="lis:Array-de-objetos"}
"employees":[     
    {"firstName":"John", "lastName":"Doe"},     
    {"firstName":"Anna", "lastName":"Smith"},     
    {"firstName":"Peter", "lastName":"Jones"} 
]
```

No exemplo da listagem
[\[lis:Array-de-objetos\]](#lis:Array-de-objetos){reference-type="ref"
reference="lis:Array-de-objetos"} acima, o objeto *funcionários* é um
*array*. Ele contém três objetos. Cada objeto é um registro de uma
pessoa (com um nome e um sobrenome).

### Objetos JSON Encadeados

Os objetos JSON podem ser encadeados formando vários níveis de
profundidade:

``` {#lis:Objetos-JSON-encadeados. caption="Objetos JSON encadeados." label="lis:Objetos-JSON-encadeados."}
"superheroes": {
  "squadName": "Super hero squad",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,      
      "powers": ["Million tonne punch","Damage resistance","Superhuman reflexes"]
    },
  ]
}
```

### Acessando os dados de uma objeto JSON

Para acessar os dados armazenados em um objeto JSON, temos de passar o
caminho que vai deste o nome da chave do nível mais elevado até o nome
da chave do nível mais interno. Veja os exemplos

-   Na listagem
    [\[lis:Array-de-objetos\]](#lis:Array-de-objetos){reference-type="ref"
    reference="lis:Array-de-objetos"} queremos os nomes do terceiro
    registro:\
    *console.log(employees\[2\].firstname);*

-   Na listagem
    [\[lis:Objetos-JSON-encadeados.\]](#lis:Objetos-JSON-encadeados.){reference-type="ref"
    reference="lis:Objetos-JSON-encadeados."} queremos os dados do poder
    *Damage resistance*, mas vamos ver um exemplo em *javascript* dentro
    de uma página html:\

        <script> 
            var superHeroes = '{"squadName": "Super hero squad", "active": true,"members": [{"name": "Molecule Man","age": 29,"powers": ["Radiation resistance", "Turning tiny"]},{"name": "Madame Uppercut","age": 39,"powers": ["Million onne punch","Damage resistance","Superhuman reflexes"]}]}';

            var superHeroesJSON = JSON.parse(superHeroes); 
            
            console.log("superHeroesJSON:" + superHeroesJSON.members[1].powers[1]); 
        </script>

*WebServices*
-------------

Um *webservice* é um componente de software que permite a comunicação
entre aplicações diferentes. Ele é uma forma de compartilhar recursos e
serviços entre diferentes sistemas, independentemente de sua plataforma
ou linguagem de programação.

Os *webservices* são baseados em tecnologias web, como JSON, HTML, XML e
HTTP. Isso os torna fáceis de usar e integrar com outras aplicações e
que pode ajudar as organizações a compartilhar recursos e serviços de
forma eficiente e eficaz.

Os *webservices* são usados em uma ampla variedade de aplicações,
incluindo:

-   Integração de sistemas;

-   Serviços de *e-commerce*;

-   Serviços de localização;

-   Serviços de jogos e

-   Serviços de mídia social

Aqui estão alguns dos benefícios dos *webservices*:

-   **Flexibilidade**: Os *webservices* podem ser usados para comunicar
    entre aplicações diferentes, independentemente de sua plataforma ou
    linguagem de programação;

-   **Escalabilidade**: Os *webservices* podem ser facilmente escaláveis
    para atender às necessidades de uma organização em crescimento;

-   **Segurança**: Os *webservices* podem ser usados para proteger a
    privacidade e a segurança dos dados;

-   **Confiabilidade**: Os *webservices* podem ser usados para garantir
    que os serviços sejam entregues de forma confiável e consistente e

-   **Eficiência**: Os *webservices* podem ser usados para automatizar
    tarefas e processos, o que pode economizar tempo e dinheiro.

*Application Programming Interface* (API) e *Representational* *State* *Transfer* (REST)
----------------------------------------------------------------------------------------

Uma API é um conjunto de funções que foram **implementadas em um
programa de computador** que são disponibilizados para que outros
programas possam utilizá-las diretamente de forma simplificada; sem
envolver-se em detalhes da implementação.

 

*Representational* *State* *Transfer* (REST) não é um protocolo ou
padrão, mas sim um **conjunto de restrições de arquitetura**. Os
desenvolvedores de API podem implementar a arquitetura REST de maneiras
variadas.

 

Um *endpoint* é um **endereço** de rede que identifica um **recurso** ou
**serviço**. Em uma API, um *endpoint* é o **endereço de rede que
identifica um recurso específico** que pode ser acessado pela API. Os
*endpoints* são geralmente nomeados de forma descritiva para refletir o
recurso que eles representam. Por exemplo, o *endpoint* para o recurso
*getAllUsers* (nome da função que retorna os usuários do sistema) pode
ser chamado de */usuario* ou /*systemusers*

 

Quando um cliente faz uma solicitação a um *endpoint* de uma *API REST*,
essa API transfere uma representação do estado do recurso ao
solicitante. Essa informação é entregue via HTTP utilizando um dos
vários formatos possíveis: JSON, HTML, XML, etc. O **formato JSON** é o
mais usado porque, apesar de seu nome, é independente de qualquer outra
linguagem e pode ser lido por máquinas e humanos.

 

As *APIs REST* são baseadas nos métodos HTTP padrão, como **GET**,
**POST**, **PUT** e **DELETE**. Esses métodos são usados para acessar,
criar, atualizar e excluir recursos.

Os recursos são objetos que são expostos pela API. Eles podem ser
entidades como *clientes, produtos ou pedidos*.

 

Alguns exemplos de *endpoints*:

-   /users: este *endpoint* retorna uma lista de todos os usuários.

-   /products: este *endpoint* retorna uma lista de todos os produtos.

-   /orders: este *endpoint* retorna uma lista de todas os pedidos.

### Exemplo de API REST

A seguir temos uma API implementada em *NodeJS* que compartilha o
recurso cujo *endpoint* é ***api/v1/users*** dentro do domínio
*exemple.com*:

``` {#lis:Exemplo-de-c=0000F3digo caption="Exemplo de código para criar uma API para o \emph{endpoint api/v1/users.
}" label="lis:Exemplo-de-c=0000F3digo"}
api.get("/api/v1/users", appUsers.getAllUsers);
```

 

Aqui vemos uma API que ao ser chamada por uma aplicação cliente, vai
executar a função *getAllUsers* que retorna um JSON contendo todos os
usuários do sistema.

 

Para consumir esta API, podemos desenvolver em *javascript* o seguinte
código:

``` {#lis:Exemplo-de-requisi=0000E7=0000E3o caption="Exemplo de requisição para consumir a API \emph{api/v1/users. }" label="lis:Exemplo-de-requisi=0000E7=0000E3o"}
<script>
    const request = new XMLHttpRequest(); 
    request.open("GET", "https://example.com/api/v1/users"); 
    request.send();
    request.onload = () => {   
        if (request.status === 200) {     
            const users = JSON.parse(request.responseText);
            console.log(users);
        } else {
            console.log("Erro:", request.status);
        }
    };
</script>
```

 

Este código fará uma solicitação ao *endpoint* /api/v1/users da API em
*example.com*. Se a solicitação for bem-sucedida, o código imprimirá a
lista de usuários na console. Se a solicitação falhar, o código
imprimirá o código de erro na console.

#### Segurança em *API Rest*

Uma API em produção fica disponível para acessada pela Internet. Assim,
qualquer pessoa que tiver o endereço da API poderá solicitar seus
serviços. Caso a API não tenha algum sistema de segurança, pessoas não
autorizadas podem obter dados não autorizados.

Uma das maneiras de se implementar segurança com APIs é utilizar o
recurso de *token JSON Web Token* (JWT). Um *token* JWT é um pequeno
trecho de dados codificado com JSON que é usado para transmitir
informações de segurança entre duas partes como uma forma de
autenticação. Os *tokens* JWT são normalmente usados em aplicativos da
web para representar a identidade de um usuário e permitir que eles
acessem recursos protegidos.

Os tokens JWT são compostos por três partes:

-   ***Header*** (Cabeçalho): define o tipo de token (JWT) e o algoritmo
    de assinatura usado.\

        {
            "alg": "HS256",
            "typ": "JWT"
        }

-   ***Payload*** (Carga): é o corpo do *token* e contém as informações
    de segurança. Ele contém as *claims* (informações) da entidade
    tratada, normalmente o usuário autenticado. As *claims* podem ser de
    3 tipos:

    -   *Reserved*: atributos não obrigatórios que são usados na
        validação do *token* pelos protocolos de segurança das APIs.

    -   *Public*: atributos que usamos em nossas aplicações. Normalmente
        armazenamos as informações do usuário autenticado na aplicação.

    -   *Private*: atributos definidos especialmente para compartilhar
        informações entre aplicações.

-   ***Signature*** (Assinatura): é um *hash* da cabeçalho e da carga e
    é usada para verificar a integridade do *token*.\
    \

        HS256SHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret_key)

    Cujo resultado seria algo assim:\

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
        SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Iremos usar o *token* JWT em nossa aplicação.

Computadores *Back-End* e *Front-End*
-------------------------------------

### Computador *Back-End*

Um computador *back-end* é um computador que **executa as funções de
processamento e armazenamento de um aplicativo ou sistema**.

Normalmente, é um servidor que não é diretamente acessível aos usuários.

Os computadores *back-end* geralmente **são mais poderosos do que os
computadores** ***front-end***, pois precisam lidar com grandes
quantidades de dados e processamento.

Os computadores *back-end* são usados em uma ampla variedade de
aplicativos, incluindo:

-   Sites e aplicativos da web;

-   Bancos de dados;

-   Sistemas de arquivos;

-   Servidor de e-mail;

-   Servidor de rede.

### Computador *Front-End* 

Um computador *front-end* é um computador que **interage diretamente com
o usuário**.

Normalmente, é um **computador pessoal ou um dispositivo móvel**.

Os computadores *front-end* geralmente **são menos poderosos do que os
computadores** ***back-end***, pois não precisam lidar com grandes
quantidades de dados e processamento.

Os computadores *front-end* são usados em uma **ampla variedade de
aplicativos,** incluindo:

-   Navegadores da web;

-   Processadores de texto;

-   Planilhas;

-   Editores de imagens;

-   Jogos

Finalizando
-----------

Neste capítulo foram apresentados diversos conceitos referentes a
Computação Distribuída. Nos próximos capítulos iremos aprender a
desenvolver softwares contendo os conceitos apresentado aqui.

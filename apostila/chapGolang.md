# Servidor Back End em Go (Golang)

## Introdução
**Go**, também conhecida como **Golang**, é uma linguagem de programação de código aberto criada pela Google. Desenvolvida com o objetivo de oferecer uma linguagem simples, eficiente e confiável, Go rapidamente se tornou uma escolha popular para diversos tipos de projetos, desde desenvolvimento web até sistemas distribuídos.

## Características da Go
Segue m algumas das características da linugagem Go
-   **Simplicidade:** Go possui uma sintaxe clara e concisa, facilitando o aprendizado e a escrita de código.

-   **Concorrência:** A linguagem oferece suporte nativo a concorrência, permitindo a criação de programas altamente eficientes e escaláveis.

-   **Eficiência:** Compilada em código de máquina, Go gera executables rápidos e otimizados.

-   **Tipagem estática:** A tipagem estática ajuda a prevenir erros comuns em tempo de compilação.

-   **Garbage collector:** Gerenciamento automático de memória, liberando o desenvolvedor da tarefa de alocar e desalocar memória manualmente.

## Áreas de aplicação
**Go** é utilizada em diversas áreas, incluindo:

-   **Desenvolvimento web:** Criação de servidores web, APIs e microsserviços.

-   **Sistemas distribuídos:** Desenvolvimento de sistemas altamente escaláveis e resilientes.

-   **Cloud computing:** Construção de aplicações em nuvem.

-   **DevOps:** Automação de tarefas e criação de ferramentas para gerenciamento de infraestrutura.

-   **Data science:** Análise de dados e machine learning.


## Começando com Go
Para começar a programar em Go, você precisará:

1.  **Instalar o Go:** Baixe e instale o compilador Go para o seu sistema operacional em [https://golang.org/dl/](https://golang.org/dl/).
2. **Acrescentar *Path* da linguagem:** No arquivo */etc/profile,* acrescente as linhas: 
	~~~Bash
	PATH="$PATH:/opt/go/bin"
	export PATH
	~~~
4. **Testar a instalação:** Para testar se a Go foi instalada, digite *go version*

5.  **Escrever seu primeiro programa:** Crie um arquivo com extensão `.go` e escreva seu código.

6.  **Compilar e executar:** Utilize o comando `go run` para compilar e executar seu programa.

### Exemplo:
~~~Go
//	@file:hello.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
~~~
Para **executar**, digite:
~~~Bash
go run hello.go
~~~

Para **compilar**, digite:
~~~Bash
go build hello.go
~~~

  
    
  
  
  
> Written with [StackEdit](https://stackedit.io/).

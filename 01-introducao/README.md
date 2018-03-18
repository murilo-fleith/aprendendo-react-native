# Introdução

React é uma biblioteca para construção de UIs amplamente difundida na indústria de software e com um ecossistema muito rico de ferramentas.

## Dependências

Para o nosso curso, vamos precisar instalar os seguintes pacotes:

* [Node.js > 7.3](https://nodejs.org/en/download)
* [Yarn](https://yarnpkg.com/pt-BR/docs/install)
* [Git](https://git-scm.com/downloads)
* Editor de código de sua preferência

## Instalação

Veja o vídeo [tutorial disponível no YouTube](https://youtu.be/GiV7KQYFxrI).

### Windows

Ao trabalhar com Node.js e React, você precisará usar a linha de comando. No Mac/Linux, isso é chamado de terminal. Em um PC, é chamado de prompt de comando.

No Windows, a ferramenta padrão de linha de comando é o [PowerShell](* https://docs.microsoft.com/pt-br/powershell). [Leia sobre ele](https://docs.microsoft.com/pt-br/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6), entenda como configurar e usar a ferramenta.

Tudo o que estiver dentro do bloco abaixo são COMANDOS que deve ser escrito dentro do PowerShell. `C:\>` indica o prompt e o diretório onde você está no sistema e não deve ser digitado.

Exemplo:

Ao ver:

```sh
C:\> COMANDO
```

Você deve digitar `COMANDO` no sistema.

#### Chocolatey

No Linux, em distribuições baseadas em Debian/Ubuntu, usamos o comando `apt-get` para instalar pacotes. No Mac, usamos o Homebrew. No Windows, a solução é o [Chocolatey](https://chocolatey.org). Instale o Chocolatey no seu sistema seguindo o [guia da ferramenta](https://chocolatey.org/install):

1. Abra o PowerShell como administrador e digite:

```sh
Set-ExecutionPolicy AllSigned
```

Selecione sim ou todos nas opções retornadas. Então, execute o seguinte comando para instalar o Chocolatey:

```sh
C:\> Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Após a instalação, feche e abra o PowerShell novamente.

#### Node

Instalando com o Chocolatey:

```sh
C:\> choco install node.install
```

Verifique se o Node foi corretamente instalado. Se ocorrer um erro, feche e abra o PowerShell e tente novamente.

```sh
$ node -v
```

#### Yarn

O Yarn é um gerenciador de pacotes criado no Facebook. É uma alternativa compatível com npm, o gerenciador padrão do Node. Vamos previlegiar o uso do Yarn durante o curso.

```sh
C:\> choco install yarn
```

Verifique se o Yarn foi corretamente instalado. Se ocorrer um erro, feche e abra o PowerShell e tente novamente.

```sh
$ yarn -v
```

[Documentação do Yarn](https://yarnpkg.com/pt-BR/).

#### Git

```sh
C:\> choco install bit
```

Verifique se o Git foi corretamente instalado. Se ocorrer um erro, feche e abra o PowerShell e tente novamente.

```sh
$ git -v
```

[Documentação do Git](https://git-scm.com/doc).

#### Editores de texto

Escolha um, e aprenda a usar:

* [VS Code](https://code.visualstudio.com)
* [SublimeText 3](https://www.sublimetext.com/3)
* [Atom](https://atom.io)

## React DevTools

Instale a ferramentas de desenvolvimento do React para o Chrome ou Firefox.

* [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=pt-br)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Referências

Alguns links para documentação oficial das bibliotecas que vamos usar:

* [Documentação do React](https://facebook.github.io/react/index.html)
* [React Code](https://github.com/facebook/react)
* [React NPM](https://www.npmjs.com/package/react)
* [Documentação Webpack](https://webpack.js.org/)

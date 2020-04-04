# Guia de Instalação - Projeto de um CRUD básico
## Introdução
Este documento será para demostrar, passo a passo, como fazer a instalação do projeto.

## Programas Usados
Foi usado os seguintes programas para o desenvolvimento. Recomenda-se usar os mesmos programas citados aqui para que as configurações feitas neste projeto passem a funcionar quem qualquer computador. São eles:

WampServer - Para a instalação do servidor local. 

CodeIgniter - Responsável pelo controle e conversas entre componentes.

Node.Js - Usado para a criação das telas. 

## Instalando os Programas
### WampServer
O download do WampServer pode ser feito neste https://www.techtudo.com.br/tudo-sobre/wampserver.html.  Atenção para a versão do seu computador. Recomento usar a versão 64bit, que foi utilizada para o desenvolvimento do projeto.
Para que se tenha certeza que o WampServer foi baixado e configurado corretamente, aparecerá o seu ícone na barra de tarefas na cor verde, significando que todos os seus componentes estão em correto funcionamento. Além disso, nenhuma mensagem de erro deve aparecer ao executa-lo. 

### Node.Js
O Node.Js é o responsável pelas telas, sem a devida instalação o sistema não as mostrará para o usuário. Esse programa pode ser baixado neste link https://nodejs.org/pt-br/download/. Atenção para a versão do seu computador. Novamente se recomenda baixar a versão 64bit. 

### CodeIgniter
O CodeIgniter não precisa de instalação, pois as pastas que serão baixadas conterão todo o conteúdo que será usado. Mas precisará de apenas algumas configurações básicas que será citado mais à frente. 

## Download do Projeto
O download do projeto pode ser efetivado através deste link: https://github.com/daniloCampelo/UnyLeyaProjectGit.
Pode-se escolher duas formas de se ter o projeto localmente. A primeira é fazer uma cópia do repositório que está no GitHub. A segunda é fazer o download .zip do projeto.
Em ambas as formas, o projeto deverá está dentro da pasta "cd wamp64\www\", pois será onde o WampServer o encontrará para executar corretamente. 

## Download do Banco de Dados
O bando de dados, ao baixar o projeto, terá sido baixado juntamente com este. Pode-se encontrar ele com o nome "unyleyadb.sql". Para que ele seja adicionado a sua base de dados, se deverá ir até ela e importar essa base de dados no seu banco de dados. Uma observação importante é que geralmente o WampServer dá a opção de se trabalhar com dois bancos de dados, o MySQL e o MariaDB. Todo o projeto foi configurado para usar o MariaDB. Então, sertifique-se que esteja utilizando este bando de dados. 

## Configurações do Projeto
A principal configuração que se deve fazer no projeto é especificar para tal o banco de dados que está sendo usado. Na pasta wamp64\www\UnyLeyaProjectGit\application\config\database, deve ser configurado os campos: 'username' e 'password'. Esses campos são o usuário e a senha que é utilizada para entrar no banco de dados MariaDB. No projeto, a configuração base foi mantida como 'root' e '' para o usuário e a senha, respectivamente. 

## Executando o Projeto
Para executar o projeto, deve-se abrir o prompt de comando do Node.Js (Node.Js command prompt). Dentro dele, deverá ir até a pasta "cd wamp64\www\UnyLeyaProjectGit\reactfile". Dentro desta pasta, deverá digitar o seguinte comando: "npm start". Feito isso, o projeto deverá funcionar corretamente. 

## Considerações Finais
Existem algumas particularidades de cada computador que pode fazer com que o projeto não execute exatamente igual a todas as configurações aqui citadas. Visto isso, caso se tenha algum problema de execução, mande um e-mail para danilobcampelo@gmail.com que será sanado alguma eventual dúvida.  

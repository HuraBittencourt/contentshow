### Como clonar o projeto
$ git clone cola_o_caminho_do_porjeto

### Como fazer um push
- O push serve para enviar para o repositório remoto as alterações feitas
$ git push

### Como fazer um pull
- O pull serve para pegar do repositório remoto as útlimas alterações feitas
$ git pull

## Criamos uma branch para desenvolver uma nova feature, fazer alguma manutenção ou resolver um bug. A nova branch sempre terá como orignem a branch Master

### Como criar uma branch a partir da branch Master
$ git branch -b nome-da-branch

### Como alterar entre as branchs
$ git checkout nome-da-branch

### Como verificar os arquivos alterados
$ git status

### Como comparar as alterações que foram feitas em um arquivo que foi modificado
$ git diff nome_do_arquivo

### Como adicionar um arquivo para ser commitado no futuro
$ git add nome_do_arquivo

### Como remover todas as alterações feitas em um arquivo naquela branch
$ git checkout nome_do_arquivo

### Como commitar
$ git commit -m "descrição do que foi feito"

## O processo para criar e depois enviar para o repositório remoto uma nova feature que deve ser desenvolvida, por exemplo, segue os seguintes passos
1 - $ git pull (Na Master. Para pegar a master fresquinha, com todos os arquivos atualizados)
2 - $ git checkout -b nome-da-nova-feature (a partir da branch Master)
3 - Desenvolva tudo
4 - $git status (para verificar todos os arquivos que foram alterados)
5 - $ git add nome_do_arquivo (para todos os arquivos alterados)
6 - $ git commit -m "Foi desenvolvido isso e isso"
7 - $ git push (para enviar para o repositorio remoto)

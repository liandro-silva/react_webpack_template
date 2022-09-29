<p align="center">
<img src="./public/logo.svg" width="200" />
</p>

<h3 align="center">
Template React para pequenos e grandes sistemas
</h3>

<br>

###### Antes tudo, vamos ao contexto de uso deste repositório

> Este repositório contém uma série de arquivos e configurações necessárias para uma aplicação React. Com este repositório você pode sair na frente quando se fala em controle do projeto. O principal ponto para surgimento deste template, é poder ter controle do que fato acontece e parar de usar o **CRA** para todas as coisas, é importante entender que nem este template e nem o **CRA** é bala de prata e contém uma série de configurações genéricas visando atender ao máximo de casos usos possíveis. A diferença é que com este você consegue ter uma clareza muito maior disso e consegue deletar aquilo que não cabe para o seu projeto.

#### O que está pré-configurado?

###### Git Hooks

- **pre-push:**
  Rodará sempre antes de efetivar a solicitação de um push e nas configurações atuais fará uma varredura no projeto buscando por erros de typescript, havendo ele falha e não permite que o push seja feito, do contrário ele segue e faz o push
- **pre-commit:**
  A cada solicitação de commit ele executará o script do lint-staged que por sua vez executará o script **format:eslint** para verificar erros de eslint e tentar corrigi-los e em seguida o **format:codestyle** para verificar se algum código que não esteja adequado as regras do prettier. Se, quaisquer um dos scripts falhar ele não permitará que você efetive o commit
- **commit-msg:**
  script encarregado de executar o **commitlint**, ferramenta responsável por verificar se o commit está de acordo com o **convetional commit**

###### Code Style e Code Formmater

O projeto já está pré-configurado com regras de eslint e prettier que garantirá uma consistência no desenvolvimento.

###### Webpack

O projeto já está pré-configurado com regras de Webpack visando perfomance e segurança e entregar os recursos mais utilizados no dia a dia, como por exemplo, SASS, CSS, TypeScript, Styled Components, JavaScript, etc...

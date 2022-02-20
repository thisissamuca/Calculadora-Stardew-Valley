<h1 align="center">
    <img alt="GIF" src="https://thumbs.gfycat.com/DrearyPotableDiamondbackrattlesnake-size_restricted.gif">
</h1>

<h4 align="center"> 
	🚧 Vamos calcular? 🚀 em construção... 🚧
</h4>

<p align="center">
 
 <img src="http://img.shields.io/static/v1?label=STATUS&message=BUILDING&color=GREEN&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=last_releasure&message=20_fev_2022&color=GREEN&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=license&message=MIT&color=blue&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=npm&message=16.14.0&color=yellow&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=LANGUAGES&message=3&color=red&style=for-the-badge"/>
 <img src="http://img.shields.io/static/v1?label=repo size&message=252kb&color=yellow&style=for-the-badge"/>
 
</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#Sobre)
   * [Tuor](#Tuor)
   * [Cálculos](#Cálculos)
   * [Tecnologias](#Tecnologias)
   * [Licença](#Licença)
<!--te-->

# 💻 Sobre o projeto
 
🌾 Stardew Calculator - O objetivo é criar um site completo com todas as ferramentas necessárias para o usuário calcular seus lucros na fazenda. A inspiração para a criação desse site foi justamente minha mania de fazer cálculos e relações matemáticas nos jogos que jogo. No final desse projeto o usuário terá a chance de fazer todas essas relações matemáticas de forma rápida, dinâmica e funcional, sem precisar ter o trabalho de ficar anotando tudo no papel.

🕹️ Funcionalidades:
- Calcular lucros, tempo de colheta, número de colheitas e gastos.
- Fazer comparação de lucros entre sementes, vinhos, sucos ou itens artesanais.
- Exibir uma tabela simples e rápida para a consulta de informações relevantes.

<br>

🌐 Link para acessar o site:
https://thisissamuca.github.io/Calculadora-Stardew-Valley/

<br>

<div align="center">
 
<img alt="GIF" src="https://66.media.tumblr.com/939c7c782b21de2c78fa992cd03fd65e/908f83baf3392779-20/s1280x1920/f59fa83f2f3e595a304dea17238771ccb9806716.gif">
 
</div><br>
<hr>

# 🎨 Tuor Desktop

## Página inicial

<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944785470968188928/20220219_233933.gif">

<p>Contém uma série de informações legais e as últimas atualizações!</p>
<br>

## Barra de navegação:

<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944785150632398909/20220219_233818.gif">
<br>

## Tabela de sementes:

<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944784659584262204/20220219_233618.gif">

<p>Ainda não possui um campo de busca. Tabela com diversas informações da fruta, como:</p>

- Tempo de coleta.
- Valor de venda do fruto em todas suas qualidades.
- Chance de vir fruto extra.
<br>

## Calculadora de lavouras:

<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944779285196054588/20220219_231443.gif">

<p>Você deve digitar e escolher todas as caixas de opções para a calculadora funcionar perfeitamente!</p>
<br>

## Alert de erro:

<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944782255275003924/unknown.png">
<br>

## Aba com informações:

<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944780996497268776/20220219_232143.gif">

<p>Logo em seguida você recebe uma série de variavéis importantes para o fazendeiro, como: </p>

- Chance de coletar frutos de qualidade.
- Tempo para coletar os frutos.
- Custo de aquisição de sementes e faturamento total.
- Valor de venda do fruto em todas suas qualidades.
- Número total de colheitas durante a estação.
<hr>

# 🧮 Como os cálculos foram feitos

⚙️ Devido as condições específicas de cada fruto, estação, profissão, itens e tudo mais, os cálculos são recheados de condicionais para cada caso específico. Todas as variáveis e informações foram retiradas do site oficial do Stardew Valley.

🌐 Link para acessar o site do Stardew Valley:
https://pt.stardewvalleywiki.com/Stardew_Valley_Wiki

⚙️ Abaixo irei apresentar alguns métodos que utilizei para calcular algumas variáveis importantes para todos os cálculos:

## Valor de venda

<p>A fórmula para calcular o valor de venda de uma determinada semente é dada por:</p>
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944787627171794944/unknown.png">

O cálculo estabelece uma relação entre as constantes condicionais específicas de cada semente e os preços específicos para cada qualidade do fruto, tudo em função do nível de cultivo do jogador, do fertilizante usado na lavoura, do espaço disponível na fazenda e da quantidade colhida em cada espaço na fazenda.

**p1**, **p2**, **p3** e **p4** são constantes condicionas em função do nível de cultivo do jogador e do fertilizante usado que devolvem uma razão percentual da chance de coletar um fruto da respectiva qualidade.

🌐 Link para acessar a tabela de constantes:
https://pt.stardewvalleywiki.com/Fertilizante

**chanceMaisFrutos** é uma porcentagem específica para vir mais frutos durante a colheita. Porém, essa chance só é aplicada nos frutos de qualidade normal e não influencia na quantidade do fruto em outras qualidades.

No exemplo acima o nível de cultivo do jogador é 1 e o fertilizante usado é premium. Nessa fórmula o Mirtilo e Oxicoco não são considerados, ambos possuem fórmulas próprias.
 
O resultado final da fórmula entrega o valor total da lavoura (sem considerar o número de vezes colhidas e o tempo para colher cada fruto), teoricamente seria o valor bruto da lavoura.

<br>

## Tempo para colher o fruto

<p>A fórmula para o tempo para colhe uma determinada semente é dada por:</p>
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944788621918109696/unknown.png">

O cálculo estabelece uma relação entre a profissão do jogador (caso influencia no tempo para colher) e o solo foliar que ele usa nas lavouras.

**tempoColheita** é um número específico de dias para colher uma determinada semente (sem considerar a reprodução do fruto).

**( 1 - 10/100)** é o fator de desconto que a profissão agricultor aplica ao plantar uma semente. 

**( 1 - 33/100)** é o fator de desconto que o hiper solo foliar aplica no solo. 

🌐 Link para acessar a tabela de constantes:
https://pt.stardewvalleywiki.com/Fertilizante

No exemplo acima o jogador está com a profissão de agricultor e está usando o Hiper solo foliar.

O resultado final da fórmula entrega o tempo para colher o fruto em questão (em dias).

<br>

## Coeficiente de produção

<p>A fórmula que determina a quantidade de colheitas durante uma estação é dada por:</p>
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944788814776369162/unknown.png">

O cálculo estabelece uma relação entre os dias da estação (28), o dia atual e o tempo para colher.

**diaAtualNumber** é uma variável que o usuário determina na calculadora que indica o dia atual que ele está em sua fazenda.

Usando a fórmula com exemplo de aplicação:

*Uma estação inteira possui 28 dias. A diferença entre os dias de uma estação e o dia atual na fazenda é a quantidade de dias restantes da estação que ainda dá para plantar e colher os frutos. Vamos pensar em blocos: Uma estação inteira há 28 blocos, essa diferença indica quantos blocos eu ainda tenho e que posso trabalhar ativamente.*

*Vamos supor => (28 - 10) = 18*

*Agora suponhamos que o tempo para colher seja de 6 dias.*

*A razão desses blocos restantes (18) e o tempo para colher esses frutos será a quantidade que consigo dividir esses blocos para trabalhar ativamente.*

*Ou seja => 18 / 6 = 3*

*Desses 18 dias que ainda tenho para trabalhar, devo dividi-los em 6 partes para garantir que a semente cresça o suficiente para colher. No fim das contas, conseguirei 3 garantias durante os dias restantes, que serão as vezes que poderei colher durante todo esse proceso.*

O resultado final da fórmula entrega a quantidade de vezes que consigo colher uma lavoura nos dias restantes da estação.

<br>

## Faturamento e lucro

<p>A fórmula que determina a quantidade de colheitas durante uma estação é dada por:</p>
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944789165885780018/unknown.png">

A fórmula do faturamento exerce uma relação entre o produto do valor de venda visto anteriormente e o coeficiente de produção, que é o número de vezes que a lavoura foi colhida.

No caso da fórmula do lucro, é uma diferença entre o faturamento bruto e os gastos totais com sementes tanto no Pierre, Sandy e Carrinho como no mercado Joja.

**( 1 + 10/100)** é o fator de aumento que a profissão cultivador aplica ao vender os frutos. 

No exemplo acima o jogador está com a profissão de cultivador.

O resultado final de ambas as fórmulas, entregam o faturamento, lucro por comprar no pierre e o lucro por comprar no mercado Joja, respectivamente.

<hr>

## 🛠 Tecnologias!

As seguintes ferramentas foram usadas na construção do projeto:

- [CSS3](#CSS3)
- [HTML5](#HTML5)
- [JavaScript](#JavaScript)
- [JQuery](#JQuery)
- [Bootstrap](#Bootstrap)

<hr>

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Samuel Augusto

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: https://nodejs.org/en/download/
[vscode]: https://code.visualstudio.com/
[license]: https://opensource.org/licenses/MIT

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
 
</div>

<br>

# 🎨 Tuor Desktop

<div align="center" text-align="center">
	
**Página inicial:** Contém uma série de informações legais e as últimas atualizações!
	
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944785470968188928/20220219_233933.gif">
	
<br>
	
</div>

<div align="center" text-align="center">
	
<hr width="300px">
	
**Barra de navegação:**
	
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944785150632398909/20220219_233818.gif">
	
</div>

<div align="center" text-align="center">
	
<hr width="300px">
	
**Tabela de sementes:** várias informações sobre todos os frutos cultivados no jogo!
	
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944784659584262204/20220219_233618.gif">
	
</div>

<br>

Ainda não possui um campo de busca. Tabela com diversas informações da fruta, como:

- Tempo de coleta.
- Valor de venda do fruto em todas suas qualidades.
- Chance de vir fruto extra.

<div align="center" text-align="center">
	
<hr width="300px">
	
**Calculadora de lavouras:** entrada de várias variáveis importantes
	
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944779285196054588/20220219_231443.gif">
	
</div>

<br>

<div align="center" text-align="center">
	
<hr width="300px">
	
**Alerta de erro:** caso alguma informação fique faltando, o site exibirá um alerta!
	
<img alt="imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/944782255275003924/unknown.png">
	
</div>

<div align="center" text-align="center">
	
<hr width="300px">
	
**Aba com informações:** o resultado de vários cálculos importantes para o usuário!
	
<img alt="GIF" src="https://cdn.discordapp.com/attachments/944392836445503529/944780996497268776/20220219_232143.gif">
	
</div>

<br>

Logo em seguida você receberá uma série de variavéis importantes para o fazendeiro, como:

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

⚙️ Abaixo irei apresentar alguns métodos que utilizei para calcular algumas variáveis importantes e casos específicos para todos os cálculos:

<br>

<div align="center" text-align="center">
	
<hr width="300px">
	
</div>

## Valor de venda

<p>A fórmula para calcular o valor de venda total de uma determinada semente é dada por:</p>
<img alt="Imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/945110584620367882/unknown.png">

No exemplo acima o nível de cultivo do jogador é 1 e não há fertilizante. Nessa fórmula, o Mirtilo e Oxicoco não são considerados, ambos possuem fórmulas próprias.

A fórmula estabelece uma relação entre as constantes condicionais específicas de cada semente e os preços específicos para cada qualidade do fruto, tudo em função do nível de cultivo do jogador, do fertilizante usado na lavoura, do espaço disponível na fazenda e da quantidade colhida em cada espaço na fazenda.

**p1**, **p2**, **p3** e **p4** são constantes condicionas em função do nível de cultivo do jogador e do fertilizante usado que devolvem uma razão percentual da chance de coletar um fruto da respectiva qualidade. Por exemplo:

<br>

*Suponhamos que você tenha 100 espaços em sua fazenda. e o seu fazendeiro/a possui nível 1 em cultivo e o solo não possui fertilizantes.*

*Então desses 100 frutos colhidos, é garantido que 97 serão de qualidade normal, 2 serão de qualidade prata e 1 será de qualidade ouro.*

<br>

🌐 Link para acessar a tabela de constantes:
https://pt.stardewvalleywiki.com/Fertilizante

<br>

**chanceMaisFrutos** é uma porcentagem específica para vir mais frutos durante a colheita. Porém, essa chance só é aplicada nos frutos de qualidade normal e não influencia na quantidade do fruto em outras qualidades.
 
O resultado final da fórmula entrega o valor total da lavoura (sem considerar o número de vezes colhidas e o tempo para colher cada fruto), teoricamente seria o valor bruto da lavoura.

### Valor de venda Mirtilo e Oxicoco

<p>A fórmula para calcular o valor de venda do Mirtilo e Oxicoco é dada por:</p>
<img alt="Imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/945106993956392970/unknown.png">

No exemplo acima o nível de cultivo do jogador é 1 e não há fertilizante no solo.

A **quantidade colhida (qtdColhida)** do Mirtilo na hora da colheita é de 3 frutos por bloco (segundo o site oficial).

A **quantidade colhida (qtdColhida)** do Oxicoco na hora da colheita é de 2 frutos por bloco (segundo o site oficial).

<br>

🌐 Link para acessar o Mirtilo e Oxicoco, respectivamente:
https://pt.stardewvalleywiki.com/Mirtilo , https://pt.stardewvalleywiki.com/Oxicoco

<br>

Segundo as condições do Mirtilo, apenas um fruto (dos 3 colhidos) será de qualidade diferente do normal, ou seja, pode ser da qualidade prata, ouro ou irídio (as mesmas condições se aplicam ao Oxicoco).

Com exceção ao **(qtdColhida - 1)**, essa fórmula e a anterior são basicamente iguais. A diferença entre a quantidade colhida (qtdColhida) e 1 é devido ao número de Mirtilos e Oxicocos colhidos durante a colheita. Como os Mirtilos adicionais são de qualidade normal (as mesmas condições se aplicam ao Oxicoco) então:

<br>

*Mirtilo:*

*Na prática ficaria => (qtdColhida - 1) = 2*

*Oxicoco:*

*Na prática ficaria => (qtdColhida - 1) = 1*

<br>

Ou seja, (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) é uma relação que envolve a venda de qualidade normal, o espaço na lavoura e a quantidade de Mirtilos ou Oxicocos que serão colhidos na qualidade normal. Nesse bloco da fórmula, **o resultado indica o valor total APENAS dos frutos de qualidade normal.**
 
O resultado final da fórmula entregará o valor total de Mirtilos ou de Oxicocos (sem considerar o número de vezes colhidas e o tempo para colher cada fruto). É importante ressaltar que, a fórmula não altera a quantidade de frutos colhidos, apenas gerencia onde os frutos se encaixam com suas condições. O fato de haver uma diferença de 1 na quantidade de frutos colhidas dentro da fórmula não prejudica os outros frutos colhidos no mesmo bloco da lavoura, visto que a **qtdColhida** é uma constante específica para ambos os frutos.

<br>

<div align="center" text-align="center">
	
<hr width="300px">
	
</div>

## Tempo para colher o fruto

<p>A fórmula para o tempo para colhe uma determinada semente é dada por:</p>
<img alt="imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/944788621918109696/unknown.png">

No exemplo acima o jogador está com a profissão de agricultor e está usando o Hiper solo foliar.

O cálculo estabelece uma relação entre a profissão do jogador (caso haja influência no tempo para colher) e o solo foliar aplicado nas lavouras.

**tempoColheita** é um número específico de dias para colher uma determinada semente (sem considerar a reprodução do fruto).

**tempoColheitaSF** é o resultado do tempo de colheita com os descontos respectivos da profissão e do Hiper solo foliar.

**( 1 - 10/100)** é o fator de desconto que a profissão agricultor aplica ao plantar uma semente. 

**( 1 - 33/100)** é o fator de desconto que o Hiper solo foliar aplica no solo. 

<br>

🌐 Link para acessar a tabela de constantes:
https://pt.stardewvalleywiki.com/Fertilizante

<br>

O resultado final da fórmula entrega o tempo para colher o fruto em questão (em dias).

<br>

<div align="center" text-align="center">
	
<hr width="300px">
	
</div>

## Coeficiente de produção

<p>A fórmula que determina a quantidade de colheitas durante uma estação é dada por:</p>
<img alt="imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/944788814776369162/unknown.png">

O cálculo estabelece uma relação entre os dias da estação (28), o dia atual e o tempo para colher. Nessa fórmula a Fruta Antiga não é considerada pois possui uma fórmula própria.

**diaAtualNumber** é uma variável que o usuário determina na calculadora que indicará o dia atual que ele está em sua fazenda.

Usando a fórmula com exemplo de aplicação:

<br>

*Uma estação inteira possui 28 dias. A diferença entre os dias de uma estação e o dia atual na fazenda é a quantidade de dias restantes da estação que ainda dá para plantar e colher os frutos. Vamos pensar em blocos: Uma estação inteira há 28 blocos, essa diferença indica quantos blocos eu ainda tenho e que posso trabalhar ativamente.*

*Vamos supor => (28 - 10) = 18*

*Agora suponhamos que o tempo para colher seja de 6 dias.*

*A razão desses blocos restantes (18) e o tempo para colher esses frutos será a quantidade que consigo dividir esses blocos para trabalhar ativamente.*

*Ou seja => 18 / 6 = 3*

*Desses 18 dias que ainda tenho para trabalhar, devo dividi-los em 6 partes para garantir que a semente cresça o suficiente para colher. No fim das contas, conseguirei 3 garantias durante os dias restantes, que serão as vezes que poderei colher durante todo esse proceso.*

<br>

O resultado final da fórmula entregará a quantidade de vezes que é possível colher UMA lavoura nos DIAS RESTANTES da estação.

### Coeficiente de produção da Fruta Antiga

<p>A fórmula que determina a quantidade de colheitas da Fruta Antiga durante DUAS estações é dada por:</p>
<img alt="imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/945108072785936384/unknown.png">

Devido o tempo de colheita da Fruta Antiga, que é o maior tempo de crescimento do jogo, foi necessário descartar as demais fórmulas e criar uma específica. 

No exemplo acima está sendo considerado a reprodução da semente, que é de 7 dias, e os descontos possíveis da profissão e do solo foliar no tempo de colheita da Fruta Antiga. Vamos direto para a explicação:

Nesse caso específico, temos que pensar que, assim como os blocos no exemplo anterior, as estações são blocos que possuem blocos menores. Uma estação é um bloco maior que possui 28 blocos menores. Pensaremos que uma estação é a estação de crescimento da Fruta antiga e a outra estação é de colheita. Dois blocos maiores em questão.

Como o tempo de crescimento da Fruta Antiga é bem grande, ela ocupa os blocos menores de uma estação inteira, ou pelo menos, mais da metade dela.

Então a variável **diasPerdidos**, continua relacionando os 28 blocos menores da estação, mas não trabalha na forma de quantidade de dias RESTANTES da estação que ainda dá para trabalhar ativamente, como propõe a fórmula do exemplo anterior...

A variável **diasPerdidos** vai fazer uma relação diferente que indicará QUANTOS dias foram PERDIDOS com o tempo de crescimento da Fruta antiga em relação ao dia atual do fazendeiro.

Ou seja, a fórmula do exemplo anterior possui a limitação de não trabalhar com a quantidade de dias acima de 28, pois 28 é o número máximo que o usuário pode selecionar na tela "1º passo" na "Calculadora de lavouras. A variável **diasPerdidos* não possui essa limitação. Então suponhamos que:

<br>

*O fazendeiro está no dia 10 e o tempo de crescimento da Fruta antiga (considerando profissão e solo foliar) seja de 22 dias.*

*Então => (28 - 10 - 22) = -4*

*A relação acima é a diferença da quantidade de blocos menores totais presentes no bloco maior da estação de crescimento, o número de dias que o fazendeiro perdeu por estar plantando no dia em questão e o tempo de crescimento da Fruta antiga.*

*O resultado "-4" é perfeito! Pois não queremos a quantidade de dias restantes e sim a quantidade de dias totais que levam para a fruta crescer. Todo esse tempo de crescimento são os dias perdidos que o fazendeiro não colhe nada.*

*Para ser mais claro, o "-4" indica o número de dias que o tempo de crescimento "roubou" da estação seguinte (colheita), ou seja, passou-se 28 dias da estação de crescimento, mas o tempo de crescimento da Fruta antiga demandava mais 4 dias da próxima estação (colheita) para crescer totalmente*

*No segmento da fórmula **((28 + diasPerdidos) / 7) + 1)** a relação é semelhante à fórmula do exemplo anterior, pois indica a quantidade de dias RESTANTES que o fazendeiro terá na estação seguinte (colheita) ou nas duas estações (caso seja possível) em relação à estação (crescimento) anterior que carregava todo o tempo de crescimento da Fruta antiga.* 

*Por isso na fórmula **((28 + diasPerdidos) / 7) + 1)** o sinal da variável **diasPerdidos** é positivo. Se o sinal fosse negativo, ou seja, caso fosse uma subtração, o resultado "-4" inverteria o sinal e se tornaria "4", o que seria falso, pois o fazendeiro não ganhou 4 dias. Então ficaria:*

*((28 + (-4)) / 7) + 1) => ((28 -4) / 7) + 1) => (24 / 7) + 1 => 3,4 + 1 => 4,4*

*A soma "+1" na fórmula representa a primeira colheita após o crescimento total da Fruta antiga, pois a partir da primeira colheita a reprodução da Fruta antiga começará, e o coeficiente "3,4" indica a quantidade de vezes que o fazendeiro colherá a Fruta antiga pela REPRODUÇÃO da semente.*

*Para provar, o fazendeiro colheria nos dias: 4, 11, 18 e 25 da segunda estação (colheita)*

*Por outro lado, suponhamos que o fazendeiro está no dia 1 e o tempo de crescimento da Fruta antiga (considerando profissão e solo foliar) seja de 18 dias.*

*Então => (28 - 1 - 18) = 9*

*Voltaremos para a fórmula geral e, (28 + 9) = 37, ou seja, ao invés de perder 9 dias, o fazendeiro ganhou 9 dias. Na verdade ele deixou de perder 9 dias para o tempo de crescimento da Fruta antiga na estação de crescimento, e agora com esses 9 dias ele poderá colher a reprodução da Fruta antiga pelo menos 1 vez devido ao tempo de produção ser de 7 dias.*

*Então ficaria:*

*((28 + (9)) / 7) + 1) => ((28 +9) / 7) + 1) => (37 / 7) + 1 => 5,2 + 1 => 6,2*

*Para provar, o fazendeiro colheria nos dias: 19 e 26 da primeira estação (crescimento), 6, 13, 20 e 27 da segunda estação (colheita)*

<br>

O resultado final da fórmula entregará a quantidade de vezes que é possível colher UMA lavoura em DUAS estações.

<div align="center" text-align="center">
	
<hr width="300px">
	
</div>

## Faturamento e lucro

<p>A fórmula que determina a quantidade de colheitas durante uma estação é dada por:</p>
<img alt="imagem" src="https://cdn.discordapp.com/attachments/944392836445503529/945108072785936384/unknown.png">

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

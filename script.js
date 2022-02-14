/* ____________________________________________________________________________________________________ */

/* Função que calcula todas as variáveis */

function somar() {

  /* Criando Classes para os itens */

  class Sementes {

    constructor(nome, custoPierre, custoJoja, vendaNormal, vendaPrata, vendaOuro, vendaIridio, tempoColheita, tempoReproducao, chanceMaisFrutos, qtdColhida) {
        this.nome = nome
        this.custoPierre = custoPierre
        this.custoJoja = custoJoja
        this.vendaNormal = vendaNormal
        this.vendaPrata = vendaPrata
        this.vendaOuro = vendaOuro
        this.vendaIridio = vendaIridio
        this.tempoColheita = tempoColheita
        this.tempoReproducao = tempoReproducao
        this.chanceMaisFrutos = chanceMaisFrutos
        this.qtdColhida = qtdColhida

    }
    info() {

        console.log('Nome da semente...........: ' + this.nome)
        console.log('Custo da semente no Pierre: ' + this.custoPierre)
        console.log('Custo da semente na Joja..: ' + this.custoJoja)
        console.log('venda normal..............: ' + this.vendaNormal)
        console.log('Venda prata...............: ' + this.vendaPrata)
        console.log('Venda ouro................: ' + this.vendaOuro)
        console.log('Venda iridio..............: ' + this.vendaIridio)
        console.log('Tempo para colheita.......: ' + this.tempoColheita)
        console.log('Tempo para reprodução.....: ' + this.tempoReproducao)
        console.log('Chance mais frutos........: ' + this.chanceMaisFrutos)
        console.log('quantidade colhida........: ' + this.qtdColhida)

    }
    
  }

  /* ____________________________________________________________________________________________________ */

  /* Linkando o HTML */

  var espacoLavoura = window.document.querySelector('#espaco').value

  var diaAtual = window.document.querySelector('#inputGroupDay').value

  var profissao = window.document.querySelector('#inputGroupProfission1').value

  var profissao2 = window.document.querySelector('#inputGroupProfission2').value

  var sementeUsada = window.document.querySelector('#inputGroupSeed').value

  var nivelCultivo = window.document.querySelector('#inputGroupLevelCultivo').value

  var fertilizante = window.document.querySelector('#inputGroupFertilizante').value

  var soloRetentor = window.document.querySelector('#inputGroupRetentor').value

  var soloFoliar = window.document.querySelector('#inputGroupFoliar').value

  if (diaAtual == 'd1') {

    var diaAtualNumber = 1

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd2') {

    var diaAtualNumber = 2

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd3') {

    var diaAtualNumber = 3

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd4') {

    var diaAtualNumber = 4

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd5') {

    var diaAtualNumber = 5

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd6') {

    var diaAtualNumber = 6

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd7') {

    var diaAtualNumber = 7

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd8') {

    var diaAtualNumber = 8

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd9') {

    var diaAtualNumber = 9

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd10') {

    var diaAtualNumber = 10

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd11') {

    var diaAtualNumber = 11

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd12') {

    var diaAtualNumber = 12

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd13') {

    var diaAtualNumber = 13

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd14') {

    var diaAtualNumber = 14

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd15') {

    var diaAtualNumber = 15

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd16') {

    var diaAtualNumber = 16

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd17') {

    var diaAtualNumber = 17

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd18') {

    var diaAtualNumber = 18

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd19') {

    var diaAtualNumber = 19

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd20') {

    var diaAtualNumber = 20

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd21') {

    var diaAtualNumber = 21

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd22') {

    var diaAtualNumber = 22

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd23') {

    var diaAtualNumber = 23

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd24') {

    var diaAtualNumber = 24

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd25') {

    var diaAtualNumber = 25

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd26') {

    var diaAtualNumber = 26

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd27') {

    var diaAtualNumber = 27

    inputGroup2.innerHTML = diaAtualNumber

  } else if (diaAtual == 'd28') {

    var diaAtualNumber = 28

    inputGroup2.innerHTML = diaAtualNumber

  }

  if (espacoLavoura == '' || diaAtual == 'nda' || profissao =='nda' || profissao2 =='nda' ||
  sementeUsada =='nda'|| nivelCultivo =='nda' || fertilizante =='nda' || soloRetentor =='nda' ||  soloFoliar =='nda') {

    window.alert('Por favor, preencha todos os campos antes de continuar. script.js:309')

    document.location.reload(true);

  }

  /* Acessando elementos no html para impressão */

  var input1 = window.document.getElementById('inputGroup1')
  
  var input2 = window.document.getElementById('inputGroup2')
  
  var input3 = window.document.getElementById('inputGroup3')
  
  var input4 = window.document.getElementById('inputGroup4')
  
  var input5 = window.document.getElementById('inputGroup5')
  
  var input6 = window.document.getElementById('inputGroup6')
  
  var input7 = window.document.getElementById('inputGroup7')
  
  var input8 = window.document.getElementById('inputGroup8')
  
  var input9 = window.document.getElementById('inputGroup9')
  
  var input10 = window.document.getElementById('inputGroup10')

  var input11 = window.document.getElementById('inputGroup11')
  
  var input12 = window.document.getElementById('inputGroup12')
  
  var input13 = window.document.getElementById('inputGroup13')
  
  var input14 = window.document.getElementById('inputGroup14')
  
  var input15 = window.document.getElementById('inputGroup15')
  
  var input16 = window.document.getElementById('inputGroup16')
  
  var input17 = window.document.getElementById('inputGroup17')
  
  var input18 = window.document.getElementById('inputGroup18')
  
  var input19 = window.document.getElementById('inputGroup19')
  
  var input20 = window.document.getElementById('inputGroup20')

  var input21 = window.document.getElementById('inputGroup21')
  
  var input22 = window.document.getElementById('inputGroup22')
  
  var input23 = window.document.getElementById('inputGroup23')
  
  var input24 = window.document.getElementById('inputGroup24')
  
  var input25 = window.document.getElementById('inputGroup25')
  
  var input26 = window.document.getElementById('inputGroup26')
  
  var input27 = window.document.getElementById('inputGroup27')
  
  var input28 = window.document.getElementById('inputGroup28')
  
  var input29 = window.document.getElementById('inputGroup29')
  
  var input30 = window.document.getElementById('inputGroup30')

  var input31 = window.document.getElementById('inputGroup31')
  
  /* ____________________________________________________________________________________________________ */

  /* Criando objetos */

  /* Condições com cada escolha de semente */

  if (sementeUsada == 'abacaxi') {  

    var abacaxi = new Sementes('Abacaxi', 0, 0, 300, 375, 450, 600, 14, 7, 0, 1)  /* Abacaxi */

    var nome = abacaxi.nome
    var custoPierre = abacaxi.custoPierre
    var custoJoja = abacaxi.custoJoja
    var vendaNormal = abacaxi.vendaNormal
    var vendaPrata = abacaxi.vendaPrata
    var vendaOuro = abacaxi.vendaOuro
    var vendaIridio = abacaxi.vendaIridio
    var tempoColheita = abacaxi.tempoColheita
    var tempoReproducao = abacaxi.tempoReproducao
    var chanceMaisFrutos = abacaxi.chanceMaisFrutos
    var qtdColhida = abacaxi.qtdColhida
  
  } else if (sementeUsada == 'abobora') {

    var abobora = new Sementes('Abóbora', 100, 125, 320, 400, 480, 640, 13, 0, 0, 1) /* Abóbora */

    var nome = abobora.nome
    var custoPierre = abobora.custoPierre
    var custoJoja = abobora.custoJoja
    var vendaNormal = abobora.vendaNormal
    var vendaPrata = abobora.vendaPrata
    var vendaOuro = abobora.vendaOuro
    var vendaIridio = abobora.vendaIridio
    var tempoColheita = abobora.tempoColheita
    var tempoReproducao = abobora.tempoReproducao
    var chanceMaisFrutos = abobora.chanceMaisFrutos
    var qtdColhida = abobora.qtdColhida

    abobora.info()

  } else if (sementeUsada == 'alcachofra') {

    var alcachofra = new Sementes('Alcachofra', 30, 0, 160, 200, 240, 320, 8, 0, 0, 1) /* Alcachofra */

    var nome = alcachofra.nome
    var custoPierre = alcachofra.custoPierre
    var custoJoja = alcachofra.custoJoja
    var vendaNormal = alcachofra.vendaNormal
    var vendaPrata = alcachofra.vendaPrata
    var vendaOuro = alcachofra.vendaOuro
    var vendaIridio = alcachofra.vendaIridio
    var tempoColheita = alcachofra.tempoColheita
    var tempoReproducao = alcachofra.tempoReproducao
    var chanceMaisFrutos = alcachofra.chanceMaisFrutos
    var qtdColhida = alcachofra.qtdColhida

    alcachofra.info()

  } else if (sementeUsada == 'amaranto') {

    var amaranto = new Sementes('Amaranto', 70, 87, 150, 187, 225, 300, 7, 0, 0, 1) /* Amaranto */

    var nome = amaranto.nome
    var custoPierre = amaranto.custoPierre
    var custoJoja = amaranto.custoJoja
    var vendaNormal = amaranto.vendaNormal
    var vendaPrata = amaranto.vendaPrata
    var vendaOuro = amaranto.vendaOuro
    var vendaIridio = amaranto.vendaIridio
    var tempoColheita = amaranto.tempoColheita
    var tempoReproducao = amaranto.tempoReproducao
    var chanceMaisFrutos = amaranto.chanceMaisFrutos
    var qtdColhida = amaranto.qtdColhida

    amaranto.info()

  } else if (sementeUsada == 'alho') {

    var alho = new Sementes('Alho', 40, 0, 60, 75, 90, 120, 4, 0, 0, 1) /* Alho */

    var nome = alho.nome
    var custoPierre = alho.custoPierre
    var custoJoja = alho.custoJoja
    var vendaNormal = alho.vendaNormal
    var vendaPrata = alho.vendaPrata
    var vendaOuro = alho.vendaOuro
    var vendaIridio = alho.vendaIridio
    var tempoColheita = alho.tempoColheita
    var tempoReproducao = alho.tempoReproducao
    var chanceMaisFrutos = alho.chanceMaisFrutos
    var qtdColhida = alho.qtdColhida

    alho.info()

  } else if (sementeUsada == 'batata') {

    var batata = new Sementes('Batata', 50, 62, 80, 100, 120, 160, 6, 0, 5, 1) /* Batata */

    var nome = batata.nome
    var custoPierre = batata.custoPierre
    var custoJoja = batata.custoJoja
    var vendaNormal = batata.vendaNormal
    var vendaPrata = batata.vendaPrata
    var vendaOuro = batata.vendaOuro
    var vendaIridio = batata.vendaIridio
    var tempoColheita = batata.tempoColheita
    var tempoReproducao = batata.tempoReproducao
    var chanceMaisFrutos = batata.chanceMaisFrutos
    var qtdColhida = batata.qtdColhida

    batata.info()

  } else if (sementeUsada == 'berinjela') {

    var berinjela = new Sementes('berinjela', 20, 25, 60, 75, 90, 120, 5, 5, 0, 1) /* Beringela */

    var nome = berinjela.nome
    var custoPierre = berinjela.custoPierre
    var custoJoja = berinjela.custoJoja
    var vendaNormal = berinjela.vendaNormal
    var vendaPrata = berinjela.vendaPrata
    var vendaOuro = berinjela.vendaOuro
    var vendaIridio = berinjela.vendaIridio
    var tempoColheita = berinjela.tempoColheita
    var tempoReproducao = berinjela.tempoReproducao
    var chanceMaisFrutos = berinjela.chanceMaisFrutos
    var qtdColhida = berinjela.qtdColhida

    berinjela.info()

  } else if (sementeUsada == 'beterraba') {

    var beterraba = new Sementes('Beterraba', 20, 0, 100, 125, 150, 200, 6, 0, 0, 1) /* Beterraba */

    var nome = beterraba.nome
    var custoPierre = beterraba.custoPierre
    var custoJoja = beterraba.custoJoja
    var vendaNormal = beterraba.vendaNormal
    var vendaPrata = beterraba.vendaPrata
    var vendaOuro = beterraba.vendaOuro
    var vendaIridio = beterraba.vendaIridio
    var tempoColheita = beterraba.tempoColheita
    var tempoReproducao = beterraba.tempoReproducao
    var chanceMaisFrutos = beterraba.chanceMaisFrutos
    var qtdColhida = beterraba.qtdColhida

    beterraba.info()

  } else if (sementeUsada == 'carambola') {

    var carambola = new Sementes('Carambola', 400, 0, 750, 937, 1125, 1500, 12, 0, 0, 1) /* Carambola */

    var nome = carambola.nome
    var custoPierre = carambola.custoPierre
    var custoJoja = carambola.custoJoja
    var vendaNormal = carambola.vendaNormal
    var vendaPrata = carambola.vendaPrata
    var vendaOuro = carambola.vendaOuro
    var vendaIridio = carambola.vendaIridio
    var tempoColheita = carambola.tempoColheita
    var tempoReproducao = carambola.tempoReproducao
    var chanceMaisFrutos = carambola.chanceMaisFrutos
    var qtdColhida = carambola.qtdColhida

    carambola.info()

  } else if (sementeUsada == 'chirivia') {

    var chirivia = new Sementes('Chirívia', 20, 25, 35, 43, 52, 70, 4, 0, 0, 1) /* Chirivia */

    var nome = chirivia.nome
    var custoPierre = chirivia.custoPierre
    var custoJoja = chirivia.custoJoja
    var vendaNormal = chirivia.vendaNormal
    var vendaPrata = chirivia.vendaPrata
    var vendaOuro = chirivia.vendaOuro
    var vendaIridio = chirivia.vendaIridio
    var tempoColheita = chirivia.tempoColheita
    var tempoReproducao = chirivia.tempoReproducao
    var chanceMaisFrutos = chirivia.chanceMaisFrutos
    var qtdColhida = chirivia.qtdColhida

    chirivia.info()

  } else if (sementeUsada == 'couve') {

    var couve = new Sementes('Couve', 70, 87, 110, 137, 165, 220, 6, 0, 0, 1) /* Couve */

    var nome = couve.nome
    var custoPierre = couve.custoPierre
    var custoJoja = couve.custoJoja
    var vendaNormal = couve.vendaNormal
    var vendaPrata = couve.vendaPrata
    var vendaOuro = couve.vendaOuro
    var vendaIridio = couve.vendaIridio
    var tempoColheita = couve.tempoColheita
    var tempoReproducao = couve.tempoReproducao
    var chanceMaisFrutos = couve.chanceMaisFrutos
    var qtdColhida = couve.qtdColhida

    couve.info()

  } else if (sementeUsada == 'couveChinesa') {

    var couveChinesa = new Sementes('Couve chinesa', 50, 62, 80, 100, 120, 160, 4, 0, 0, 1) /* Couve chinesa */

    var nome = couveChinesa.nome
    var custoPierre = couveChinesa.custoPierre
    var custoJoja = couveChinesa.custoJoja
    var vendaNormal = couveChinesa.vendaNormal
    var vendaPrata = couveChinesa.vendaPrata
    var vendaOuro = couveChinesa.vendaOuro
    var vendaIridio = couveChinesa.vendaIridio
    var tempoColheita = couveChinesa.tempoColheita
    var tempoReproducao = couveChinesa.tempoReproducao
    var chanceMaisFrutos = couveChinesa.chanceMaisFrutos
    var qtdColhida = couveChinesa.qtdColhida

    couveChinesa.info()

  } else if (sementeUsada == 'couveFlor') {

    var couveFlor = new Sementes('Couve flor', 80, 100, 175, 218, 262, 350, 12, 0, 0, 1) /* Couve flor */

    var nome = couveFlor.nome
    var custoPierre = couveFlor.custoPierre
    var custoJoja = couveFlor.custoJoja
    var vendaNormal = couveFlor.vendaNormal
    var vendaPrata = couveFlor.vendaPrata
    var vendaOuro = couveFlor.vendaOuro
    var vendaIridio = couveFlor.vendaIridio
    var tempoColheita = couveFlor.tempoColheita
    var tempoReproducao = couveFlor.tempoReproducao
    var chanceMaisFrutos = couveFlor.chanceMaisFrutos
    var qtdColhida = couveFlor.qtdColhida

    couveFlor.info()

  } else if (sementeUsada == 'frutaAntiga') {

    var frutaAntiga = new Sementes('Fruta antiga', 550, 0, 550, 687, 825, 1100, 28, 7, 0, 1) /* Fruta antiga */

    var nome = frutaAntiga.nome
    var custoPierre = frutaAntiga.custoPierre
    var custoJoja = frutaAntiga.custoJoja
    var vendaNormal = frutaAntiga.vendaNormal
    var vendaPrata = frutaAntiga.vendaPrata
    var vendaOuro = frutaAntiga.vendaOuro
    var vendaIridio = frutaAntiga.vendaIridio
    var tempoColheita = frutaAntiga.tempoColheita
    var tempoReproducao = frutaAntiga.tempoReproducao
    var chanceMaisFrutos = frutaAntiga.chanceMaisFrutos
    var qtdColhida = frutaAntiga.qtdColhida

    frutaAntiga.info()

  } else if (sementeUsada == 'frutoCacto') {

    var frutoCacto = new Sementes('Fruto do cacto', 150, 0, 75, 93, 112, 150, 12, 3, 0, 1) /* Fruto do cacto */

    var nome = frutoCacto.nome
    var custoPierre = frutoCacto.custoPierre
    var custoJoja = frutoCacto.custoJoja
    var vendaNormal = frutoCacto.vendaNormal
    var vendaPrata = frutoCacto.vendaPrata
    var vendaOuro = frutoCacto.vendaOuro
    var vendaIridio = frutoCacto.vendaIridio
    var tempoColheita = frutoCacto.tempoColheita
    var tempoReproducao = frutoCacto.tempoReproducao
    var chanceMaisFrutos = frutoCacto.chanceMaisFrutos
    var qtdColhida = frutoCacto.qtdColhida

    frutoCacto.info()
    
  } else if (sementeUsada == 'girassol') {

    var girassol = new Sementes('Girassol', 200, 125, 80, 100, 120, 160, 8, 0, 0, 1) /* Girassol */

    var nome = girassol.nome
    var custoPierre = girassol.custoPierre
    var custoJoja = girassol.custoJoja
    var vendaNormal = girassol.vendaNormal
    var vendaPrata = girassol.vendaPrata
    var vendaOuro = girassol.vendaOuro
    var vendaIridio = girassol.vendaIridio
    var tempoColheita = girassol.tempoColheita
    var tempoReproducao = girassol.tempoReproducao
    var chanceMaisFrutos = girassol.chanceMaisFrutos
    var qtdColhida = girassol.qtdColhida

    girassol.info()

  } else if (sementeUsada == 'inhame') {

    var inhame = new Sementes('Inhame', 60, 75, 160, 200, 240, 320, 10, 0, 0, 1) /* Inhame */ 

    var nome = inhame.nome
    var custoPierre = inhame.custoPierre
    var custoJoja = inhame.custoJoja
    var vendaNormal = inhame.vendaNormal
    var vendaPrata = inhame.vendaPrata
    var vendaOuro = inhame.vendaOuro
    var vendaIridio = inhame.vendaIridio
    var tempoColheita = inhame.tempoColheita
    var tempoReproducao = inhame.tempoReproducao
    var chanceMaisFrutos = inhame.chanceMaisFrutos
    var qtdColhida = inhame.qtdColhida

    inhame.info()
  
  } else if (sementeUsada == 'jasmimAzul') {

    var jasmimAzul = new Sementes('Jasmim azul', 30, 37, 50, 62, 75, 100, 7, 0, 0, 1) /* Jasmim azul */
  
    var nome = jasmimAzul.nome
    var custoPierre = jasmimAzul.custoPierre
    var custoJoja = jasmimAzul.custoJoja
    var vendaNormal = jasmimAzul.vendaNormal
    var vendaPrata = jasmimAzul.vendaPrata
    var vendaOuro = jasmimAzul.vendaOuro
    var vendaIridio = jasmimAzul.vendaIridio
    var tempoColheita = jasmimAzul.tempoColheita
    var tempoReproducao = jasmimAzul.tempoReproducao
    var chanceMaisFrutos = jasmimAzul.chanceMaisFrutos
    var qtdColhida = jasmimAzul.qtdColhida

    jasmimAzul.info()

  } else if (sementeUsada == 'lupulo') {

    var lupulo = new Sementes('Lúpulo', 60, 75, 25, 31, 37, 50, 11, 0, 1, 1) /* Lupulo */

    var nome = lupulo.nome
    var custoPierre = lupulo.custoPierre
    var custoJoja = lupulo.custoJoja
    var vendaNormal = lupulo.vendaNormal
    var vendaPrata = lupulo.vendaPrata
    var vendaOuro = lupulo.vendaOuro
    var vendaIridio = lupulo.vendaIridio
    var tempoColheita = lupulo.tempoColheita
    var tempoReproducao = lupulo.tempoReproducao
    var chanceMaisFrutos = lupulo.chanceMaisFrutos
    var qtdColhida = lupulo.qtdColhida

    lupulo.info()

  } else if (sementeUsada == 'melao') {

    var melao = new Sementes('Melão', 80, 100, 250, 312, 375, 500, 12, 0, 0, 1) /* Melao */
    
    var nome = melao.nome
    var custoPierre = melao.custoPierre
    var custoJoja = melao.custoJoja
    var vendaNormal = melao.vendaNormal
    var vendaPrata = melao.vendaPrata
    var vendaOuro = melao.vendaOuro
    var vendaIridio = melao.vendaIridio
    var tempoColheita = melao.tempoColheita
    var tempoReproducao = melao.tempoReproducao
    var chanceMaisFrutos = melao.chanceMaisFrutos
    var qtdColhida = melao.qtdColhida

    melao.info()

  } else if (sementeUsada == 'micanga') {

    var micanga = new Sementes('Flor de Miçanga', 50, 62, 90, 112, 135, 180, 8, 0, 0, 1) /* Flor de miçanga */

    var nome = micanga.nome
    var custoPierre = micanga.custoPierre
    var custoJoja = micanga.custoJoja
    var vendaNormal = micanga.vendaNormal
    var vendaPrata = micanga.vendaPrata
    var vendaOuro = micanga.vendaOuro
    var vendaIridio = micanga.vendaIridio
    var tempoColheita = micanga.tempoColheita
    var tempoReproducao = micanga.tempoReproducao
    var chanceMaisFrutos = micanga.chanceMaisFrutos
    var qtdColhida = micanga.qtdColhida

    micanga.info()

  } else if (sementeUsada == 'milho') {

    var milho = new Sementes('Milho', 150, 187, 50, 62, 75, 100, 14, 4, 0, 1) /* Milho */

    var nome = milho.nome
    var custoPierre = milho.custoPierre
    var custoJoja = milho.custoJoja
    var vendaNormal = milho.vendaNormal
    var vendaPrata = milho.vendaPrata
    var vendaOuro = milho.vendaOuro
    var vendaIridio = milho.vendaIridio
    var tempoColheita = milho.tempoColheita
    var tempoReproducao = milho.tempoReproducao
    var chanceMaisFrutos = milho.chanceMaisFrutos
    var qtdColhida = milho.qtdColhida

    milho.info()

  } else if (sementeUsada == 'mirtilo') {

    var mirtilo = new Sementes('Mirtilo', 80, 0, 50, 62, 75, 100, 13, 4, 5, 3) /* Mirtilo */

    var nome = mirtilo.nome
    var custoPierre = mirtilo.custoPierre
    var custoJoja = mirtilo.custoJoja
    var vendaNormal = mirtilo.vendaNormal
    var vendaPrata = mirtilo.vendaPrata
    var vendaOuro = mirtilo.vendaOuro
    var vendaIridio = mirtilo.vendaIridio
    var tempoColheita = mirtilo.tempoColheita
    var tempoReproducao = mirtilo.tempoReproducao
    var chanceMaisFrutos = mirtilo.chanceMaisFrutos
    var qtdColhida = mirtilo.qtdColhida

    mirtilo.info()

  } else if (sementeUsada == 'morango') {

    var morango = new Sementes('Morango', 100, 0, 120, 150, 180, 240, 8, 4, 5, 1) /* Morango */

    var nome = morango.nome
    var custoPierre = morango.custoPierre
    var custoJoja = morango.custoJoja
    var vendaNormal = morango.vendaNormal
    var vendaPrata = morango.vendaPrata
    var vendaOuro = morango.vendaOuro
    var vendaIridio = morango.vendaIridio
    var tempoColheita = morango.tempoColheita
    var tempoReproducao = morango.tempoReproducao
    var chanceMaisFrutos = morango.chanceMaisFrutos
    var qtdColhida = morango.qtdColhida

    morango.info()

  } else if (sementeUsada == 'oxicoco') {

  var oxicoco = new Sementes('Oxicoco', 240, 300, 75, 93, 112, 150, 7, 5, 3, 2) /* Oxicoco */

  var nome = oxicoco.nome
  var custoPierre = oxicoco.custoPierre
  var custoJoja = oxicoco.custoJoja
  var vendaNormal = oxicoco.vendaNormal
  var vendaPrata = oxicoco.vendaPrata
  var vendaOuro = oxicoco.vendaOuro
  var vendaIridio = oxicoco.vendaIridio
  var tempoColheita = oxicoco.tempoColheita
  var tempoReproducao = oxicoco.tempoReproducao
  var chanceMaisFrutos = oxicoco.chanceMaisFrutos
  var qtdColhida = oxicoco.qtdColhida

  oxicoco.info()

  } else if (sementeUsada == 'papoula') {

    var papoula = new Sementes('Papoula', 100, 125, 140, 175, 210, 280, 7, 0, 0, 1) /* Papoula */
    
    var nome = papoula.nome
    var custoPierre = papoula.custoPierre
    var custoJoja = papoula.custoJoja
    var vendaNormal = papoula.vendaNormal
    var vendaPrata = papoula.vendaPrata
    var vendaOuro = papoula.vendaOuro
    var vendaIridio = papoula.vendaIridio
    var tempoColheita = papoula.tempoColheita
    var tempoReproducao = papoula.tempoReproducao
    var chanceMaisFrutos = papoula.chanceMaisFrutos
    var qtdColhida = papoula.qtdColhida

    papoula.info()

  } else if (sementeUsada == 'pimenta') {

    var pimenta = new Sementes('Pimenta', 40, 50, 40, 50, 60, 80, 5, 3, 5, 1) /* Pimenta */

    var nome = pimenta.nome
    var custoPierre = pimenta.custoPierre
    var custoJoja = pimenta.custoJoja
    var vendaNormal = pimenta.vendaNormal
    var vendaPrata = pimenta.vendaPrata
    var vendaOuro = pimenta.vendaOuro
    var vendaIridio = pimenta.vendaIridio
    var tempoColheita = pimenta.tempoColheita
    var tempoReproducao = pimenta.tempoReproducao
    var chanceMaisFrutos = pimenta.chanceMaisFrutos
    var qtdColhida = pimenta.qtdColhida

    pimenta.info()

  } else if (sementeUsada == 'rabanete') {

    var rabanete = new Sementes('Rabanete', 40, 50, 90, 112, 135, 180, 6, 0, 0, 1) /* Rabanete */

    var nome = rabanete.nome
    var custoPierre = rabanete.custoPierre
    var custoJoja = rabanete.custoJoja
    var vendaNormal = rabanete.vendaNormal
    var vendaPrata = rabanete.vendaPrata
    var vendaOuro = rabanete.vendaOuro
    var vendaIridio = rabanete.vendaIridio
    var tempoColheita = rabanete.tempoColheita
    var tempoReproducao = rabanete.tempoReproducao
    var chanceMaisFrutos = rabanete.chanceMaisFrutos
    var qtdColhida = rabanete.qtdColhida

    rabanete.info()

  } else if (sementeUsada == 'rosaFada') {

   var rosaFada = new Sementes('Rosa de Fada', 200, 250, 290, 362, 435, 580, 12, 0, 0, 1) /* Rosa de fada */

   var nome = rosaFada.nome
   var custoPierre = rosaFada.custoPierre
   var custoJoja = rosaFada.custoJoja
   var vendaNormal = rosaFada.vendaNormal
   var vendaPrata = rosaFada.vendaPrata
   var vendaOuro = rosaFada.vendaOuro
   var vendaIridio = rosaFada.vendaIridio
   var tempoColheita = rosaFada.tempoColheita
   var tempoReproducao = rosaFada.tempoReproducao
   var chanceMaisFrutos = rosaFada.chanceMaisFrutos
   var qtdColhida = rosaFada.qtdColhida

   rosaFada.info()

  } else if (sementeUsada == 'ruibardo') {

    var ruibardo = new Sementes('Ruibardo', 100, 0, 220, 275, 330, 440, 13, 0, 0, 1) /* Ruibardo */

    var nome = ruibardo.nome
    var custoPierre = ruibardo.custoPierre
    var custoJoja = ruibardo.custoJoja
    var vendaNormal = ruibardo.vendaNormal
    var vendaPrata = ruibardo.vendaPrata
    var vendaOuro = ruibardo.vendaOuro
    var vendaIridio = ruibardo.vendaIridio
    var tempoColheita = ruibardo.tempoColheita
    var tempoReproducao = ruibardo.tempoReproducao
    var chanceMaisFrutos = ruibardo.chanceMaisFrutos
    var qtdColhida = ruibardo.qtdColhida

    ruibardo.info()

  } else if (sementeUsada == 'tomate') {

    var tomate = new Sementes('Tomate', 50, 62, 60, 75, 90, 120, 11, 4, 0, 1) /* Tomate */

    var nome = tomate.nome
    var custoPierre = tomate.custoPierre
    var custoJoja = tomate.custoJoja
    var vendaNormal = tomate.vendaNormal
    var vendaPrata = tomate.vendaPrata
    var vendaOuro = tomate.vendaOuro
    var vendaIridio = tomate.vendaIridio
    var tempoColheita = tomate.tempoColheita
    var tempoReproducao = tomate.tempoReproducao
    var chanceMaisFrutos = tomate.chanceMaisFrutos
    var qtdColhida = tomate.qtdColhida

    tomate.info()

  } else if (sementeUsada == 'trigo') {

    var trigo = new Sementes('Trigo', 10, 12, 40, 50, 60, 80, 4, 0, 0, 1) /* Trigo */

    var nome = trigo.nome
    var custoPierre = trigo.custoPierre
    var custoJoja = trigo.custoJoja
    var vendaNormal = trigo.vendaNormal
    var vendaPrata = trigo.vendaPrata
    var vendaOuro = trigo.vendaOuro
    var vendaIridio = trigo.vendaIridio
    var tempoColheita = trigo.tempoColheita
    var tempoReproducao = trigo.tempoReproducao
    var chanceMaisFrutos = trigo.chanceMaisFrutos
    var qtdColhida = trigo.qtdColhida

    trigo.info()

  } else if (sementeUsada == 'uva') {

    var uva = new Sementes('Uva', 60, 75, 80, 100, 120, 160, 10, 3, 0, 1) /* Uva */

    var nome = uva.nome
    var custoPierre = uva.custoPierre
    var custoJoja = uva.custoJoja
    var vendaNormal = uva.vendaNormal
    var vendaPrata = uva.vendaPrata
    var vendaOuro = uva.vendaOuro
    var vendaIridio = uva.vendaIridio
    var tempoColheita = uva.tempoColheita
    var tempoReproducao = uva.tempoReproducao
    var chanceMaisFrutos = uva.chanceMaisFrutos
    var qtdColhida = uva.qtdColhida

    uva.info()

  } else if (sementeUsada == 'vagem')   {

    var vagem = new Sementes('Feijão', 60, 75, 40, 50, 60, 80, 10, 3, 0, 1) /* Vagem */

    var nome = vagem.nome
    var custoPierre = vagem.custoPierre
    var custoJoja = vagem.custoJoja
    var vendaNormal = vagem.vendaNormal
    var vendaPrata = vagem.vendaPrata
    var vendaOuro = vagem.vendaOuro
    var vendaIridio = vagem.vendaIridio
    var tempoColheita = vagem.tempoColheita
    var tempoReproducao = vagem.tempoReproducao
    var chanceMaisFrutos = vagem.chanceMaisFrutos
    var qtdColhida = vagem.qtdColhida

    vagem.info()

}

  console.log('----------------------')

/* ____________________________________________________________________________________________________ */

  /* Condições com o nível de cultivo e fertilizante */

  console.log('Nível de cultivo e fertilizante')

  if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '0') { // NÍVEL 0

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 97/100 // Normal

          var p2 = 2/100 // Prata

          var p3 = 1/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 88/100 // Normal

          var p2 = 8/100 // Prata

          var p3 = 4/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 78/100 // Normal

          var p2 = 14/100 // Prata

          var p3 = 8/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          break

      case fertilizante = '3': // Com fertilizante premium

          var p1 = 66/100 // Normal

          var p2 = 19/100 // Prata

          var p3 = 10/100 // Ouro

          var p4 = 6/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          break

      default:

        window.alert('Algo deu errado. script.js:987')

  }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '1') { // NÍVEL 1

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 91/100 // Normal

          var p2 = 6/100 // Prata

          var p3 = 3/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 77/100 // Normal

          var p2 = 15/100 // Prata

          var p3 = 8/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)
        
          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 64/100 // Normal

          var p2 = 23/100 // Prata

          var p3 = 13/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 48/100 // Normal

          var p2 = 27/100 // Prata

          var p3 = 16/100 // Ouro

          var p4 = 9/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1053')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '2') { // NÍVEL 21

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 85/100 // Normal

          var p2 = 10/100 // Prata

          var p3 = 5/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 68/100 // Normal

          var p2 = 20/100 // Prata

          var p3 = 12/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 52/100 // Normal

          var p2 = 30/100 // Prata

          var p3 = 18/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 33/100 // Normal

          var p2 = 33/100 // Prata

          var p3 = 22/100 // Ouro

          var p4 = 13/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1123')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '3') { // NÍVEL 3

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 80/100 // Normal

          var p2 = 13/100 // Prata

          var p3 = 7/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 59/100 // Normal

          var p2 = 26/100 // Prata

          var p3 = 15/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 40/100 // Normal

          var p2 = 36/100 // Prata

          var p3 = 24/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 21/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 27/100 // Ouro

          var p4 = 16/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1195')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '4') { // NÍVEL 4

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 75/100 // Normal

          var p2 = 16/100 // Prata

          var p3 = 9/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 50/100 // Normal

          var p2 = 31/100 // Prata

          var p3 = 19/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 30/100 // Normal

          var p2 = 41/100 // Prata

          var p3 = 29/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 12/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 31/100 // Ouro

          var p4 = 20/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1267')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '5') { // NÍVEL 5

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 69/100 // Normal

          var p2 = 20/100 // Prata

          var p3 = 11/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
            
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 42/100 // Normal

          var p2 = 35/100 // Prata

          var p3 = 23/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 21/100 // Normal

          var p2 = 45/100 // Prata

          var p3 = 34/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 10/100 // Normal

          var p2 = 31/100 // Prata

          var p3 = 35/100 // Ouro

          var p4 = 23/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1339')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '6') { // NÍVEL 6

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 64/100 // Normal

          var p2 = 23/100 // Prata

          var p3 = 13/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 35/100 // Normal

          var p2 = 39/100 // Prata

          var p3 = 26/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 15/100 // Normal

          var p2 = 45/100 // Prata

          var p3 = 40/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 9/100 // Normal

          var p2 = 26/100 // Prata

          var p3 = 39/100 // Ouro

          var p4 = 27/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1411')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '7') { // NÍVEL 7

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 60/100 // Normal

          var p2 = 25/100 // Prata

          var p3 = 15/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 28/100 // Normal

          var p2 = 42/100 // Prata

          var p3 = 30/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 14/100 // Normal

          var p2 = 41/100 // Prata

          var p3 = 45/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 7/100 // Normal

          var p2 = 21/100 // Prata

          var p3 = 42/100 // Ouro

          var p4 = 30/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1483')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '8') { // NÍVEL 8

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 55/100 // Normal

          var p2 = 28/100 // Prata

          var p3 = 17/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 22/100 // Normal

          var p2 = 44/100 // Prata

          var p3 = 34/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 13/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 50/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 5/100 // Normal

          var p2 = 16/100 // Prata

          var p3 = 45/100 // Ouro

          var p4 = 34/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1555')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '9') { // NÍVEL 9

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 50/100 // Normal

          var p2 = 31/100 // Prata

          var p3 = 19/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 16/100 // Normal

          var p2 = 47/100 // Prata

          var p3 = 37/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 11/100 // Normal

          var p2 = 33/100 // Prata

          var p3 = 56/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 4/100 // Normal

          var p2 = 12/100 // Prata

          var p3 = 47/100 // Ouro

          var p4 = 37/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1627')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '10') { // NÍVEL 10

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 46/100 // Normal

          var p2 = 33/100 // Prata

          var p3 = 21/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 15/100 // Normal

          var p2 = 44/100 // Prata

          var p3 = 41/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 10/100 // Normal

          var p2 = 29/100 // Prata

          var p3 = 61/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 3/100 // Normal

          var p2 = 8/100 // Prata

          var p3 = 48/100 // Ouro

          var p4 = 41/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1699')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '11') { // NÍVEL 11

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 42/100 // Normal

          var p2 = 35/100 // Prata

          var p3 = 23/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 14/100 // Normal

          var p2 = 41/100 // Prata

          var p3 = 45/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 9/100 // Normal

          var p2 = 25/100 // Prata

          var p3 = 66/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 2/100 // Normal

          var p2 = 5/100 // Prata

          var p3 = 49/100 // Ouro

          var p4 = 44/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1771')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '12') { // NÍVEL 12

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 38/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 25/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 13/100 // Normal

          var p2 = 39/100 // Prata

          var p3 = 48/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 7/100 // Normal

          var p2 = 21/100 // Prata

          var p3 = 72/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 1/100 // Normal

          var p2 = 2/100 // Prata

          var p3 = 50/100 // Ouro

          var p4 = 48/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1843')

      }

  } else if (sementeUsada != 'mirtilo' && sementeUsada != 'oxicoco' && nivelCultivo == '13') { // NÍVEL 13

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 34/100 // Normal

          var p2 = 39/100 // Prata

          var p3 = 27/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 12/100 // Normal

          var p2 = 36/100 // Prata

          var p3 = 52/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 6/100 // Normal

          var p2 = 17/100 // Prata

          var p3 = 77/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * qtdColhida) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 0 // Normal

          var p2 = 0 // Prata

          var p3 = 49/100 // Ouro

          var p4 = 51/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:1915')

      }

  }

  console.log('----------------------')

/* ____________________________________________________________________________________________________ */

  /* Condições com o Mirtilo */

  if (sementeUsada == 'mirtilo' && nivelCultivo == '0') {

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 97/100 // Normal

          var p2 = 2/100 // Prata

          var p3 = 1/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 88/100 // Normal

          var p2 = 8/100 // Prata

          var p3 = 4/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 78/100 // Normal

          var p2 = 14/100 // Prata

          var p3 = 8/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          break

      case fertilizante = '3': // Com fertilizante premium

          var p1 = 66/100 // Normal

          var p2 = 19/100 // Prata

          var p3 = 10/100 // Ouro

          var p4 = 6/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          break

      default:

        window.alert('Algo deu errado. script.js:1996')

  }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '1') { // NÍVEL 1

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 91/100 // Normal

          var p2 = 6/100 // Prata

          var p3 = 3/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 77/100 // Normal

          var p2 = 15/100 // Prata

          var p3 = 8/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)
        
          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 64/100 // Normal

          var p2 = 23/100 // Prata

          var p3 = 13/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 48/100 // Normal

          var p2 = 27/100 // Prata

          var p3 = 16/100 // Ouro

          var p4 = 9/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2060')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '2') { // NÍVEL 2

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 85/100 // Normal

          var p2 = 10/100 // Prata

          var p3 = 5/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 68/100 // Normal

          var p2 = 20/100 // Prata

          var p3 = 12/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 52/100 // Normal

          var p2 = 30/100 // Prata

          var p3 = 18/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 33/100 // Normal

          var p2 = 33/100 // Prata

          var p3 = 22/100 // Ouro

          var p4 = 13/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2132')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '3') { // NÍVEL 3

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 80/100 // Normal

          var p2 = 13/100 // Prata

          var p3 = 7/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 59/100 // Normal

          var p2 = 26/100 // Prata

          var p3 = 15/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 40/100 // Normal

          var p2 = 36/100 // Prata

          var p3 = 24/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 21/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 27/100 // Ouro

          var p4 = 16/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2204')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '4') { // NÍVEL 4

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 75/100 // Normal

          var p2 = 16/100 // Prata

          var p3 = 9/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 50/100 // Normal

          var p2 = 31/100 // Prata

          var p3 = 19/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 30/100 // Normal

          var p2 = 41/100 // Prata

          var p3 = 29/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 12/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 31/100 // Ouro

          var p4 = 20/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2276')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '5') { // NÍVEL 5

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 69/100 // Normal

          var p2 = 20/100 // Prata

          var p3 = 11/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
            
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 42/100 // Normal

          var p2 = 35/100 // Prata

          var p3 = 23/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 21/100 // Normal

          var p2 = 45/100 // Prata

          var p3 = 34/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 10/100 // Normal

          var p2 = 31/100 // Prata

          var p3 = 35/100 // Ouro

          var p4 = 23/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2348')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '6') { // NÍVEL 6

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 64/100 // Normal

          var p2 = 23/100 // Prata

          var p3 = 13/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 35/100 // Normal

          var p2 = 39/100 // Prata

          var p3 = 26/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 15/100 // Normal

          var p2 = 45/100 // Prata

          var p3 = 40/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 9/100 // Normal

          var p2 = 26/100 // Prata

          var p3 = 39/100 // Ouro

          var p4 = 27/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2420')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '7') { // NÍVEL 7

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 60/100 // Normal

          var p2 = 25/100 // Prata

          var p3 = 15/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 28/100 // Normal

          var p2 = 42/100 // Prata

          var p3 = 30/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 14/100 // Normal

          var p2 = 41/100 // Prata

          var p3 = 45/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 7/100 // Normal

          var p2 = 21/100 // Prata

          var p3 = 42/100 // Ouro

          var p4 = 30/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2492')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '8') { // NÍVEL 8

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 55/100 // Normal

          var p2 = 28/100 // Prata

          var p3 = 17/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 22/100 // Normal

          var p2 = 44/100 // Prata

          var p3 = 34/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 13/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 50/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 5/100 // Normal

          var p2 = 16/100 // Prata

          var p3 = 45/100 // Ouro

          var p4 = 34/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2564')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '9') { // NÍVEL 9

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 50/100 // Normal

          var p2 = 31/100 // Prata

          var p3 = 19/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 16/100 // Normal

          var p2 = 47/100 // Prata

          var p3 = 37/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 11/100 // Normal

          var p2 = 33/100 // Prata

          var p3 = 56/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 4/100 // Normal

          var p2 = 12/100 // Prata

          var p3 = 47/100 // Ouro

          var p4 = 37/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2636')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '10') { // NÍVEL 10

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 46/100 // Normal

          var p2 = 33/100 // Prata

          var p3 = 21/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 15/100 // Normal

          var p2 = 44/100 // Prata

          var p3 = 41/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 10/100 // Normal

          var p2 = 29/100 // Prata

          var p3 = 61/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 3/100 // Normal

          var p2 = 8/100 // Prata

          var p3 = 48/100 // Ouro

          var p4 = 41/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2708')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '11') { // NÍVEL 11

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 42/100 // Normal

          var p2 = 35/100 // Prata

          var p3 = 23/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 14/100 // Normal

          var p2 = 41/100 // Prata

          var p3 = 45/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 9/100 // Normal

          var p2 = 25/100 // Prata

          var p3 = 66/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 2/100 // Normal

          var p2 = 5/100 // Prata

          var p3 = 49/100 // Ouro

          var p4 = 44/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2780')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '12') { // NÍVEL 12

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 38/100 // Normal

          var p2 = 37/100 // Prata

          var p3 = 25/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 13/100 // Normal

          var p2 = 39/100 // Prata

          var p3 = 48/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 7/100 // Normal

          var p2 = 21/100 // Prata

          var p3 = 72/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 1/100 // Normal

          var p2 = 2/100 // Prata

          var p3 = 50/100 // Ouro

          var p4 = 48/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2852')

      }

  } else if (sementeUsada == 'mirtilo' && nivelCultivo == '13') { // NÍVEL 13

    switch(fertilizante) {

      case fertilizante = '0': // Sem fertilizante

          var p1 = 34/100 // Normal

          var p2 = 39/100 // Prata

          var p3 = 27/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
          console.log(`${nivelCultivo} e sem fertilizante`)

          break

      case fertilizante = '1': // Com fertilizante básico

          var p1 = 12/100 // Normal

          var p2 = 36/100 // Prata

          var p3 = 52/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante básico`)

          break

      case fertilizante = '2': // Com fertilizante de qualidade

          var p1 = 6/100 // Normal

          var p2 = 17/100 // Prata

          var p3 = 77/100 // Ouro

          var p4 = 0 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

          console.log(`${nivelCultivo} e com fertilizante de qualidade`)

          break

      case fertilizante = '3': // Com fertilizante de premium

          var p1 = 0 // Normal

          var p2 = 0 // Prata

          var p3 = 49/100 // Ouro

          var p4 = 51/100 // Iridio

          var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

          console.log(`${nivelCultivo} e com fertilizante premium`)

          break

      default:

        window.alert('Algo deu errado. script.js:2924')

      }

  }

  console.log('----------------------')

/* ____________________________________________________________________________________________________ */

  /* Condições com o Oxicoco */

  if (sementeUsada == 'oxicoco' && nivelCultivo == '0') {

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 97/100 // Normal

        var p2 = 2/100 // Prata

        var p3 = 1/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 88/100 // Normal

        var p2 = 8/100 // Prata

        var p3 = 4/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 78/100 // Normal

        var p2 = 14/100 // Prata

        var p3 = 8/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        break

    case fertilizante = '3': // Com fertilizante premium

        var p1 = 66/100 // Normal

        var p2 = 19/100 // Prata

        var p3 = 10/100 // Ouro

        var p4 = 6/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        break

    default:

      window.alert('Algo deu errado. script.js:3003')

}

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '1') { // NÍVEL 1

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 91/100 // Normal

        var p2 = 6/100 // Prata

        var p3 = 3/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 77/100 // Normal

        var p2 = 15/100 // Prata

        var p3 = 8/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)
      
        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 64/100 // Normal

        var p2 = 23/100 // Prata

        var p3 = 13/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 48/100 // Normal

        var p2 = 27/100 // Prata

        var p3 = 16/100 // Ouro

        var p4 = 9/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:
      
      window.alert('Algo deu errado. script.js:3067')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '2') { // NÍVEL 2

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 85/100 // Normal

        var p2 = 10/100 // Prata

        var p3 = 5/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 68/100 // Normal

        var p2 = 20/100 // Prata

        var p3 = 12/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 52/100 // Normal

        var p2 = 30/100 // Prata

        var p3 = 18/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 33/100 // Normal

        var p2 = 33/100 // Prata

        var p3 = 22/100 // Ouro

        var p4 = 13/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3139')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '3') { // NÍVEL 3

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 80/100 // Normal

        var p2 = 13/100 // Prata

        var p3 = 7/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 59/100 // Normal

        var p2 = 26/100 // Prata

        var p3 = 15/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 40/100 // Normal

        var p2 = 36/100 // Prata

        var p3 = 24/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 21/100 // Normal

        var p2 = 37/100 // Prata

        var p3 = 27/100 // Ouro

        var p4 = 16/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3211')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '4') { // NÍVEL 4

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 75/100 // Normal

        var p2 = 16/100 // Prata

        var p3 = 9/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 50/100 // Normal

        var p2 = 31/100 // Prata

        var p3 = 19/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 30/100 // Normal

        var p2 = 41/100 // Prata

        var p3 = 29/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 12/100 // Normal

        var p2 = 37/100 // Prata

        var p3 = 31/100 // Ouro

        var p4 = 20/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3283')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '5') { // NÍVEL 5

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 69/100 // Normal

        var p2 = 20/100 // Prata

        var p3 = 11/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
          
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 42/100 // Normal

        var p2 = 35/100 // Prata

        var p3 = 23/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 21/100 // Normal

        var p2 = 45/100 // Prata

        var p3 = 34/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 10/100 // Normal

        var p2 = 31/100 // Prata

        var p3 = 35/100 // Ouro

        var p4 = 23/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3355')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '6') { // NÍVEL 6

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 64/100 // Normal

        var p2 = 23/100 // Prata

        var p3 = 13/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 35/100 // Normal

        var p2 = 39/100 // Prata

        var p3 = 26/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 15/100 // Normal

        var p2 = 45/100 // Prata

        var p3 = 40/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 9/100 // Normal

        var p2 = 26/100 // Prata

        var p3 = 39/100 // Ouro

        var p4 = 27/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3427')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '7') { // NÍVEL 7

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 60/100 // Normal

        var p2 = 25/100 // Prata

        var p3 = 15/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 28/100 // Normal

        var p2 = 42/100 // Prata

        var p3 = 30/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 14/100 // Normal

        var p2 = 41/100 // Prata

        var p3 = 45/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 7/100 // Normal

        var p2 = 21/100 // Prata

        var p3 = 42/100 // Ouro

        var p4 = 30/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3499')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '8') { // NÍVEL 8

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 55/100 // Normal

        var p2 = 28/100 // Prata

        var p3 = 17/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 22/100 // Normal

        var p2 = 44/100 // Prata

        var p3 = 34/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 13/100 // Normal

        var p2 = 37/100 // Prata

        var p3 = 50/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 5/100 // Normal

        var p2 = 16/100 // Prata

        var p3 = 45/100 // Ouro

        var p4 = 34/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3571')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '9') { // NÍVEL 9

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 50/100 // Normal

        var p2 = 31/100 // Prata

        var p3 = 19/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 16/100 // Normal

        var p2 = 47/100 // Prata

        var p3 = 37/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 11/100 // Normal

        var p2 = 33/100 // Prata

        var p3 = 56/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 4/100 // Normal

        var p2 = 12/100 // Prata

        var p3 = 47/100 // Ouro

        var p4 = 37/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3643')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '10') { // NÍVEL 10

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 46/100 // Normal

        var p2 = 33/100 // Prata

        var p3 = 21/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 15/100 // Normal

        var p2 = 44/100 // Prata

        var p3 = 41/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 10/100 // Normal

        var p2 = 29/100 // Prata

        var p3 = 61/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 3/100 // Normal

        var p2 = 8/100 // Prata

        var p3 = 48/100 // Ouro

        var p4 = 41/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3715')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '11') { // NÍVEL 11

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 42/100 // Normal

        var p2 = 35/100 // Prata

        var p3 = 23/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 14/100 // Normal

        var p2 = 41/100 // Prata

        var p3 = 45/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 9/100 // Normal

        var p2 = 25/100 // Prata

        var p3 = 66/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 2/100 // Normal

        var p2 = 5/100 // Prata

        var p3 = 49/100 // Ouro

        var p4 = 44/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:

      window.alert('Algo deu errado. script.js:3787')

    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '12') { // NÍVEL 12

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 38/100 // Normal

        var p2 = 37/100 // Prata

        var p3 = 25/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 13/100 // Normal

        var p2 = 39/100 // Prata

        var p3 = 48/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 7/100 // Normal

        var p2 = 21/100 // Prata

        var p3 = 72/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 1/100 // Normal

        var p2 = 2/100 // Prata

        var p3 = 50/100 // Ouro

        var p4 = 48/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:
      window.alert('Algo deu errado. script.js:3858')
    }

  } else if (sementeUsada == 'oxicoco' && nivelCultivo == '13') { // NÍVEL 13

  switch(fertilizante) {

    case fertilizante = '0': // Sem fertilizante

        var p1 = 34/100 // Normal

        var p2 = 39/100 // Prata

        var p3 = 27/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 
        
        console.log(`${nivelCultivo} e sem fertilizante`)

        break

    case fertilizante = '1': // Com fertilizante básico

        var p1 = 12/100 // Normal

        var p2 = 36/100 // Prata

        var p3 = 52/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante básico`)

        break

    case fertilizante = '2': // Com fertilizante de qualidade

        var p1 = 6/100 // Normal

        var p2 = 17/100 // Prata

        var p3 = 77/100 // Ouro

        var p4 = 0 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (p1 * espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p2 * espacoLavoura * vendaPrata)  + (p3 * espacoLavoura * vendaOuro) 

        console.log(`${nivelCultivo} e com fertilizante de qualidade`)

        break

    case fertilizante = '3': // Com fertilizante de premium

        var p1 = 0 // Normal

        var p2 = 0 // Prata

        var p3 = 49/100 // Ouro

        var p4 = 51/100 // Iridio

        var valorVenda = ((chanceMaisFrutos / 100) * espacoLavoura * vendaNormal) + (espacoLavoura * vendaNormal * (qtdColhida - 1)) + (p3 * espacoLavoura * vendaOuro) + (p4 * espacoLavoura * vendaIridio) 

        console.log(`${nivelCultivo} e com fertilizante premium`)

        break

    default:
      window.alert('Algo deu errado. script.js:3933')

    }

  }

  /* Condições com cada escolha de profissão 2 e solo foliar */
  
  if (profissao2 == 'p2j0' && soloFoliar == 'sf0') { // Sem solo foliar e sem profissão

    var tempoColheitaSF = tempoColheita

    inputGroup8.innerHTML = tempoColheita

    console.log('Sem solo foliar e sem profissão')

  } else if (profissao2 == 'p2j0' && soloFoliar == 'sf1') { // Com solo foliar

    var tempoColheitaSF = tempoColheita * (1 - 10/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Com solo foliar e sem profissão')

  } else if (profissao2 == 'p2j0' && soloFoliar == 'sf2') { // Com solo foliar Premium

    var tempoColheitaSF = tempoColheita * (1 - 25/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Com solo foliar premium e sem profissão')

  } else if (profissao2 == 'p2j0' && soloFoliar == 'sf3') { // Com Hiper solo foliar

    var tempoColheitaSF = tempoColheita * (1 - 33/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Com hiper solo foliar e sem profissão')

  } 

  if (profissao2 == 'p2j1' && soloFoliar == 'sf0') { // Sem solo foliar e com profissão

    var tempoColheitaSF = tempoColheita * (1 - 10/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Sem solo foliar e com profissão')

  } else if (profissao2 == 'p2j1' && soloFoliar == 'sf1') { // Com solo foliar

    var tempoColheitaSF = tempoColheita * (1 - 10/100) * (1 - 10/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Com solo foliar e com profissão')

  } else if (profissao2 == 'p2j1' && soloFoliar == 'sf2') { // Com solo foliar Premium

    var tempoColheitaSF = tempoColheita * (1 - 10/100) * (1 - 25/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Com solo foliar premium e com profissão')

  } else if (profissao2 == 'p2j1' && soloFoliar == 'sf3') { // Com Hiper solo foliar

    var tempoColheitaSF = tempoColheita * (1 - 10/100) * (1 - 33/100)

    inputGroup8.innerHTML = Number.parseInt(tempoColheitaSF)

    console.log('Com hiper solo foliar e com profissão')
    
  } 

  console.log(`${tempoColheita} dias para ${nome} crescer`)

  console.log('----------------------')

  console.log(`${tempoColheitaSF} dias para ${nome} crescer com solo foliar`)

  console.log('----------------------')

  /* ____________________________________________________________________________________________________ */

  /* Condições caso a semente se reproduza */

  if (tempoReproducao >= 1 && soloFoliar != 'nda' && soloFoliar != 'sf0') { // Caso o fruto se reproduza e tenha solo foliar

    var coeficienteReproducao = Number.parseInt([(28 - diaAtualNumber) - tempoColheitaSF] / tempoReproducao) // Número de vezes de produção na lavoura (com reprodução)

    inputGroup24.innerHTML = ++coeficienteReproducao

    console.log(`${coeficienteReproducao} número de colheitas`)

  } else if (tempoReproducao == 0 && soloFoliar != 'nda' && soloFoliar != 'sf0') { // Caso o fruto não se reproduza e tenha solo foliar

    var coeficienteProducao =  Number.parseInt((28 - diaAtualNumber) / tempoColheitaSF) // Número de vezes de produção na lavoura (sem reprodução)

    inputGroup24.innerHTML = coeficienteProducao

    console.log(`${coeficienteProducao} número de colheitas`)
      
  } else if (tempoReproducao >= 1 && soloFoliar == 'sf0') { // Caso o fruto se reproduza e não tenha solo foliar

    var coeficienteReproducao = Number.parseInt([(28 - diaAtualNumber) - tempoColheitaSF] / tempoReproducao) // Número de vezes de produção na lavoura (com reprodução)

    inputGroup24.innerHTML = ++coeficienteReproducao

    console.log(`${coeficienteReproducao} número de colheitas`)

  } else if (tempoReproducao == 0 && soloFoliar == 'sf0') { // Caso o fruto não se reproduza e não tenha solo foliar

    var coeficienteProducao =  Number.parseInt((28 - diaAtualNumber) / tempoColheitaSF) // Número de vezes de produção na lavoura (sem reprodução)

    inputGroup24.innerHTML = coeficienteProducao

    console.log(`${coeficienteProducao} número de colheitas`)
      
  }

  console.log('----------------------')

/* ____________________________________________________________________________________________________ */

  /* Condições caso a semente seja a Fruta antiga se reproduza */

  if (sementeUsada == 'frutaAntiga' && tempoReproducao >= 1 && soloFoliar != 'nda' && soloFoliar != 'sf0') { // Caso o fruto se reproduza e tenha solo foliar

    var diasPerdidos = Number.parseInt((28 - diaAtualNumber - tempoColheitaSF))
    var coeficienteReproducao = Number.parseInt((28 + diasPerdidos) / 7) + 1  // Número de vezes de produção na lavoura (com reprodução) // Número de vezes de produção na lavoura (com reprodução)

    inputGroup24.innerHTML = coeficienteReproducao

    console.log(`${diasPerdidos} dias perdidos fruta Antiga`)
    console.log(`${coeficienteReproducao} número de colheitas fruta antiga`)

  } else if (sementeUsada == 'frutaAntiga' && tempoReproducao >= 1 && soloFoliar == 'sf0') { // Caso o fruto se reproduza e não tenha solo    foliar

    var diasPerdidos = Number.parseInt((28 - diaAtualNumber - tempoColheitaSF))
    var coeficienteReproducao = Number.parseInt((28 + diasPerdidos) / 7) + 1 // Número de vezes de produção na lavoura (com reprodução)

    inputGroup24.innerHTML = coeficienteReproducao

    console.log(`${diasPerdidos} dias perdidos fruta Antiga`)
    console.log(`${coeficienteReproducao} número de colheitas fruta antiga`)

  }

  console.log('----------------------')

  /* Calculo do faturamento e do lucro */

  var custoTotalSementesPierre = espacoLavoura * custoPierre

  var custoTotalSementesJoja = espacoLavoura * custoJoja

  /* Condições com cada escolha de profissão 1 */

  if (profissao == 'p1j0' && tempoReproducao >= 1) { // Nenhuma profissao e caso haja tempo de reprodução

    var faturamento = valorVenda * (++coeficienteReproducao) // Faturamento
    var lucroPierre = faturamento - custoTotalSementesPierre // Lucro Pierre
    var lucroJoja = faturamento - custoTotalSementesJoja // Lucro Jaja

  } else if (profissao == 'p1j0' && tempoReproducao == 0 ) { // Nenhuma profissao e caso não haja reprodução
 
    var faturamento = valorVenda * coeficienteProducao // Faturamento
    var lucroPierre = faturamento - custoTotalSementesPierre // Lucro Pierre
    var lucroJoja = faturamento - custoTotalSementesJoja // Lucro Jaja
    
  } else if (profissao == "p1j1" && tempoReproducao >= 1) { // p1j1 - Cultivador (plantações valem 10% a mais.) e caso haja tempo de reprodução

    var faturamento = valorVenda * (++coeficienteReproducao) * (1 + 10/100) // Faturamento
    var lucroPierre = faturamento - custoTotalSementesPierre // Lucro Pierre
    var lucroJoja = faturamento - custoTotalSementesJoja // Lucro Jaja

  } else if (profissao == "p1j1" && tempoReproducao == 0) { // p1j1 - Cultivador (plantações valem 10% a mais.) e caso não haja reprodução
    
    var faturamento = valorVenda * coeficienteProducao * (1 + 10/100) // Faturamento
    var lucroPierre = faturamento - custoTotalSementesPierre // Lucro Pierre
    var lucroJoja = faturamento - custoTotalSementesJoja // Lucro Jaja

  }

  var tempoLucroPierre = custoTotalSementesPierre / (lucroPierre / 28 ) // Quantidade de dias necessários para começar a ter lucro (pierre)

  var tempoLucroJoja = custoTotalSementesJoja / (lucroJoja / 28) // Quantidade de dias necessários para começar a ter lucro (joja)

  console.log(`${custoTotalSementesPierre} custo total sementes pierre`)

  console.log('----------------------')

  console.log(`${custoTotalSementesJoja} custo total sementes Joja`)

  console.log('----------------------')

  console.log(`${faturamento} de faturamento`)

  console.log('----------------------')

  console.log(`${lucroPierre} de lucro no Pierre`)

  console.log('----------------------')

  console.log(`${lucroJoja} de lucro na Joja`)

  console.log('----------------------')

  /* ____________________________________________________________________________________________________ */

  /* Escrevendo nos campos */

  /* Condições caso o calculo do faturamento e do lucro devolvam negativo */

  // Campo: Faturamento total */

  if (faturamento <= 0 ) {

    var newFaturamento = 0

    inputGroup14.innerHTML = `Plante ${nome} o quanto antes`

  } else if (faturamento > 0) {

    inputGroup14.innerHTML = Number.parseInt(faturamento)

  }

  // Campo: Lucro por comprar no Pierre */

  if (lucroPierre <= 0) {

    inputGroup15.innerHTML = `Plante ${nome} o quanto antes`

  } else if (lucroPierre > 0) {

    inputGroup15.innerHTML = Number.parseInt(lucroPierre)

  }

  // Campo: Lucro por comprar na Joja

  if (lucroJoja <= 0) {

    inputGroup29.innerHTML = `Plante ${nome} o quanto antes`

  } else if (lucroJoja > 0) {

    inputGroup29.innerHTML = Number.parseInt(lucroJoja)

  }

  if (custoTotalSementesJoja == 0) {

    inputGroup29.innerHTML = 'Nenhum'

  }

  // Campo: Tempo mínimo para ter lucro por comprar no Pierre

  if (tempoLucroPierre == 0) {

    inputGroup30.innerHTML = 'Nenhum'

  }  else if (tempoLucroPierre > 27) {

    inputGroup30.innerHTML = `Plante ${nome} o quanto antes`

    console.log(`${tempoLucroPierre} dias para ter lucro por comprar na Pierre`)

  } else if (tempoLucroPierre > 0) {

    inputGroup30.innerHTML = Number.parseInt(tempoLucroPierre)

    console.log(`${tempoLucroPierre} dias para ter lucro por comprar na Pierre`)

  } else if (tempoLucroPierre < 0) {

    inputGroup30.innerHTML = `Plante ${nome} o quanto antes`

    console.log(`${tempoLucroPierre} dias para ter lucro por comprar na Pierre`)

  } 

   // Campo: Tempo mínimo para ter lucro por comprar na Joja

   if (tempoLucroJoja == 0) {

    inputGroup16.innerHTML = 'Nenhum'

  } else if (tempoLucroJoja > 27) {

    inputGroup16.innerHTML = `Plante ${nome} o quanto antes`

    console.log(`${tempoLucroJoja} dias para ter lucro por comprar na Joja`)

  } else if (tempoLucroJoja > 0) {

    inputGroup16.innerHTML = Number.parseInt(tempoLucroJoja)

    console.log(`${tempoLucroJoja} dias para ter lucro por comprar na Joja`)

  } else if (tempoLucroJoja < 0) {

    inputGroup16.innerHTML = `Plante ${nome} o quanto antes`

    console.log(`${tempoLucroJoja} dias para ter lucro por comprar na Joja`)

  } else {

    inputGroup16.innerHTML = 'Nenhum'

    console.log(`${tempoLucroJoja} dias para ter lucro por comprar na Joja`)

  }

  // Campo: Espaço para lavoura

  inputGroup1.innerHTML = espacoLavoura

  // Campo: Custo na loja Pierre

  inputGroup3.innerHTML = custoPierre
  
  // Campo: Custo total na Joja

  inputGroup4.innerHTML = custoTotalSementesJoja

  // Campo: Fertilizante

  if (fertilizante == '0') {

    inputGroup5.innerHTML = 'Sem fertilizante'

  } else if (fertilizante  == '1') {

    inputGroup5.innerHTML = 'Fertilizante básico'

  } else if (fertilizante == '2') {

    inputGroup5.innerHTML = 'Fertilizante de qualidade'

  } else if (fertilizante == '3') {

    inputGroup5.innerHTML = 'Fertilizante premium'
  }

  // Campo: Solo foliar

  if (soloFoliar == 'sf0') {

    inputGroup6.innerHTML = 'Sem solo foliar'

  } else if (soloFoliar  == 'sf1') {

    inputGroup6.innerHTML = 'Solo foliar'

  } else if (soloFoliar == 'sf2') {

    inputGroup6.innerHTML = 'Solo foliar premium'

  } else if (soloFoliar == 'sf3') {

    inputGroup6.innerHTML = 'Hiper solo foliar'
  }

  // Campo: Profissão 1 */

  if (profissao == 'p1j0') {

    inputGroup7.innerHTML = 'Nenhuma'

  } else if (profissao == 'p1j1') {

    inputGroup7.innerHTML = 'Cultivador'
  }

  // Campo: Chance mais frutos

  inputGroup9.innerHTML = (`${Number.parseInt(chanceMaisFrutos)}%`)

  // Campo: Venda normal

  inputGroup10.innerHTML = vendaNormal

  // Campo: Venda prata

  inputGroup11.innerHTML = vendaPrata

  // Campo: Venda ouro

  inputGroup12.innerHTML = vendaOuro

  // Campo: Venda iridio

  inputGroup13.innerHTML = vendaIridio

  // Campo: Semente usada

  inputGroup17.innerHTML = nome

  // Campo: Nível de cultivo do jogador

  inputGroup18.innerHTML = nivelCultivo

  // Campo: Custo da semente na Joja

  inputGroup19.innerHTML = custoJoja

  // Campo: Custo total das sementes no Pierre

  inputGroup20.innerHTML = custoTotalSementesPierre

  // Campo: Solo retentor usado

  if (soloRetentor== 'sr0') {

    inputGroup21.innerHTML = 'Sem solo retentor'

  } else if (soloRetentor  == 'sr1') {

    inputGroup21.innerHTML = 'Solo retentor'

  } else if (soloRetentor == 'sr2') {

    inputGroup21.innerHTML = 'Solo retentor de qualidade'

  } else if (soloRetentor == 'sr3') {

    inputGroup21.innerHTML = 'Solo retentor premium'
  }

  // Campo: Tempo de reprodução semente

  inputGroup22.innerHTML = tempoReproducao

  console.log(`${tempoReproducao} dias para ${nome} se reproduzir.`)

  console.log('----------------------')

  // Campo: Profissão 2

  if (profissao2 == 'p2j0') {

    inputGroup23.innerHTML = 'Nenhuma'

  } else if (profissao2 == 'p2j1') {

    inputGroup23.innerHTML = 'Agricultor'
  }

  // Campo: Chance fruto normal

  if (p1 == 0) {

    inputGroup25.innerHTML = 'Impossível'

  } else if (p1 > 0) {

    inputGroup25.innerHTML = (`${Number.parseInt(p1 * 100)}%`)

  }

  // Campo: Chance fruto prata

  if (p2 == 0) {

    inputGroup26.innerHTML = 'Impossível'

  } else if (p2 > 0) {

    inputGroup26.innerHTML = (`${Number.parseInt(p2 * 100)}%`)

  }

  // Campo: Chance fruto ouro

  if (p3 == 0) {

    inputGroup27.innerHTML = 'Impossível'

  } else if (p3 > 0) {

    inputGroup27.innerHTML = (`${Number.parseInt(p3 * 100)}%`)

  }

  // Campo: Chance fruto iridio

  if (p4 == 0) {

    inputGroup28.innerHTML = 'Impossível'

  } else if (p4 > 0) {

    inputGroup28.innerHTML = (`${Number.parseInt(p4 * 100)}%`)

  }

  console.log('----------------------')

}

var botao2 = window.document.querySelector('#botao2')

botao2.addEventListener('click', atualizar)

function atualizar() {

    document.location.reload(true);

}

/* ____________________________________________________________________________________________________ */
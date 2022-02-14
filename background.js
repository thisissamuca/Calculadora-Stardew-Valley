/* ____________________________________________________________________________________________________ */

/* Fundo dinâmico */

function fundo() {

    var data = new Date() 
  
    var hora = data.getMinutes()
  
    if (hora >= 00 && hora < 5) {
      // MADRUGADA
      document.body.style.backgroundColor = '#370d4b'
  
    } else if (hora >= 5 && hora < 10) {
      // AMANHECER
      document.body.style.backgroundColor = '#d75f2c'
  
    } else if (hora >= 10 && hora < 15) {
      // NOITE
      document.body.style.backgroundColor = '#fff14e'
  
    } else if (hora >= 15 && hora < 20) {
      // MADRUGADA
      document.body.style.backgroundColor = '#ff4d0d'
  
    } else if (hora >= 20 && hora < 25) {
      // AMANHECER
      document.body.style.backgroundColor = '#0d67ff'
  
    } else if (hora >= 25 && hora < 30) {
      // NOITE
      document.body.style.backgroundColor = '#1bc958'
  
    } else if (hora >= 30 && hora < 35) {
      // MADRUGADA
      document.body.style.backgroundColor = '#29eb28'
  
    } else if (hora >= 35 && hora < 40) {
      // AMANHECER
      document.body.style.backgroundColor = '#d553c1'
  
    } else if (hora >= 40 && hora < 45) {
      // NOITE
      document.body.style.backgroundColor = '#c23333'
  
    } else if (hora >= 45 && hora < 50) {
      // MADRUGADA
      document.body.style.backgroundColor = '#250000'
  
    } else if (hora >= 50 && hora < 55) {
      // AMANHECER
      document.body.style.backgroundColor = '#c5c5d4'
  
    } else if (hora >= 55 && hora <= 59) {
      // NOITE
      document.body.style.backgroundColor = '#2b3028'
  
    }
  
}

/* ____________________________________________________________________________________________________ */
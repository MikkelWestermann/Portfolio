const getUrlShortener = () => {
  switch (window.location.hostname) {
    case 'localhost': 
      return 'http://localhost:1235'
  }
}

const getEmailAuto = () => {
  switch (window.location.hostname) {
    case 'localhost': 
      return 'http://localhost:5555'
  }
}

module.exports = {
  getUrlShortener,
  getEmailAuto
}
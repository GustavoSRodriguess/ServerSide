let usemod = require('./entrada')

calculo = function (){
    resp = usemod.numero * 2
    return console.log(resp)
}

module.exports = {calculo}
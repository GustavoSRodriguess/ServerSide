let usemod = require('./entrada')

calSalario = function(){
    if(usemod.salario > 2500){
        let salLimpo = (usemod.salario * 0.88) * 0.92
        return salLimpo
    }else{
        let salLimpo = usemod.salario * 0.95
        return salLimpo
    }
}

module.exports = {calSalario}
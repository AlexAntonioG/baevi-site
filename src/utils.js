'use strict'



function returnError(validations) {
  let keys = Object.keys(validations)
  let msg = "Error desconocido, contacte al administrador."
  for (let key of keys) {
    if (!validations[key].required && key.indexOf("$", 0) === -1) {
      msg = `El campo ${key} es requerido `
      break
    }
    console.log("as",key,validations[key])
    if (validations[key].minLength!==undefined && validations[key].minLength===false && key.indexOf("$", 0) === -1) {
      msg = `El campo ${key}  debe tener mas de ${validations[key].$params.minLength.min} caracteres`
      break
    }
    if (validations[key].sameAsPassword!==undefined && !validations[key].sameAsPassword && key.indexOf("$", 0) === -1) {
      msg = `Las contraseñas no coinciden  `
      break
    }
    if (validations[key].email!==undefined && !validations[key].email && key.indexOf("$", 0) === -1) {
      msg = `El campo ${key} no es un email válido`
      break
    }
    if(validations[key].maxLength!== undefined && validations[key].maxLength===false && key.indexOf("$", 0) === -1){
      msg = `El campo ${key}  debe tener menos de ${validations[k].$params.minLength.min} caracteres`
    }
    if(validations[key].between!== undefined && validations[k].between===false && key.indexOf("$", 0) === -1){
      msg = `El campo ${key}  debe estar entre  ${validations[key].$params.between.min} y ${validations[key].$params.between.max} caracteres`
    }
  }
  return msg
}

module.exports = {
  returnError
}

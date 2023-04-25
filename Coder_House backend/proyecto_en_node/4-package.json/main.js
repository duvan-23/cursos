const moment = require('moment');

const hoy= moment();

const nacimiento = moment('23/12/1996', 'DD/MM/YYYY');

const diferenciayear = hoy.diff(nacimiento, 'years')
const diferenciaday = hoy.diff(nacimiento, 'days')
console.log(`Hoy es ${hoy.format('DD/MM/YYYY')}`);
console.log("desde que nací paso "+diferenciaday+" dias");
console.log("desde que nací paso "+diferenciayear+" años");
let ahorroInicial = 1000;
let aporteMensual = 500;
let tasaRendimiento = 0.01;
let meta = 5000;
let saldoAcumulado = ahorroInicial;
let totalAportado = ahorroInicial;
let totalRendimiento = 0;
let mesMetaDetectada = 0;

for (let mes = 1; mes <= 12; mes++) {
    saldoAcumulado += aporteMensual;
    totalAportado += aporteMensual;

    let rendimientoMes = saldoAcumulado * tasaRendimiento;
    saldoAcumulado += rendimientoMes;
    totalRendimiento += rendimientoMes;

    console.log(`Mes: ${mes} \n Aporte: ${aporteMensual} \n Rendimiento: ${rendimientoMes.toFixed(2)} \n Saldo: ${saldoAcumulado.toFixed(2)}`);

    if (saldoAcumulado >= meta && mesMetaDetectada === 0) {
        mesMetaDetectada = mes;
    }
}

console.log(`\nTotal Aportado: ${totalAportado}\nTotal Rendimiento: ${totalRendimiento.toFixed(2)}\nSaldo Final: ${saldoAcumulado.toFixed(2)}\nMeta en Mes: ${mesMetaDetectada}`);
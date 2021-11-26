
const family = {
    entradas : [500, 1500, 1100, 1200],
    despesas : [1200, 300, 570, 220, 2400]

}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateentradas = sum(family.entradas)
    const calculatedespesas = sum(family.despesas)

    const total = calculateentradas - calculatedespesas

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: RS${total.toFixed(2)}`)
}

calculateBalance()
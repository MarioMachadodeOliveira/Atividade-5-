const taxas = {
    'Caixa': 1.0487,
    'Santander': 1.0567,
    'Bradesco': 1.0532,
    'Itaú': 1.0519,
    'Nubank': 1.0595,
    'Inter': 1.0602
};

function calcularFinanciamento() {
    const valorInput = document.getElementById('valor').value;
    const banco = document.getElementById('banco').value;
    const parcelas = document.getElementById('prazo').value;

    if (!valorInput || !banco || !parcelas) {
        alert("Preencha todos os campos!");
        return;
    }

    const valor = parseFloat(valorInput.replace(/\./g, '').replace(',', '.'));

    const taxa = taxas[banco] / 100;
    const valorFinal = valor * Math.pow(1 + taxa, parcelas);
    const valorParcela = valorFinal / parcelas;

    document.getElementById('valor-parcela').textContent = formatarCampo(valorParcela);
    document.getElementById('valor-final').textContent = formatarCampo(valorFinal);
    document.getElementById('resultado').classList.remove('hidden');
}

function reiniciarSimulacao() {
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('simulador').reset();
}

function formatarCampo(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

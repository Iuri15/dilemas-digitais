document.getElementById('quiz-form').addEventListener('submit', function(e) {
    // Impede a página de recarregar ao enviar o formulário
    e.preventDefault();

    // Captura os valores selecionados nos inputs do tipo radio
    const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);

    // Soma a pontuação total das respostas
    const pontuacaoTotal = q1 + q2 + q3;

    const resultadoDiv = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultado-texto');

    // Remove a classe 'hidden' para tornar o painel de resultados visível
    resultadoDiv.classList.remove('hidden');

    // Avalia o resultado baseado na pontuação acumulada
    if (pontuacaoTotal === 3) {
        resultadoTexto.textContent = "Equilibrado! Você tem uma ótima relação com a tecnologia e consegue estabelecer limites saudáveis para o uso de telas.";
        resultadoDiv.style.borderLeftColor = "#10b981"; // Verde para bom comportamento
    } else if (pontuacaoTotal > 3 && pontuacaoTotal <= 6) {
        resultadoTexto.textContent = "Alerta moderado! Você apresenta sinais de dependência em alguns momentos. Tente aplicar as soluções de limite de tempo sugeridas acima.";
        resultadoDiv.style.borderLeftColor = "#3b82f6"; // Azul para atenção intermediária
    } else {
        resultadoTexto.textContent = "Dependência Alta! O ambiente digital está consumindo grande parte da sua rotina. Recomendamos aplicar a desintoxicação digital e rever suas notificações com urgência.";
        resultadoDiv.style.borderLeftColor = "#f43f5e"; // Vermelho para dependência severa
    }

    // Rola a tela suavemente até a caixa de resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
});

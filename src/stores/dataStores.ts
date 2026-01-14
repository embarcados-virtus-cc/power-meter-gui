import { Store } from '@tanstack/store'

// Store para RxPower - iniciando no range de LANs (0 a -10 dBm)
export const rxPowerStore = new Store(-8.0)

// Store para Parameters
export const parametersStore = new Store({
  corrente: 32.04,
  tensao: 3.33,
  temperatura: '37',
  qualidadeSinal: 'OK',
})

// Store para History (array de valores em dBm) - começa vazio e vai adicionando
export const historyStore = new Store<Array<number>>([])

// Limite máximo de pontos no histórico (30 pontos = 60 segundos de dados a cada 2s)
const MAX_HISTORY_POINTS = 30

// Função para gerar valor aleatório dentro de um range
function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

// Atualizar tudo sincronizado a cada 2 segundos
setInterval(() => {
  // Atualizar RxPower - permitindo variação maior para demonstrar adaptação do gráfico
  const currentPowerValue = rxPowerStore.state
  const powerVariation = randomInRange(-1.0, 1.0)
  // Permitir range mais amplo para demonstrar adaptação, mas começar no range de LANs
  const newPowerValue = Math.max(
    -50,
    Math.min(3, currentPowerValue + powerVariation),
  )
  const roundedPowerValue = Number(newPowerValue.toFixed(2))
  rxPowerStore.setState(roundedPowerValue)

  // Atualizar Parameters
  const currentParams = parametersStore.state
  parametersStore.setState({
    corrente: Number(
      (currentParams.corrente + randomInRange(-0.5, 0.5)).toFixed(2),
    ),
    tensao: Number(
      (currentParams.tensao + randomInRange(-0.05, 0.05)).toFixed(2),
    ),
    temperatura: currentParams.temperatura, // Mantém OK
    qualidadeSinal: currentParams.qualidadeSinal, // Mantém OK
  })

  // Atualizar History baseado no valor atual do RxPower (adiciona novo valor, mantém máximo de pontos)
  const currentHistory = historyStore.state
  const updatedHistory = [...currentHistory, roundedPowerValue]
  // Limitar ao máximo de pontos, removendo os mais antigos se necessário
  if (updatedHistory.length > MAX_HISTORY_POINTS) {
    updatedHistory.shift() // Remove o primeiro elemento (mais antigo)
  }
  historyStore.setState(updatedHistory)
}, 2000)

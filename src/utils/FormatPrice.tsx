export const FormatPrice = (price: number) => {
  return Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

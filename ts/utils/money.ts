export function formatPrice(cents: number) : string {
    return (Math.round(cents) / 100).toFixed(2)
}

export default formatPrice


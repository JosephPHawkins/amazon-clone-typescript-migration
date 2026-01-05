export function formatPrice(cents) {
    return (Math.round(cents) / 100).toFixed(2);
}
export default formatPrice;

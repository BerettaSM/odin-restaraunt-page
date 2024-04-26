export function getRandomNumber(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function formatCurrency(value: number) {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

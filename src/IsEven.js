export const IsEven = () => {
    const date = new Date();
    return date.getDate() % 2 === 0;
}
export const round = (value: number, decimal: number) => {    
    return +(Math.round(+`${value}e+${decimal}`) + `e-${decimal}`);
}

export const randomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}
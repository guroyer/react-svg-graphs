export const round = (value: number, decimal: number) => {    
    return +(Math.round(+`${value}e+${decimal}`) + `e-${decimal}`);
}
export const PII = 3.14159

export function getCircumference(radius){
    return 2 * PII * radius
}

export function getArea(radius){
    return PII * radius * radius
}

export function getVolume(radius){
    return (4*3) * PII * Math.pow(radius, 3)
}
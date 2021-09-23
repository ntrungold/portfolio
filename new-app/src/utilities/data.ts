//from the stack page professor Bart used in his TA trainer tutorial
//returns one random element
export function getRandomElement<T>(items: T[]): T{
    return items[Math.floor(Math.random()*items.length)];
}
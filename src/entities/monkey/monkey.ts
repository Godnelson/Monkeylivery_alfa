interface MonkeyProps{
    id: string,
    name : string,
    price : number
}

export class Monkey{
    constructor(monkey : MonkeyProps) {
        if(monkey.price <= 0){
            throw new Error('price must be higher than 0')
        }
        this.monkey = monkey
    }
    private monkey : MonkeyProps

    get id(){
        return this.monkey.id
    }

    get name() : string{
        return this.monkey.name
    }

    get price() : number{
        return this.monkey.price
    }

    set price(price){
        price && typeof(price) == 'number' && price > 0 ? this.monkey.price = price : null
    }

    set name(name){
        name && typeof(name) == 'string' ? this.monkey.name = name : null
    }
}
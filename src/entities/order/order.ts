import { Monkey } from './../monkey/monkey';
import { User } from './../user/user';

interface OrderProps{
    madeAt: Date,
    finishedAt: Date | null,
    owner: User,
    customer: User,
    monkey: Monkey,
}

export class Order{
    constructor(order : OrderProps){
         this.orderProps= order
    }

    private orderProps: OrderProps

    get madeAt(){
        return this.orderProps.madeAt
    }

    get finishedAt(){
        return this.orderProps.finishedAt
    }

    get owner(){
        return this.orderProps.owner
    }

    get monkey(){
        return this.orderProps.monkey
    }

    get customer(){
        return this.orderProps.customer
    }

    set finishedAt(finishedAt){
        if(finishedAt){
            finishedAt > new Date(Date.now()) || finishedAt < new Date(Date.now()) ? this.orderProps.finishedAt = finishedAt : null
        }
    }
}
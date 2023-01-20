interface UserProps{
    id : string,
    name : string,
    email: string
}

export class User{
    constructor(user : UserProps){
        this.user = user
    }
    
    private user : UserProps

    set name(name){
        name && typeof(name) == 'string' ? this.user.name = name : null
    }

    set email(email){
        email && typeof(email) == 'string' && email.includes('@') ? this.user.email = email : null
    }

    get id(){
        return this.user.id
    }

    get name() : string{
        return this.user.name
    }

    get email() : string{
        return this.user.email
    }
}
export namespace Aluno {

    interface IEntity{

        name:string,
        surname:string,
        age:number

    }

    export const entities = [
        {
            name:'Steve',
            surname:"Jobs",
            age:34
        },
        {
            name:"Bill",
            surname:"Gates",
            age:23
        }
    ]

    export function returnInfo(entities:IEntity[],index:number){

        return entities[index - 1]

    }


}

export namespace Carro {

    interface IEntity{

        name:string,
        surname:string,
        age:number

    }

    export const entities = [
        {
            name:'Brasília',
            surname:"Jobs",
            age:34
        },
        {
            name:"Honda",
            surname:"Gates",
            age:23
        },
        {
            name:"Civic",
            surname:"Honda",
            age:230
        }
    ]

    export function returnInfo(entities:IEntity[],index:number){

        return entities[index - 1]

    }

}
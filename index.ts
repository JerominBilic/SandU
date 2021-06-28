//Parent Class
class Students{
    Name:string;
    Age:number;
    Gender:string;
    Nationality:string;

    constructor(name:string, age:number,nationality:string){
        this.Name = name;
        this.Age = age;
        this.Gender = 'female';
        this.Nationality = nationality;
    }

    getNationality():string{
        return this.Nationality;
    }

}

class UGStudents extends Students implements Iundergrad{ 

    Batch:number;
    GPA:number;

    constructor(name:string, age:number, nationality:string, batch:number, gpa:number){
        super(name, age, nationality);
        this.Batch = batch;
        this.GPA = gpa; 
    }

    getBatch():number{
        return this.Batch;
    }

}

interface Iundergrad{
    Name:string;
    Age:number;
    Gender:string;
    Nationality:string;
    Batch: number;
    GPA:number;
}

let newUG = new UGStudents ('Jill',66,'Canada',1,2.0);
console.log(`nationality: ${newUG.getNationality()}`);
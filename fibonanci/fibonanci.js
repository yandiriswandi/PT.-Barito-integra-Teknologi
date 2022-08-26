class Fibonacci{
    constructor(n){
        this.n=n
    }
    output(){

        let result=[];
        let fn=1;
        let fn_1=1;
        let fn_2=0;

        for (let i=0;i < this.n;i++){
            result.push(fn)
            fn = fn_1 + fn_2
            fn_2 = fn_1;
            fn_1 = fn;

        }
        return result;
    }
}

const data=new Fibonacci(12);
console.info(data.output());


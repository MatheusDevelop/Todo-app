export class Todo {
    public id_tarefa:number
    public tarefa:string;
    public dataUtc:string;
    public checked:number;
    
    // necessidade no front
    public showUpdateInputs:boolean

    constructor(_id_tarefa,_tarefa,_dataUtc,_checked=0,showUpdateInputs=false)
    {        

        this.showUpdateInputs=showUpdateInputs;
        this.checked=_checked;
        this.id_tarefa=_id_tarefa;
        this.tarefa=_tarefa;
        this.dataUtc=_dataUtc;

    }

}

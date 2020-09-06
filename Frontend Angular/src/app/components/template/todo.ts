export class Todo {
    public id_tarefa:number
    public tarefa:string;
    public dataUtc:string;

    constructor(_id_tarefa,_tarefa,_dataUtc)
    {
        this.id_tarefa=_id_tarefa
        this.tarefa=_tarefa;
        this.dataUtc=_dataUtc;
    }

}

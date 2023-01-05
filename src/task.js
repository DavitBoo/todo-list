
export default class Task {

    constructor(title, desciption, dueDate,  priority, project, checklist){
        
        this.title = title
        this.desciption = desciption 
        this.dueDate = dueDate/*.toISOString().split('T')*/
        this.priority = priority
        this.project = project
        this.checklist = checklist

    }
}
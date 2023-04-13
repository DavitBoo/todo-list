
export default class Task {

    constructor(title, description, dueDate,  priority, project, checklist){
     
        const inputDate = dueDate.split('T')[0];
        const date = new Date(Date.parse(inputDate));
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        
        this.title = title
        this.description = description 
        this.dueDate = formattedDate
        this.dueTime = dueDate.split('T')[1]
        this.priority = priority
        this.project = project
        this.checklist = checklist
        this.defautlDate = dueDate;

    }
}
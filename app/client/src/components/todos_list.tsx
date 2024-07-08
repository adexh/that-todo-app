import { useState } from "react"
import AddTodo from "./addtodo"
import Todo from "./todo"
import { Button } from "./ui/button"
import { CirclePlus } from "lucide-react"

export default function Todoslist() {

  const [addTodoOpen, setAddTodoOpen] = useState(false);

  const taskList = [
    {
      "title": "Grocery Shopping",
      "description": "Buy milk, eggs, bread, and fruits.",
      "category": "Personal"
    },
    {
      "title": "Team Meeting",
      "description": "Discuss project milestones and next steps.",
      "category": "Work"
    },
    {
      "title": "Gym Workout",
      "description": "Complete the scheduled full-body workout session.",
      "category": "Health"
    },
    {
      "title": "Read Book",
      "description": "Finish reading 'The Power of Habit' by Charles Duhigg.",
      "category": "Leisure"
    },
    {
      "title": "Doctor's Appointment",
      "description": "Annual check-up at Dr. Smith's office.",
      "category": "Health"
    }
  ]

  return (
    <div>
      <div className="text-6xl flex justify-between items-center mb-4">
        <div>Todo List</div>
        <Button 
        type="button" 
        variant={"link"} 
        className={`transition opacity-50 hover:scale-110 hover:opacity-100 rotate-0 ${addTodoOpen && 'opacity-100 scale-110 rotate-45'}`}
        onClick={()=>setAddTodoOpen(!addTodoOpen)}
        >
          <CirclePlus size={40}/>
        </Button>
      </div>
      
      {addTodoOpen && <AddTodo />}
      {
        taskList.map(task => <Todo key={task.title} task={task}/>)
      }
    </div>
  )
}
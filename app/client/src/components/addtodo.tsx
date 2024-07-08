import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { useForm, SubmitHandler } from "react-hook-form"

export default function AddTodo(){
  return (
    <div className="transition ease-in-out">
      <Card className="shadow-lg shadow-purple-300">
        <CardHeader>
          <CardTitle className="text-lg">
            Add Todo
          </CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  )
}
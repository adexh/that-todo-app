import { Pencil } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

import { Badge } from "./ui/badge"

export default function todo(props: { task: { title: string, description: string } }) {
  return (
    <div className="my-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-lg font-medium flex justify-between">
              <span>{props.task.title}</span>
              <Pencil size={20} className="transition opacity-20 hover:scale-110 hover:opacity-100"/>
            </p>
          </CardTitle>
          <CardDescription className="text-md">
          {<Badge variant={"outline"} className="shadow">
              <div>{props.task.title}</div>
            </Badge>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>{props.task.description}</div>
        </CardContent>
      </Card>
    </div>
  )
}
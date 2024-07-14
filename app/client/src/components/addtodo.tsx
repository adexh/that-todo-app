"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import MultipleSelector, { Option } from '@/components/ui/multiselect';

import { useToast } from "@/components/ui/use-toast"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const OPTIONS: Option[] = [
  { value: 'Nextjs', id: 1 },
  { value: 'React', id: 2 },
  { value: 'Remix', id: 3 },
  { value: 'Vite', id: 4 },
  { value: 'Nuxt', id: 5},
  { value: 'Vue', id: 6 },
  { value: 'Svelte', id: 7 },
  { value: 'Angular', id: 8 },
  { value: 'Astro', id: 9 }
];
const optionSchema = z.object({
  value: z.string(),
  id: z.number(),
  disable: z.boolean().optional(),
});

const todoSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters"
  }),
  description: z.string().optional(),
  category: z.array(optionSchema).optional(),
})

export default function AddTodo() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema)
  })

  function onSubmit(values: z.infer<typeof todoSchema>) {
    toast({
      title: 'Your submitted data',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="transition ease-in-out">
      <Card className="shadow-lg shadow-purple-300">
        <CardHeader>
          <CardTitle className="text-2xl">
            Add Todo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title*</FormLabel>
                    <FormControl>
                      <Input placeholder="Title of your todo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desciption</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Details of your todo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <MultipleSelector
                        {...field}
                        creatable
                        defaultOptions={OPTIONS}
                        placeholder="Select catrogy(ies) you like..."
                        emptyIndicator={
                          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                            No results found
                          </p>
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
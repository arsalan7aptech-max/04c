import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Plus, Minus, RotateCcw } from 'lucide-react'

const DashboardCounter = () => {
    const [count,setCount]=useState(0)
    const add=()=>{
      setCount(prev=>prev+1)
    }
    const sub=()=>{
      setCount(prev=>prev-1)
    }
    const reset=()=>{
      setCount(0)
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Counter App</CardTitle>
          <CardDescription>
            A simple UI layout built with shadcn/ui
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center py-6">
          <span className="text-6xl font-bold tracking-tight">{count}</span>
          <span className="mt-2 text-sm text-muted-foreground">
            Current Count
          </span>
        </CardContent>

        <CardFooter className="flex justify-center gap-3">
          <Button variant="outline" size="icon" onClick={sub}>
            <Minus className="h-4 w-4" />
          </Button>

          <Button variant="secondary" onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>

          <Button size="icon" onClick={add}>
            <Plus className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DashboardCounter
import * as React from "react"
import { Card, CardContent } from "./Card"

export function Widget() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <h1 className="text-2xl font-bold text-green-500">Hello World</h1>
      </CardContent>
    </Card>
  )
}
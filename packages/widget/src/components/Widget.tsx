import * as React from "react";
import { Card, CardContent } from "./Card";

export function Widget() {
  return (
    <div className="aw-widget-root">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold text-[var(--primary-testing-color)]">
            Hello World
          </h1>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import * as React from "react";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [theme, setCurrentTheme] = React.useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setCurrentTheme("dark");
      setTheme("dark");
    }
    if (theme === "dark") {
      setCurrentTheme("system");
      setTheme("system");
    }
    if (theme === "system") {
      setCurrentTheme("light");
      setTheme("light");
    }
  };
  return (
    <Button
      variant="link_nounderline"
      onClick={toggleTheme}
      className="w-full flex items-center justify-start text-left gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      {theme === "light" && <Sun className="h-4 w-4" />}
      {theme === "dark" && <Moon className="h-4 w-4" />}
      {theme === "system" && <MonitorCog className="h-4 w-4" />}
      Toggle theme
    </Button>
  );
}

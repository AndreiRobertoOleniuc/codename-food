import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button className="mb-5">Click me</Button>
      <ModeToggle />
    </main>
  );
}

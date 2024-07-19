"use client";

import { useState } from "react";
import Navigation from "./navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

export default function BaseResizeableNavAndContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={15}
        maxSize={25}
        minSize={15}
        collapsedSize={5}
        collapsible
        onCollapse={() => setIsCollapsed(true)}
        onExpand={() => setIsCollapsed(false)}
      >
        <Navigation isCollapsed={isCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}

"use client";

import { MediaModalProvider } from "@/lib/MediaModalContext";
import MediaModal from "@/components/ui/MediaModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MediaModalProvider>
      {children}
      <MediaModal />
    </MediaModalProvider>
  );
}

"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type MediaItem = {
  type: "video" | "image";
  title: string;
  src: string;
  poster?: string;
};

type MediaModalState = {
  isOpen: boolean;
  groupTitle: string;
  items: MediaItem[];
  index: number;
};

type MediaModalContextValue = MediaModalState & {
  open: (items: MediaItem[], startIndex: number, groupTitle: string) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
};

const MediaModalContext = createContext<MediaModalContextValue | null>(null);

export function MediaModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<MediaModalState>({
    isOpen: false,
    groupTitle: "",
    items: [],
    index: 0,
  });

  const open = useCallback((items: MediaItem[], startIndex: number, groupTitle: string) => {
    setState({ isOpen: true, items, index: startIndex, groupTitle });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }));
  }, []);

  const next = useCallback(() => {
    setState((s) => ({ ...s, index: Math.min(s.index + 1, s.items.length - 1) }));
  }, []);

  const prev = useCallback(() => {
    setState((s) => ({ ...s, index: Math.max(s.index - 1, 0) }));
  }, []);

  const value = useMemo(
    () => ({ ...state, open, close, next, prev }),
    [state, open, close, next, prev]
  );

  return <MediaModalContext.Provider value={value}>{children}</MediaModalContext.Provider>;
}

export function useMediaModal() {
  const ctx = useContext(MediaModalContext);
  if (!ctx) throw new Error("useMediaModal must be used within MediaModalProvider");
  return ctx;
}

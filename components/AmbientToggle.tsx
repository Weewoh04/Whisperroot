"use client";

import { useState } from "react";
import { AudioLines } from "lucide-react";

export default function AmbientToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={enabled}
      onClick={() => setEnabled((value) => !value)}
      className="ancient-button ancient-button--ghost inline-flex min-h-10 items-center gap-2 px-4 text-xs"
    >
      <AudioLines className="size-4" aria-hidden="true" />
      Whisper Ambience {enabled ? "On" : "Off"}
    </button>
  );
}

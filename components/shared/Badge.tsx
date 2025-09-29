import React from 'react'

function Badge({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`absolute left-3 top-3 z-[1] flex items-center gap-2 rounded-2xl px-3 py-1 text-sm font-semibold shadow-sm ring-1 ring-black/5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Badge

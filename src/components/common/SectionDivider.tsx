interface SectionDividerProps {
  title: string
  className?: string
}

export const SectionDivider = ({ title, className = "" }: SectionDividerProps) => {
  return (
    <div
      className={`w-full ${className} text-foreground`}
    >
      <div className="flex items-center gap-6">
        <div className="flex-1 h-0.5 bg-foreground/40" />

        <span
          className="
            text-xs
            whitespace-nowrap
            text-foreground/40

          "
        >
          {title.toUpperCase()}
        </span>

        <div className="flex-5 h-0.5 bg-foreground/40" />
      </div>
    </div>
  )
}

/**
 * MenubarShortcut Component
 * Renders keyboard shortcuts in the menubar items
 */
import { cn } from "@/lib/utils"
import { MenubarShortcutProps } from "./types"

export const MenubarShortcut = ({
  className,
  ...props
}: MenubarShortcutProps) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

MenubarShortcut.displayname = "MenubarShortcut"
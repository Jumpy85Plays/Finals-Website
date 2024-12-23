/**
 * Type definitions for Menubar components
 */
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { HTMLAttributes } from "react"

export interface MenubarShortcutProps extends HTMLAttributes<HTMLSpanElement> {}

export interface MenubarItemProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {
  inset?: boolean
}

export interface MenubarSubTriggerProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> {
  inset?: boolean
}

export interface MenubarLabelProps extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> {
  inset?: boolean
}
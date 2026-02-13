
import React from "react";


type ButtonIntent = "primary" | "secondary";
type ButtonContext = "default" | "inverse";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent: ButtonIntent;
  context?: ButtonContext;
  children: React.ReactNode;
  asChild?: boolean;
}


const intentStyles: Record<ButtonIntent, Record<ButtonContext, string>> = {
  primary: {
    default:
      "inline-flex items-center justify-center rounded-lg bg-(--surface-base) px-6 py-3 text-sm font-semibold text-(--text-black) hover:bg-(--surface-muted) transition",
    inverse:
      "inline-flex items-center justify-center rounded-lg bg-(--surface-black) px-6 py-3 text-sm font-semibold text-(--text-inverse) hover:bg-(--surface-alt) hover:text-(--text-inverse) transition",
  },
  secondary: {
    default:
      "inline-flex items-center justify-center rounded-lg border border-(--text-inverse) px-6 py-3 text-sm font-semibold text-(--text-inverse) hover:bg-(--overlay-white-soft) transition",
    inverse:
      "inline-flex items-center justify-center rounded-lg border border-(--text-inverse) px-6 py-3 text-sm font-semibold text-(--text-inverse) hover:bg-(--overlay-white-soft) transition",
  },
};

export function Button({
  intent,
  context = "default",
  children,
  type = "button",
  className = "",
  asChild = false,
  ...rest
}: Readonly<ButtonProps>) {
  const variantClass = intentStyles[intent][context];
  if (asChild) {
    // Render as anchor or custom element
    const child = React.Children.only(children) as React.ReactElement<{
      className?: string;
    }>;

    return React.cloneElement(
      child,
      {
        className: `${variantClass} ${className}`,
        ...rest,
      }
    );
  }
  return (
    <button
      type={type}
      className={variantClass + (className ? ` ${className}` : "")}
      {...rest}
    >
      {children}
    </button>
  );
}

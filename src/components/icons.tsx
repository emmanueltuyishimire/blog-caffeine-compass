import type { SVGProps } from "react";

export function CoffeeBeanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2a10 10 0 1 0 0 20" />
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" />
      <path d="M12 2a10 10 0 0 1 5.238 1.55" />
      <path d="M22 12a10 10 0 0 1-1.55 5.238" />
    </svg>
  );
}

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import {
  NavLinkProps,
  NavLink as RouterNavLink,
} from "react-router-dom";

type ClassValue =
  | string
  | ((state: { isActive: boolean; isPending: boolean }) => string);

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: ClassValue;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={(state) => {
          const base =
            typeof className === "function"
              ? className(state)
              : className;

          return cn(
            base,
            state.isActive && activeClassName,
            state.isPending && pendingClassName
          );
        }}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };







// import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
// import { forwardRef } from "react";
// import { cn } from "@/lib/utils";

// interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
//   className?: string;
//   activeClassName?: string;
//   pendingClassName?: string;
// }

// const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
//   ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
//     return (
//       <RouterNavLink
//         ref={ref}
//         to={to}
//         className={({ isActive, isPending }) =>
//           cn(className, isActive && activeClassName, isPending && pendingClassName)
//         }
//         {...props}
//       />
//     );
//   },
// );

// NavLink.displayName = "NavLink";

// export { NavLink };

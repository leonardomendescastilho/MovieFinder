import { cva } from "class-variance-authority";
import { BadgeViewModelProps, BadgeViewModelResult } from "./BadgeModel";
import { useMemo } from "react";
import { cn } from "../../utils/cn";

export const badgeVariants = cva('inline-flex items-center justify-center font-semibold font-base rounded-2xl transition-all duration-200 ease-in-out',
{
  variants: {
    variant: {
      default: 'text-[8px] sm:text-[10px] md:text-xs py-1 px-2 bg-foreground text-primary-foreground hover:opacity-80',
      small: 'text-[8px] py-1 px-2 bg-muted-foreground text-primary-foreground',
      info: 'text-[8px] sm:text-[10px] md:text-xs py-1 px-2 bg-blue-500 text-white hover:bg-blue-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const useBadgeViewModel = ({className, variant = 'default'}: BadgeViewModelProps): BadgeViewModelResult =>{

  const badgeClassName = useMemo(()=>{
    return cn(badgeVariants({variant}), className)
  },[variant, className])

   return { badgeClassName };
}
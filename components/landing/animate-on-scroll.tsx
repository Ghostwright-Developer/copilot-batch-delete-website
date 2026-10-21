'use client'

import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale'

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

const animations: Record<AnimationType, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  fade: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scale: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
}

export function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className,
  as: Component = 'div',
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>()
  const anim = animations[animation]

  return (
    <Component
      ref={ref as React.RefObject<never>}
      className={cn(
        'transition-all ease-out',
        isVisible ? anim.visible : anim.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  )
}

// Stagger container for multiple items
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  animation?: AnimationType
  duration?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-up',
  duration = 700,
}: StaggerContainerProps) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>()
  const anim = animations[animation]

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                'transition-all ease-out',
                isVisible ? anim.visible : anim.hidden
              )}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

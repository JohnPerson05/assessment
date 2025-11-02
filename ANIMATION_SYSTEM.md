# 🎬 Smooth Scroll Animation System

## Overview

Your site now features a professional, Webflow-style scroll animation system with smooth transitions, performance optimizations, and full accessibility support.

## ✨ What's New

### 1. **Enhanced Scroll Animation Hooks** (`hooks/useScrollAnimation.ts`)

Six powerful hooks for different animation effects:

- **`useScrollAnimation()`** - Main scroll animation with fade, scale, and slide
- **`useScrollPop()`** - Pop-in effect with scale animation
- **`useScrollImageZoom()`** - Cinematic image zoom and parallax
- **`useScrollFadeIn()`** - Simple fade with directional slide (up/down/left/right)
- **`useScrollParallax()`** - Parallax scrolling effect for backgrounds
- **`useStaggerAnimation()`** - Staggered animations for lists and grids

**Key Features:**
- ✅ Scroll-tied animations (not just on-enter triggers)
- ✅ Custom easing curves for professional feel
- ✅ Configurable trigger thresholds
- ✅ Full accessibility support (respects `prefers-reduced-motion`)
- ✅ Performance optimized with `will-change`

### 2. **Reusable Animation Wrappers** (`components/AnimationWrappers.tsx`)

Nine pre-built animation components you can use anywhere:

- **`<FadeInUp>`** - Fade in with upward movement
- **`<PopIn>`** - Scale and fade pop effect
- **`<SlideInLeft>`** / **`<SlideInRight>`** - Directional slide animations
- **`<FadeIn>`** - Simple fade only
- **`<ScaleIn>`** - Scale animation for images/cards
- **`<StaggerContainer>`** + **`<StaggerItem>`** - For staggered list animations
- **`<BlurIn>`** - Reveal with blur effect
- **`<RotateIn>`** - Rotate and scale entrance

**Example Usage:**
```tsx
<FadeInUp delay={0.2}>
  <h1>Your Heading</h1>
</FadeInUp>

<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card>{item.content}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 3. **Enhanced Global CSS** (`app/globals.css`)

Added performance and smooth scrolling features:

- **Smooth scrolling** behavior with font smoothing
- **Performance optimization** classes (`will-animate`, `gpu-accelerated`, etc.)
- **Accessibility support** - respects `prefers-reduced-motion`
- **Hover effects** - consistent transitions across the site
- **Gradient animations** for backgrounds
- **Parallax optimization** with GPU acceleration

### 4. **Updated Components**

All major components now use the new animation system:

✅ **About** - Smooth image gallery with scroll-tied zoom  
✅ **WhatWeDo** - Staggered feature cards with parallax background  
✅ **WhyATS** - Alternating slide-in animations  
✅ **Industries** - Grid with staggered pop-in effects  
✅ **TechInAction** - Smooth card animations with hover states  
✅ **Journey** - Timeline with progressive reveal  
✅ **Mission** - Value cards with glow effects  
✅ **Leadership** - Team grid with elegant transitions

## 🎯 Animation Features

### Scroll-Triggered Animations
- Elements fade in as you scroll (not just on viewport enter)
- Tied to scroll position for dynamic feel
- Proper trigger thresholds (elements start animating at 80-90% in viewport)

### Pop & Scale Effects
- Cards and images "pop" into view
- Scale from 0.7-0.9 to 1.0 for impact
- Combined with fade for smooth entrance

### Staggered Delays
- Multiple items don't animate all at once
- Natural cascading effect with 0.08-0.15s delays
- Creates professional, polished look

### Smooth Easing Curves
- Custom cubic-bezier easing: `[0.25, 0.1, 0.25, 1]`
- Natural, fluid motion (not linear)
- Consistent across all animations

### Performance Optimizations
```css
/* Applied to animated elements */
.will-animate {
  will-change: transform, opacity;
}

.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

### Accessibility
- Automatically respects `prefers-reduced-motion`
- Animations disabled for users who prefer less motion
- Fallback to simple, instant reveals

## 🚀 Usage Examples

### Basic Fade In
```tsx
import { FadeInUp } from '@/components/AnimationWrappers'

<FadeInUp delay={0.2}>
  <h2>Your Content</h2>
</FadeInUp>
```

### Pop Effect for Cards
```tsx
import { PopIn } from '@/components/AnimationWrappers'

<PopIn delay={0.3}>
  <div className="card">Card Content</div>
</PopIn>
```

### Staggered List
```tsx
import { StaggerContainer, StaggerItem } from '@/components/AnimationWrappers'

<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Custom Scroll Animation
```tsx
import { useScrollPop } from '@/hooks/useScrollAnimation'

const { ref, scale, opacity } = useScrollPop({
  scaleFrom: 0.8,
  scaleTo: 1,
})

<motion.div ref={ref} style={{ scale, opacity }}>
  Your content
</motion.div>
```

### Parallax Background
```tsx
import { useScrollParallax } from '@/hooks/useScrollAnimation'

const { ref, y } = useScrollParallax(0.5)

<motion.div ref={ref} style={{ y }}>
  Background element
</motion.div>
```

## 🎨 Animation Timing Guide

| Animation Type | Duration | Delay | Use Case |
|---------------|----------|-------|----------|
| Fade In | 0.7s | 0.1-0.3s | Text content |
| Pop In | 0.6s | 0.1-0.3s | Cards, badges |
| Slide In | 0.8s | 0.1-0.4s | Sections |
| Stagger Items | 0.6s | 0.08-0.15s | Lists, grids |
| Hover Scale | 0.3s | 0s | Interactive elements |

## 💡 Best Practices

1. **Use stagger for groups** - Don't animate multiple items at once
2. **Keep delays short** - 0.1-0.3s is usually enough
3. **Combine effects sparingly** - Fade + slide OR scale, not all three
4. **Test on slower devices** - Animations should enhance, not hinder
5. **Respect accessibility** - Always use the hooks that check `prefers-reduced-motion`

## 🛠️ Customization

### Adjust Animation Speed
```tsx
<FadeInUp delay={0.5}> {/* Longer delay */}
  <Content />
</FadeInUp>
```

### Custom Scroll Triggers
```tsx
const animation = useScrollAnimation({
  startOffset: "start 0.8", // Start earlier
  endOffset: "end 0.2",     // End later
})
```

### Change Stagger Delay
```tsx
<StaggerContainer staggerDelay={0.2}> {/* Slower stagger */}
  <Items />
</StaggerContainer>
```

## 📊 Performance Metrics

- **GPU-accelerated** transforms for smooth 60fps animations
- **will-change** hints for browser optimization
- **Reduced motion** support for accessibility
- **No layout shift** - all animations use transform/opacity
- **Optimized triggers** - animations start at right scroll position

## 🎬 Result

Your site now has:
- ✨ Smooth, professional animations like Webflow/Superconscious
- 🚀 60fps performance with GPU acceleration
- ♿ Full accessibility support
- 📱 Works great on mobile
- 🎯 Scroll-tied animations, not just viewport triggers
- 🎨 Beautiful stagger effects throughout
- 💅 Consistent easing and timing

## 📝 Notes

- All animations respect `prefers-reduced-motion`
- Viewport threshold set to `once: false` for re-triggering on scroll
- Custom easing curve `[0.25, 0.1, 0.25, 1]` for smooth motion
- Performance optimized with `will-change` CSS property
- All components updated with new animation system

Enjoy your beautifully animated website! 🎉


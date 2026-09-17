const EASE_BOUNCE = [0.34, 1.56, 0.64, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: EASE_BOUNCE },
  }),
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE_BOUNCE },
  }),
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

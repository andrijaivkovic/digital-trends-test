export const NAVIGATION_OPAQUE_TRESHOLD = 100;
export const SPOTIFY_VISIBILTY_TRESHOLD_DESKTOP = 900;
export const SPOTIFY_VISIBILTY_TRESHOLD_MOBILE = 400;
export const LAZY_LOAD_OFFSET = 700;
export const VOLUME_READ_OBSERVER_DELAY = 1000;
export const TOAST_AUTOREMOVE_TIMER = 3000;

const elementsMotionVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

export const elementsMotionProps = {
  variants: elementsMotionVariants,
  initial: "initial",
  whileInView: "animate",
  exit: "exit",
  viewport: {
    once: true,
    amount: 0.45,
  },
  transition: {
    y: { duration: 0.45, ease: [0.65, 0, 0.35, 1] },
    opacity: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
  },
};

export const spotifyEpisodesLinks = [
  "2v0SbKnBTN8HvVXXGzJB9t",
  "53BprVHrgAf2RMYefRDHst",
  "4f6cmFL0ve5EsAhfO7HmTc",
  "1VVqFTo36SuUxRWO1FkDzm",
  "44Fn7eTOUEwrK1UompxZ32",
  "1YheF0kAjPeHkRQS4kQnzY",
  "1VcbFJLvdunLLSA8YZIZmD",
  "4SrrKEnZzk9RPEKfGsuISt",
];

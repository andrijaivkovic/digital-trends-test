export const NAVIGATION_OPAQUE_TRESHOLD = 100;
export const SPOTIFY_VISIBILTY_TRESHOLD_DESKTOP = 1100;
export const SPOTIFY_VISIBILTY_TRESHOLD_MOBILE = 400;
export const LAZY_LOAD_OFFSET = 700;
export const VOLUME_READ_OBSERVER_DELAY = 1000;

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
    once: false,
    amount: 0.45,
    // margin: "-200px",
  },
  transition: {
    y: { duration: 0.4, ease: "easeInOut" },
    opacity: { duration: 0.5, ease: "easeInOut" },
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

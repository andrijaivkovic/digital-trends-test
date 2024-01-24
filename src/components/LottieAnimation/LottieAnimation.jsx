import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const LottieAnimation = ({ className, path, loop, autoplay, delay }) => {
  const lottieAnimationContainer = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieAnimationContainer.current,
      renderer: "svg",
      loop: loop,
      autoplay: autoplay,
      path: path,
    });

    if (autoplay) {
      setTimeout(() => {
        animation.play();
      }, delay);
    }
  }, [autoplay, loop, path, delay]);

  return <div className={className} ref={lottieAnimationContainer}></div>;
};

export default LottieAnimation;

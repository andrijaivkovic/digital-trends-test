import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "../../contexts/useApp";

import Toast from "../Toast/Toast";

const ToastList = () => {
  const { language, toastNotifications } = useApp();

  return (
    <motion.div
      transition={{ layout: { duration: 0.33, ease: "easeInOut" } }}
      className="toast-list"
    >
      <AnimatePresence initial="false">
        {toastNotifications.map((toast, index) => {
          return (
            <Toast
              index={index}
              key={toast.id}
              language={language}
              toast={toast}
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToastList;

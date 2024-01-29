import { AnimatePresence } from "framer-motion";
import { useApp } from "../../contexts/useApp";

import Toast from "../Toast/Toast";

const ToastList = () => {
  const { language, toastNotifications } = useApp();

  return (
    <div className="toast-list">
      <AnimatePresence initial="false">
        {toastNotifications.map((toast) => {
          return <Toast key={toast.id} language={language} toast={toast} />;
        })}
      </AnimatePresence>
    </div>
  );
};

export default ToastList;

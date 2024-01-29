import { createContext, useContext, useEffect, useReducer } from "react";

const getPreferredLanuage = () => {
  return localStorage.getItem("preferredLanguage");
};

const getReadVolumes = () => {
  const readVolumes = JSON.parse(localStorage.getItem("readVolumes"));
  if (!readVolumes) return [];

  return readVolumes;
};

const handleToggleLanguage = (language) => {
  if (language === "en-US") return "sr-Lat";
  if (language === "sr-Lat") return "en-US";
};

const AppContext = createContext();

const initialState = {
  language: getPreferredLanuage(),
  currentVolumeNumber: null,
  readVolumes: getReadVolumes(),
  toastNotifications: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "language/toggled":
      return {
        ...state,
        language: handleToggleLanguage(state.language),
      };

    case "language/changed":
      return { ...state, language: action.payload };

    case "volume/read":
      return {
        ...state,
        readVolumes: state.readVolumes.includes(action.payload)
          ? state.readVolumes
          : [...state.readVolumes, action.payload],
      };

    case "volume/changed":
      return { ...state, currentVolumeNumber: action.payload };

    case "toast/added":
      return {
        ...state,
        toastNotifications: [...state.toastNotifications, action.payload],
      };

    case "toast/removed":
      return {
        ...state,
        toastNotifications: state.toastNotifications.filter(
          (toast) => toast.id !== action.payload.id
        ),
      };

    default:
      throw new Error("Unknown action inside useApp reducer!");
  }
};

const AppProvider = ({ children }) => {
  const [
    { language, currentVolumeNumber, readVolumes, toastNotifications },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    if (language) localStorage.setItem("preferredLanguage", language);
  }, [language]);

  useEffect(() => {
    if (!language) {
      const userSystemLanguage = navigator.language;

      if (!userSystemLanguage.includes("sr")) {
        dispatch({ type: "language/changed", payload: "en-US" });
      }

      if (userSystemLanguage.includes("sr")) {
        dispatch({ type: "language/changed", payload: "sr-Lat" });
      }
    }
  }, [language]);

  useEffect(() => {
    if (!readVolumes) return;
    localStorage.setItem("readVolumes", JSON.stringify(readVolumes));
  }, [readVolumes]);

  return (
    <AppContext.Provider
      value={{
        language,
        currentVolumeNumber,
        readVolumes,
        toastNotifications,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("This context was used outside of AppProvider!");

  return context;
};

export { useApp, AppProvider };

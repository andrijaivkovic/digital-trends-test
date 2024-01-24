const ClearLocalStorage = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <button onClick={() => clearLocalStorage()} className="clear-local-storage">
      Clear local storage
    </button>
  );
};

export default ClearLocalStorage;

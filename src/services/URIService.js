export const URIService = (function() {
  const getSavedMarkdown = () => {
    let savedMarkdown;
    if (window.location.pathname !== "/") {
      try {
        return atob(window.location.pathname.slice(1));
      } catch (e) {
        return null
      }
    }
    return null;
  }
  
  return { getSavedMarkdown };
})();

// const ACCESS_TOKEN = "458227757495ec772db9cc9731df407e23cd10cd"
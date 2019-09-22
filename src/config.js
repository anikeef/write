export const config = {
  get uriBase() {
    return (window.location.host === "localhost:3000") ? 
      "localhost:3000/" : "https://anikeef.github.io/write/";
  },

  get baseName() {
    return (window.location.host === "localhost:3000") ? 
      "/" : "write/";
  }
}
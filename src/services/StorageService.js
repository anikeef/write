import { APIService } from './APIService';

export const StorageService = (function() {
  const cacheMarkdown = (markdown) => {
    window.localStorage.setItem('markdown', markdown);
  }

  const getCachedMarkdown = () => {
    return window.localStorage.getItem('markdown') || '';
  }

  const createLink = (text) => {
    return APIService.post({ content: text })
      .then((result) => {
        if (result.error) {
          return Promise.reject('Server error: ' + result.error);
        }
        return result.uri
      });
  }

  const getMarkdown = (id) => {
    return APIService.get(id)
      .then((result) => {
        if (result.error) {
          // return Promise.reject('Server error: ' + result.error);
          throw Error('Server error: ' + result.error);
        }
        return result.content;
      });
  }

  return { createLink, getMarkdown, cacheMarkdown, getCachedMarkdown };
})();

// export const StorageService = (function() {
//   const _extractIdFromURI = (uri) => {
//     return uri.split("/").slice(-1);
//   }

//   const getCachedMarkdown = () => {
//     return window.localStorage.getItem('markdown') || '';
//   }

//   const createLink = (text) => {
//     return MyJsonService.post({ markdown: text })
//       .then(
//         (json) => config.uriBase + _extractIdFromURI(json.uri),
//         (error) => console.log(error)
//       );
//   }

//   const getMarkdown = (id) => {
//     return MyJsonService.get(id).then(
//         (json) => json.markdown,
//         (error) => console.log(error)
//       )
//   }

//   const cacheMarkdown = (markdown) => {
//     window.localStorage.setItem('markdown', markdown);
//   }

//   return { createLink, getMarkdown, cacheMarkdown, getCachedMarkdown };
// })();
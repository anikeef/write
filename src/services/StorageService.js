import { MyJsonService } from './MyJsonService';

const URL_BASE = 'localhost:3000/'

export const StorageService = (function() {
  const _extractIdFromURI = (uri) => {
    return uri.split("/").slice(-1);
  }

  const _getCachedMarkdown = () => {
    return window.localStorage.getItem('markdown') || '';
  }

  const createLink = (text) => {
    return MyJsonService.post({ markdown: text })
      .then(
        (json) => URL_BASE + _extractIdFromURI(json.uri),
        (error) => console.log(error)
      );
  }

  const getMarkdownFromCurrentURI = () => {
    const pathname = window.location.pathname;
    if (pathname === '/') return Promise.resolve(_getCachedMarkdown());
    return MyJsonService.get(_extractIdFromURI(pathname)).then(
        (json) => json.markdown,
        (error) => console.log(error)
      )
  }

  const cacheMarkdown = (markdown) => {
    window.localStorage.setItem('markdown', markdown);
  }

  return { createLink, getMarkdownFromCurrentURI, cacheMarkdown };
})();
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LiveEditor } from './components/LiveEditor';
import { MarkdownViewer } from './components/MarkdownViewer';
import { config } from './config';
import { aboutText } from './assets/about';

const App = () => {
  return (
    <BrowserRouter basename={ config.baseName }>
      <Switch>
        <Route exact path='/' component={ LiveEditor } />
        <Route exact path='/markdowns/:id' component={ MarkdownViewer } />
        <Route path='/about' render={ () => <LiveEditor preset={ aboutText } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LiveEditor } from './components/LiveEditor';
import { MarkdownViewer } from './components/MarkdownViewer';
import { config } from './config';

const App = () => {
  return (
    <BrowserRouter basename={ config.baseName }>
      <Switch>
        <Route exact path='/' component={ LiveEditor } />
        <Route exact path='/markdowns/:id' component={ MarkdownViewer } />
        <Route path='/about' render={ ({ match }) => <LiveEditor presetId='lejRe' /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

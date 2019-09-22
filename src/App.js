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
        <Route exact path='/:id' component={ MarkdownViewer } />
        <Route path='/:id/edit' render={ ({ match }) => {
          console.log(match);
          return <LiveEditor presetId={match.params.id} /> ;
        } }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LiveEditor } from './live-editor/LiveEditor';
import { MarkdownViewer } from './live-editor/MarkdownViewer';

const App = () => {
  return (
    <BrowserRouter>
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

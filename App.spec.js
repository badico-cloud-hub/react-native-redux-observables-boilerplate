import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
/*
* esses tests ao lado do codigo são importantes para a componentização,
* quando precisam de muitos arquivos de teste podemos criar uma outra pasta de teste para abriga-los,
* como será feito a frente
*/
it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

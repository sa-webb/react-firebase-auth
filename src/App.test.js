import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('App Snapshot', () => {
//   test('renders', () => {
//     const component = renderer.create(
//       <App />
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
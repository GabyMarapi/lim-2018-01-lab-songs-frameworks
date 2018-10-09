import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Deberia tener mostrar un cantante con su nombre e imagen en un carrusel', (done) => {
});
it('Deberia tener mostrar la lista de canciones del cantante actual', (done) => {
});
it('Deberia tener mostrar la lista de canciones ordenadas por likes de mayor a menor', (done) => {
});
it('Deberia sumar un like a  los likes actuales que tiene la cancion al momento de dar click actual 0 - 1', (donde) => {
});
it('Deberia restar un like a los likes actuales que tiene la cancion al momento de dar click actual 1 - 0', () => {
});
it('Deberia tener mostrar siguente indice del array al presionar siguiente i actual 2 - 3', () => {
});
it('Deberia tener mostrar siguente indice del array al presionar anterior i actual 3 - 2', () => {
});
it('Deberia tener mostrar  indice 0 del array al presionar siguiente n(lenght array) n - 0', () => {
});
it('Deberia tener mostrar  indice n(lenght array) del array al presionar atras 1 - n', () => {
});
import {Observable} from 'rxjs/Observable';
import {fromEvent} from 'rxjs/observable/fromEvent';

let observable = fromEvent(document, 'mousemove');

setTimeout(() => {
  let subscription = observable.subscribe((x: any) => addItem(x));
}, 2000);


function addItem(val: any) {
  let node = document.createElement('li');
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
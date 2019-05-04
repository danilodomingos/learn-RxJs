import {Observable} from 'rxjs/Observable';

let observable = Observable.create((observer: any)=> {
  observer.next('Hey guys!');
});

observable.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  let node = document.createElement('li');
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
import {Observable} from 'rxjs/Observable';

let observable = Observable.create((observer: any)=> {
  
  try {

    observer.next('Hey guys!');
    observer.next('How are you?');
    observer.complete();
    observer.next('This will not send!');
  }
  catch (err) {
    observer.error(err);
  }
});

observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed'));

function addItem(val: any) {
  let node = document.createElement('li');
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
import {Observable} from 'rxjs/Observable';

let observable = Observable.create((observer: any)=> {
  
  try {

    observer.next('Hey guys!');
    setInterval(()=> {
      observer.next('I am good');
    }, 2000);
  }
  catch (err) {
    observer.error(err);
  }
});

let observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed'));

let observer2 = observable.subscribe((x: any) => addItem(x));

observer.add(observer2);

setTimeout(()=> {
  observer.unsubscribe()
}, 6000)


function addItem(val: any) {
  let node = document.createElement('li');
  let textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
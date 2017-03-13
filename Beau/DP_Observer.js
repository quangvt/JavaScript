// Observer Pattern

var Subject = function() {
    let observers = [];
    return {
        subsribleObserver: function(observer){
            observers.push(observer);
        },
        unsubcribeObserver: function(observer){
            var index = observers.indexOf(observer);
            if(index > -1) {
                observers.splice(index, 1);
            }
        },
        notifyObserver: function(observer) {
            var index = observers.indexOf(observer);
            if(index > -1) {
                observers[index].notify(index);
            }
        },
        notifyAllObserver: function() {
            for(var i = 0; i < observers.length; i++){
                observers[i].notify(i); // if only .notify() , anther word "no parameter" => same result
            };
        }
    };
};

var Observer = function(number) {
    return {
        notify: function() { // if params number => print: 0, 1, 2, 3 instead of 1, 2, 3, 4
            console.log("Observer " + number + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer(1);
var observer2 = new Observer(2);
var observer3 = new Observer(3);
var observer4 = new Observer(4);

subject.subsribleObserver(observer1);
subject.subsribleObserver(observer2);
subject.subsribleObserver(observer3);
subject.subsribleObserver(observer4);

subject.notifyObserver(observer2);
subject.unsubcribeObserver(observer2);
subject.notifyAllObserver();
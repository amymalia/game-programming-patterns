class Observer {
  onNotify(entity, event) {}
}

class Achievements extends Observer {
  onNotify(entity, event) {
    switch(event) {
      case 'EVENT_ENTITY_FELL':
        console.log(`${entity} fell off a bridge`);
        break;
    }
  }
}

class Subject {
  observers = new Set();

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notify(entity, event) {
    for (let observer of this.observers) {
      observer.onNotify(entity, event);
    }
  }
}

console.log('===== Observer =====');

const falling = new Subject();
const achievements = new Achievements();
falling.addObserver(achievements);
falling.notify('The giant blob', 'EVENT_ENTITY_FELL');
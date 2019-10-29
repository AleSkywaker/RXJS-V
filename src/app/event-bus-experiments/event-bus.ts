export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(obs: Observer);
  unregisterObserver(obs: Observer);
  notifyObservers(data: any);
}

class EventBus implements Subject {
  registerObserver(obs: Observer) {}
  unregisterObserver(obs: Observer) {}
  notifyObservers(data: any) {}
}

import { Observable } from 'rxjs';

function map(project) {
  return new Observable(observer => {
    const sub = this.subscribe({
      next: value => {
        try {
          observer.next(project(value));
        } catch (err) {
          observer.error(err);
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
    return {
      unsubscribe: () => {
        sub.unsubscribe();
      }
    };
  });
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    performance.mark('constructor')
    setTimeout(() => this.printMeasures(), 1000);
  }

  printMarks() {
    // const entries = performance.getEntriesByType("mark");
    // for (const entry of entries) {
    //   console.table(entry.toJSON());
    // }
  }

  printMeasures() {
    const entriesMeasures = performance.getEntriesByType("measure");
    for (const entry of entriesMeasures.filter(ent => !ent.name.includes('Zone'))) {
      // if(entry.duration > 5) {
      //   throw new Error('LONG RUNNING TASK: ' + entry.name);
      // }
      console.table(entry.toJSON());
    }
  }

 ngOnInit() {
    performance.mark('onInit')
    performance.measure('constructorToOnInit', 'constructor','onInit');
  }

  ngAfterViewInit() {
    performance.mark('afterViewInit');
    performance.measure('constructorToAfterViewInit', 'constructor','afterViewInit');
  }

  ngAfterViewChecked() {
    performance.mark('afterViewChecked');
    performance.measure('constructorToAfterViewChecked', 'constructor','afterViewChecked');
  }

  ngAfterContentInit() {
    performance.mark('afterContentInit');
    performance.measure('constructorToAfterContentInit', 'constructor','afterContentInit');
  }

  ngAfterContentChecked() {
    performance.mark('afterContentChecked');
    performance.measure('constructorToAfterContentChecked', 'constructor','afterContentChecked');
  }

  ngDoCheck() {
    performance.mark('doCheck');
    performance.measure('constructorToDoCheck', 'constructor','doCheck');
  }
}

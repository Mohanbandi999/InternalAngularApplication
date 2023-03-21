import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoneComponent } from './childone.component';

fdescribe('ChildoneComponent', () => {
  //let component: ChildoneComponent;
 // let fixture: ComponentFixture<ChildoneComponent>;
   it('First test', ()=>{

    const tax=20;
    expect(tax).toBe(20);
   })

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ ChildoneComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ChildoneComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

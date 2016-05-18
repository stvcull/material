import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MaterialAppComponent } from '../app/material.component';

beforeEachProviders(() => [MaterialAppComponent]);

describe('App: Material', () => {
  it('should create the app',
      inject([MaterialAppComponent], (app: MaterialAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'material works!\'',
      inject([MaterialAppComponent], (app: MaterialAppComponent) => {
    expect(app.title).toEqual('material works!');
  }));
});

import { Component, OnInit } from '@angular/core';
import { ShapeComponent } from '../shape/shape.component';
import { ShapeType } from '../../model/shape-types';
import { MousePosition, Rectangle } from '../../model/shape';

import { Field } from 'dynaform';

@Component({
    selector: 'app-rectangle',
    templateUrl: './rectangle.component.html',
    styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent extends ShapeComponent implements OnInit {

    formFields: Field[] = [
      {
          name: 'x',
          label: 'X:',
          type: 'input',
          inputType: 'text',
          value: ''
      },
      {
          name: 'y',
          label: 'Y:',
          type: 'input',
          inputType: 'text',
          value: ''
      },
      {
          name: 'width',
          label: 'Width:',
          type: 'input',
          inputType: 'text',
          value: ''
      },
      {
          name: 'height',
          label: 'Height:',
          type: 'input',
          inputType: 'text',
          value: ''
      },
    ];

    constructor() {
        super();
        console.log('RectangleComponent constructor');
        this.shape = new Rectangle();
        this.shapeType = ShapeType.Rectangle;
    }

    ngOnInit() {
        console.log('RectangleComponent ngOnInit');
    }

    updateShapeProperties(value: any) {
        console.log('CircleComponent : updateShapeProperties');
        if (this.shape instanceof Rectangle) {
            this.shape.originX = value.x;
            this.shape.originY = value.y;
            this.shape.width = value.width;
            this.shape.height = value.height;
        }
    }

    setStyles() {
        let styles = {
            'stroke': this.shape.shapeProperties.strokeColor,
            'fill': this.shape.shapeProperties.fillColor,
            'stroke-width': this.shape.shapeProperties.strokeWidth
        };
        return styles;
    }

    startDrawing(beginPosition: MousePosition): void {
        console.log('RectanleComponent startDrawing at ', beginPosition);
        if (this.shape instanceof Rectangle) {
            this.shape.originX = beginPosition.x;
            this.shape.originY = beginPosition.y;
        }
    }

    draw(currentPosition: MousePosition): void {
        console.log('RectangleComponent draw');
        if (this.shape instanceof Rectangle) {
            this.shape.width = Math.abs(currentPosition.x - this.shape.originX);
            this.shape.height = Math.abs(currentPosition.y - this.shape.originY);
        }
    }

}

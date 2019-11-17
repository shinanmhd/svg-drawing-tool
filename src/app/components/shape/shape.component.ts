import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Shape, MousePosition, Circle, Rectangle, Square } from '../../model/shape';
import { ShapeType } from '../../model/shape-types';

import { Field } from 'dynaform';

@Component({
    selector: 'app-shape',
    templateUrl: './shape.component.html',
    styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

    @ViewChild('shapeTemplate') shapeTemplate: TemplateRef<any>;

    formFields: Field[] = [];

    public shape: Shape;
    shapeType: ShapeType;
    offset: MousePosition;
    isSelected = false;
    selectionPoints: MousePosition[] = [];

    constructor() {
        console.log('ShapeComponent constructor');
    }

    ngOnInit() {
        console.log('ShapeComponent ngOnInit');
    }

    getFormFields(): Field[] {
      console.log('FIELDS::::::::::', this.formFields);
      return this.formFields;
    }

    setFormFields(fields: any) {
      // this.formFields = fields;
      // console.log('SHAPE VALUES SET::::::::::', fields instanceof Circle);
      console.log('SHAPE SETTING VALUES FOR A ------------------');

      if (fields instanceof Circle) {
        console.log('------> CIRCLE');
        fields = fields as Circle;
        this.formFields[0].value = fields.shapeProperties.name;
        this.formFields[1].value = fields.originX;
        this.formFields[2].value = fields.originY;
        this.formFields[3].value = fields.r;
        this.formFields[4].value = fields.shapeProperties.strokeColor;
        this.formFields[5].value = fields.shapeProperties.fillColor;
        this.formFields[6].value = fields.shapeProperties.strokeWidth;
      } else if (fields instanceof Rectangle) {
        console.log('------> RECTANGLE');
        this.formFields[0].value = fields.originX;
        this.formFields[1].value = fields.originY;
        this.formFields[2].value = fields.width;
        this.formFields[3].value = fields.height;
      } else if (fields instanceof Square) {
        this.formFields[0].value = fields.originX;
      }
    }

    updateShapeProperties(value: any) {
        // console.log('ShapeComponent : updateShapeProperties');
        // console.log('update shape values')
        // this.shape.originX = value.
    }

    startDrawing(beginPosition: MousePosition): void {
        console.log('ShapeComponent: startDrawing at ', beginPosition);
    }

    endDrawing(): void {
        console.log('ShapeComponent: endDrawing()');
    }

    draw(currentPosition: MousePosition): void {
        console.log('ShapeComponent: draw at ', currentPosition);
    }

    setPoint(point: MousePosition): void {
        console.log('ShapeComponent: setPoint at ', point);
    }

    drag(draqPosition: MousePosition): void {
        console.log(this.shape.shapeProperties.name + ' drag at ', draqPosition, ', offset : ', this.offset);
        if (this.offset === undefined) {
            this.offset = Object.assign({}, draqPosition);
            this.offset.x -= this.shape.originX;
            this.offset.y -= this.shape.originY;
        }
        this.shape.originX = (draqPosition.x - this.offset.x);
        this.shape.originY = (draqPosition.y - this.offset.y);
    }

    resizeShape(resizePosition: MousePosition) {
        console.log('ShapeComponent: resizeShape ', resizePosition);
    }

}

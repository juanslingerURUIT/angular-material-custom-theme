import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    formGroup: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            firstName: [null],
            lastName: [null],
            phone: [null]
        });
    }
}
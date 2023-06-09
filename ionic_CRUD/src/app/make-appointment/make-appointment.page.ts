import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../shared/appointment.service';
@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.bookingForm = this.fb.group({
   
      name: [''],
      email: [''],
      mobile: [''],
      nota1: [''],
      nota2: [''],
      nota3: [''],
      nota4: [''],
      nota5: [''],
      total: ['']
    })
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
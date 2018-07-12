import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
declare var swal: any;

@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.component.html',
  styleUrls: ['./sweetalert2.component.scss']
})
export class Sweetalert2Component implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
    }

    showAlert(id) {
        switch (id)
        {
            case 'sweetalert-01':
                swal('Any fool can use a computer');
                break;
            case 'sweetalert-02':
                swal(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                );
                break;
            case 'sweetalert-03':
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="/sweetalert2">Why do I have this issue?</a>',
                });
                break;
            case 'sweetalert-04':
                swal({
                    imageUrl: './images/robot.jpg',
                    imageHeight: 1512,
                    imageAlt: 'A tall image'
                });
                break;
            case 'sweetalert-05':
                swal({
                    title: '<i>HTML</i> <u>example</u>',
                    type: 'info',
                    html:
                    'You can use <b>bold text</b>, ' +
                    '<a href="//github.com">links</a> ' +
                    'and other HTML tags',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Great!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:
                    '<i class="fa fa-thumbs-down"></i>',
                    cancelButtonAriaLabel: 'Thumbs down',
                });
                break;
            case 'sweetalert-06':
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                break;
            case 'sweetalert-07':
                swal({
                    title: 'Custom animation with Animate.css',
                    animation: false,
                    customClass: 'animated tada'
                });
                break;
            case 'sweetalert-08':
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                });
                break;
            case 'sweetalert-09':
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false,
                    reverseButtons: true
                }).then((result) => {
                    if (result.value) {
                        swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    } else if (
                        // Read more about handling dismissals
                        result.dismiss === swal.DismissReason.cancel
                    ) {
                        swal(
                            'Cancelled',
                            'Your imaginary file is safe :)',
                            'error'
                        )
                    }
                });
                break;
            case 'sweetalert-10':
                swal({
                    title: 'Sweet!',
                    text: 'Modal with a custom image.',
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false
                });
                break;
            case 'sweetalert-11':
                swal({
                    title: 'Custom width, padding, background.',
                    width: 600,
                    padding: 100,
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      center left
      no-repeat
    `
                });
                break;
            case 'sweetalert-12':
                swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 5 seconds.',
                    timer: 5000,
                    onOpen: () => {
                        swal.showLoading()
                    }
                }).then((result) => {
                    if (
                        // Read more about handling dismissals
                        result.dismiss === swal.DismissReason.timer
                    ) {
                        console.log('I was closed by the timer')
                    }
                });
                break;
            case 'sweetalert-13':
                swal({
                    title: 'هل تريد الاستمرار؟',
                    confirmButtonText: 'نعم',
                    cancelButtonText: 'لا',
                    showCancelButton: true,
                    showCloseButton: true,
                    target: document.getElementById('rtl-container')
                });
                break;
            case 'sweetalert-14':
                swal({
                    title: 'Submit email to run ajax request',
                    input: 'email',
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    showLoaderOnConfirm: true,
                    preConfirm: (email) => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                if (email === 'taken@example.com') {
                                    swal.showValidationError(
                                        'This email is already taken.'
                                    )
                                }
                                resolve()
                            }, 2000)
                        })
                    },
                    allowOutsideClick: () => !swal.isLoading()
                }).then((result) => {
                    if (result.value) {
                        swal({
                            type: 'success',
                            title: 'Ajax request finished!',
                            html: 'Submitted email: ' + result.value
                        })
                    }
                });
                break;
            case 'sweetalert-15':
                swal.setDefaults({
                    input: 'text',
                    confirmButtonText: 'Next &rarr;',
                    showCancelButton: true,
                    progressSteps: ['1', '2', '3']
                });

                var steps = [
                    {
                        title: 'Question 1',
                        text: 'Chaining swal2 modals is easy'
                    },
                    'Question 2',
                    'Question 3'
                ]

                swal.queue(steps).then((result) => {
                    swal.resetDefaults()

                    if (result.value) {
                        swal({
                            title: 'All done!',
                            html:
                            'Your answers: <pre>' +
                            JSON.stringify(result.value) +
                            '</pre>',
                            confirmButtonText: 'Lovely!'
                        })
                    }
                });
                break;
            case 'sweetalert-16':
                const ipAPI = 'https://api.ipify.org?format=json'
                swal.queue([{
                    title: 'Your public IP',
                    confirmButtonText: 'Show my public IP',
                    text:
                    'Your public IP will be received ' +
                    'via AJAX request',
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        return fetch(ipAPI)
                            .then(response => response.json())
                            .then(data => swal.insertQueueStep(data.ip))
                            .catch(() => {
                                swal.insertQueueStep({
                                    type: 'error',
                                    title: 'Unable to get your public IP'
                                })
                            })
                    }
                }]);
                break;
        }
    }

}

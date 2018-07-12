import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { Dashboard02Component } from './dashboards/dashboard02/dashboard02.component';
import { Dashboard03Component } from './dashboards/dashboard03/dashboard03.component';
import { Dashboard04Component } from './dashboards/dashboard04/dashboard04.component';
import { Dashboard05Component } from './dashboards/dashboard05/dashboard05.component';
import { AccordionsComponent } from './elements/accordions/accordions.component';
import { AlertsComponent } from './elements/alerts/alerts.component';
import { ButtonsComponent } from './elements/buttons/buttons.component';
import { ColorpickerComponent } from './elements/colorpicker/colorpicker.component';

import { DropdownComponent } from './elements/dropdown/dropdown.component';
import { ListsComponent } from './elements/lists/lists.component';
import { ModalComponent } from './elements/modal/modal.component';
import { NavComponent } from './elements/nav/nav.component';


import { NicescrollComponent } from './elements/nicescroll/nicescroll.component';
import { PricingtableComponent } from './elements/pricingtable/pricingtable.component';

import { DataHtmlTableComponent } from './data-table/data-html-table/data-html-table.component';
import { DataLocalComponent } from './data-table/data-local/data-local.component';
import { DataTableComponent } from './data-table/data-table/data-table.component';
import { DatepickerComponent } from './elements/datepicker/datepicker.component';


import { TabsComponent } from './elements/tabs/tabs.component';
import { TypographyComponent } from './elements/typography/typography.component';
import { PopoverTooltipsComponent } from './elements/popover-tooltips/popover-tooltips.component';
import { ProgressComponent } from './elements/progress/progress.component';
import { SwitchComponent } from './elements/switch/switch.component';
import { Sweetalert2Component } from './elements/sweetalert2/sweetalert2.component';
import { MailComponent } from './mail/mail.component';

import { ChartComponent } from './chart/chart.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditorComponent } from './forms/editor/editor.component';
import { FormInputComponent } from './forms/form-input/form-input.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { InputGroupComponent } from './forms/input-group/input-group.component';
import { ToastrComponent } from './forms/toastr/toastr.component';


import { FontawesomeIconComponent } from './icons/fontawesome-icon/fontawesome-icon.component';
import { ThemifyIconsComponent } from './icons/themify-icons/themify-icons.component';
import { WeatherIconComponent } from './icons/weather-icon/weather-icon.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectSummaryComponent } from './pages/project-summary/project-summary.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { AppContactsComponent } from './pages/app-contacts/app-contacts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LayoutContainerComponent } from './pages/layout-container/layout-container.component';
import { ErrorComponent } from './pages/error/error.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

import { MapsComponent } from './maps/maps.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/_layout/layout/layout.component';
import { Layout1Component } from './shared/_layout/layout1/layout1.component';
import { Layout2Component } from './shared/_layout/layout2/layout2.component';
import { Layout3Component } from './shared/_layout/layout3/layout3.component';
import { Layout4Component } from './shared/_layout/layout4/layout4.component';

import { RegisterComponent } from './auth/register/register.component';
import { LockscreenComponent } from './auth/lockscreen/lockscreen.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' },
            {
                path: 'accordions',
                component: AccordionsComponent
            }
            ,
            {
                path: 'alerts',
                component: AlertsComponent
            }
            ,
            {
                path: 'buttons',
                component: ButtonsComponent
            }
            ,
            {
                path: 'colorpicker',
                component: ColorpickerComponent
            }
            ,
            {
                path: 'dropdown',
                component: DropdownComponent
            }
            ,
            {
                path: 'lists',
                component: ListsComponent
            }
            ,
            {
                path: 'modal',
                component: ModalComponent
            }
            ,
            {
                path: 'nav',
                component: NavComponent
            }
            ,
            { path: 'nicescroll', component: NicescrollComponent },
            { path: 'pricingtable', component: PricingtableComponent },
            
            { path: 'data-html-table', component: DataHtmlTableComponent },
            { path: 'data-local', component: DataLocalComponent },
            { path: 'data-table', component: DataTableComponent },
            { path: 'datepicker', component: DatepickerComponent },


            { path: 'tabs', component: TabsComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'popover-tooltips', component: PopoverTooltipsComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'switch', component: SwitchComponent },
            { path: 'sweetalert2', component: Sweetalert2Component },




            { path: 'chart', component: ChartComponent },
            { path: 'calendar', component: CalendarComponent },
            { path: 'editor', component: EditorComponent },
            { path: 'form-input', component: FormInputComponent },
            { path: 'form-validation', component: FormValidationComponent },
            { path: 'input-group', component: InputGroupComponent },
            { path: 'toastr', component: ToastrComponent },


            { path: 'fontawesome-icon', component: FontawesomeIconComponent },
            { path: 'themify-icons', component: ThemifyIconsComponent },
            { path: 'weather-icon', component: WeatherIconComponent },
            { path: 'widgets', component: WidgetsComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'app-contacts', component: AppContactsComponent },
            { path: 'contacts', component: ContactsComponent },
            { path: 'file-manager', component: FileManagerComponent },
            { path: 'invoice', component: InvoiceComponent },
            { path: 'blank', component: BlankComponent },
            { path: 'layout-container', component: LayoutContainerComponent },
            { path: 'error', component: ErrorComponent },
            { path: 'faqs', component: FaqsComponent },

            { path: 'maps', component: MapsComponent },
            { path: 'timeline', component: TimelineComponent },
            { path: 'project-summary', component: ProjectSummaryComponent },
            { path: 'mail', component: MailComponent },
        ]
    },
    
    { path: 'login', component: LoginComponent },

    {
        path: '', component: Layout1Component, children: [
            { path: 'dashboard02', component: Dashboard02Component, pathMatch: 'full' }
        ]
    }

    ,
    {
        path: '', component: Layout2Component, children: [
            { path: 'dashboard03', component: Dashboard03Component }
        ]
    }


    ,
    {
        path: '', component: Layout3Component, children: [
            { path: 'dashboard04', component: Dashboard04Component }
        ]
    }


    ,
    {
        path: '', component: Layout4Component, children: [
            { path: 'dashboard05', component: Dashboard05Component }
        ]
    }
    , { path: 'register', component: RegisterComponent }
    , { path: 'lockscreen', component: LockscreenComponent }
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

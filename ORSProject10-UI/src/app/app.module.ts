import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpServiceService } from './http-service.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataValidator } from './utility/data-validator';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent } from './user/user.component';

import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from "./timetable/timetable-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from "./loader/loader.component";
import { NavbarComponent } from './navbar/navbar.component';

import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { MyprofileComponent } from './user/myprofile.component';
import { AuthService } from './auth-service.service';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './order/orderlist.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailslistComponent } from './productdetails/productdetailslist.component';
import { PatientComponent } from './patient/patient.component';
import { PatientlistComponent } from './patient/patientlist.component';
import { CompanyComponent } from './company/company.component';
import { CompanylistComponent } from './company/companylist.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventorylistComponent } from './inventory/inventorylist.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierlistComponent } from './supplier/supplierlist.component';
import { VehicletrackingComponent } from './vehicletracking/vehicletracking.component';
import { VehicletrackinglistComponent } from './vehicletracking/vehicletrackinglist.component';
import { TransportationComponent } from './transportation/transportation.component';
import { TransportationlistComponent } from './transportation/transportationlist.component';
import { RouteComponent } from './route/route.component';
import { RoutelistComponent } from './route/routelist.component';
import { IssueComponent } from './issue/issue.component';
import { IssuelistComponent } from './issue/issuelist.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employee/employeelist.component';
import { JobComponent } from './job/job.component';
import { JoblistComponent } from './job/joblist.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customerlist.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionslistComponent } from './transactions/transactionslist.component';
import { LoansComponent } from './loans/loans.component';
import { LoanslistComponent } from './loans/loanslist.component';
import { AtmsComponent } from './atms/atms.component';
import { AtmslistComponent } from './atms/atmslist.component';
import { ProjectComponent } from './project/project.component';
import { ProjectlistComponent } from './project/projectlist.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerlistComponent } from './owner/ownerlist.component';
import { FieldComponent } from './field/field.component';
import { FieldlistComponent } from './field/fieldlist.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptoplistComponent } from './laptop/laptoplist/laptoplist.component';
import { MovieComponent } from './movie/movie.component';
import { YComponent } from './y/y.component';
import { MovielistComponent } from './movie/movielist.component';
import { BikeComponent } from './bike/bike.component';
import { BikelistComponent } from './bike/bikelist.component';
import { CarComponent } from './car/car.component';
import { CarlistComponent } from './car/carlist.component';
import { StockComponent } from './stock/stock.component';
import { StocklistComponent } from './stock/stocklist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliolistComponent } from './portfolio/portfoliolist.component';
import { StockanalysisComponent } from './stockanalysis/stockanalysis.component';
import { StockanalysislistComponent } from './stockanalysis/stockanalysislist.component';
import { TradehistoryComponent } from './tradehistory/tradehistory.component';
import { TradehistorylistComponent } from './Tradehistory/tradehistorylist.component';





// import { AuthService } from './auth.service';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MarksheetComponent,
    MarksheetListComponent,
    StudentComponent,
    StudentListComponent,
    CollegeComponent,
    CollegeListComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    MessageComponent,
    MessageListComponent,
    UserComponent,
    UserListComponent,

    RoleComponent,
    RoleListComponent,
    CourseComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,
    ChangepasswordComponent,
    LoaderComponent,
    FileComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    MyprofileComponent,
    OrderComponent,
    OrderlistComponent,
    ProductComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    ProductdetailslistComponent,
    PatientComponent,
    PatientlistComponent,
    CompanyComponent,
    CompanylistComponent,
    InventoryComponent,
    InventorylistComponent,
    SupplierComponent,
    SupplierlistComponent,
    VehicletrackingComponent,
    VehicletrackinglistComponent,
    TransportationComponent,
    TransportationlistComponent,
    RouteComponent,
    RoutelistComponent,
    IssueComponent,
    IssuelistComponent,
    EmployeeComponent,
    EmployeelistComponent,
    JobComponent,
    JoblistComponent,
    CustomerComponent,
    CustomerlistComponent,
    TransactionsComponent,
    TransactionslistComponent,
    LoansComponent,
    LoanslistComponent,
    AtmsComponent,
    AtmslistComponent,
    ProjectComponent,
    ProjectlistComponent,
    OwnerComponent,
    OwnerlistComponent,
    FieldComponent,
    FieldlistComponent,
    LaptopComponent,
    LaptoplistComponent,
    MovieComponent,
    YComponent,
    MovielistComponent,
    BikeComponent,
    BikelistComponent,
    CarComponent,
    CarlistComponent,
    StockComponent,
    StocklistComponent,
    PortfolioComponent,
    PortfoliolistComponent,
    StockanalysisComponent,
    StockanalysislistComponent,
    TradehistoryComponent,
    TradehistorylistComponent





  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    DataValidator,
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule {

}
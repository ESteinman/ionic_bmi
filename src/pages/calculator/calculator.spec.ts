import { CalculatorPage } from "./calculator";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("CalculatorPage", () => {
    let calculator;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CalculatorPage
        ],
        imports: [IonicModule.forRoot(CalculatorPage)],
        providers: [
          { provide: Platform, useFactory: () => PlatformMock.instance() },
          { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
          { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
          { provide: NavController, useFactory: () => NavControllerMock.instance() },
        ]
      }).compileComponents();
    }));
  
    beforeEach(() => {
      let fixture
      fixture = TestBed.createComponent(CalculatorPage);
      calculator = fixture.componentInstance;
    });
  
    it("should create the calculator page", () => {
      expect(calculator).toBeTruthy();
      expect(calculator instanceof CalculatorPage).toEqual(true);
    });

    it('should have calculate function', () => {
        spyOn(calculator, 'calculateBMI'); // we use jasmine to spy on a function
    
       calculator.calculateBMI()
    })

})
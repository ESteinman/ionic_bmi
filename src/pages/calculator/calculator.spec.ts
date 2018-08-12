import { CalculatorPage } from "./calculator";
import { TestBed } from "@angular/core/testing";
import { IonicPageModule, Platform, NavController, NavParams, DomController, Keyboard } from "ionic-angular";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock, ConfigMock, Key } from 'ionic-mocks';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

describe("CalculatorPage", () => {
  
    beforeEach(() => {
      let fixture, component; 

      beforeEach(() => {
          TestBed.configureTestingModule({
              delcarations: [
                  CalculatorPage
              ],
              imports: [
                  IonicPageModule.forChild(CalculatorPage)
              ],
              providers: [
                  { provide: Platform, useFactory: () => PlatformMock.instance() },
                  { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
                  { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
                  { provide: NavController, useFactory: () => NavControllerMock.instance() },
                  { provide: NavParams, useFactory: () => NavParamsMock.instance() },
                  { provide: Config, useFactory: () => ConfigMock.instance () },
                  App, DomController, Keyboard
              ]
          })
      }) 

      fixture = TestBed.createComponent(CalculatorPage);
      calculator = fixture.componentInstance;
    });
  
    it("should create the calculator page", () => {
      expect(calculator).toBeTruthy();
      expect(component instanceof CalculatorPage).toEqual(true);
    });

    it('should have calculate function', () => {
        spyOn(calculator, 'calculateBMI'); // we use jasmine to spy on a function
    
       calculator.calculateBMI()
    });

    it('should have Result message', () => {
        spyOn(calculator, 'setBMIMessage'); // we use jasmine to spy on a function
    
        calculator.setBMIMessage()
    });

    it('BMIMessage should return "Underweight"', () => {
        let bmiValue;
        this bmiValue = ( 18 );
        expect(this.bmiMessage.toEqual("Underweight")
    });


});
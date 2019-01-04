// https://github.com/Ismaestro/angular7-example-app/blob/master/src/app/app.module.ts 
@NgModule({
    imports: [
      FirebaseModule,
      ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: WebpackTranslateLoader
        }
      }),
      NgxExampleLibraryModule.forRoot({
        config: {
          say: 'hello'
        }
      }),
      CoreModule,
      SharedModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent
    ],
    providers: [
      {provide: APP_CONFIG, useValue: AppConfig},
      {provide: ErrorHandler, useClass: SentryErrorHandler}
    ],
    bootstrap: [AppComponent]
  })
  
  export class AppModule {
  }
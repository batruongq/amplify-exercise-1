import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Auth from '@aws-amplify/auth';
import AWSConfig from './aws-exports';

Auth.configure({
  ...AWSConfig,
  aws_user_pools_web_client_id: '5eurvupu43ot0dvs8molvfut8r',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as i18nextConfig from './i18next.config';
import i18next from 'i18next';
// import I18NexFsBackend from 'i18next-fs-backend';
import * as I18NexFsBackend from 'i18next-fs-backend';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  i18next.use(I18NexFsBackend).init(i18nextConfig);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

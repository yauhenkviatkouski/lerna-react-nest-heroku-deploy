import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const listeningResponse = await app.listen(
    parseInt(process.env.PORT) || 4000,
  );
  console.log(
    '🚀 ~ file: main.ts ~ line 7 ~ bootstrap ~ listeningResponse',
    listeningResponse,
  );
}
bootstrap();

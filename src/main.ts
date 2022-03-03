import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('PkNote Swagger')
    .setDescription('PkNote backend API')
    .setVersion('1.0')
    .addTag('beta')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

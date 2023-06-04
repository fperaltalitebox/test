import 'reflect-metadata';
import { NestApplication, NestFactory } from '@nestjs/core';
import * as http from 'http';
import { NextApiHandler } from 'next';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getAbsoluteFSPath } from 'swagger-ui-dist';
import { AppModule } from './app.module';

let app: NestApplication;

export const getApp = async () => {
  if (!app) {
    app = await NestFactory.create(AppModule, { bodyParser: false });
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
      .setTitle('Nestjs over nextjs')
      .setDescription('API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    // Workaround for tree shaking of css files done by Vercel.
    SwaggerModule.setup('api/docs', app, document, {
      customCssUrl: '/swagger-ui.css',
    });

    app.useStaticAssets(getAbsoluteFSPath(), {
      prefix: '/api/docs/',
    });

    await app.init();
  }

  const server: http.Server = app.getHttpServer();
  const [listener] = server.listeners('request') as NextApiHandler[];
  return listener;
};

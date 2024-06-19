import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from './product/product.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
driver: ApolloDriver,
autoSchemaFile:  'src/schema.gql',
}), ProductModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

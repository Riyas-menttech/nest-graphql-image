import { ObjectType, Field, } from '@nestjs/graphql';
import { FileUpload } from '../dto/create-product.input';

@ObjectType()
export class Product {
@Field(() => String)
name: string;
@Field(() => String)
breed: string;
@Field(() => String)
image: Promise<FileUpload>;
}
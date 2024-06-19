import { CreateCatInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateCatInput) {
  @Field(() => Int)
  id: number;
}

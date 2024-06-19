import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateCatInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  async create(@Args('createProduct') createCatInput: CreateCatInput) {
    
    const { image, breed, name } = createCatInput;
    console.log(image,'imagee');
const { createReadStream, filename } = await image;
return new Promise(async (resolve) => {
createReadStream()
.pipe(createWriteStream(join(process.cwd(), `./src/upload/${filename}`)))
.on('finish', () =>
resolve({
breed,
name,
image: filename,
}),
)
.on('error',() => {
// new HttpException('Could not save image');
});
});
}

  @Query(() => [Product], { name: 'product' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}

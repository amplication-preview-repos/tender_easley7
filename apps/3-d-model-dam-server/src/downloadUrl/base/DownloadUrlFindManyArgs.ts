/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DownloadUrlWhereInput } from "./DownloadUrlWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DownloadUrlOrderByInput } from "./DownloadUrlOrderByInput";

@ArgsType()
class DownloadUrlFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DownloadUrlWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DownloadUrlWhereInput, { nullable: true })
  @Type(() => DownloadUrlWhereInput)
  where?: DownloadUrlWhereInput;

  @ApiProperty({
    required: false,
    type: [DownloadUrlOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DownloadUrlOrderByInput], { nullable: true })
  @Type(() => DownloadUrlOrderByInput)
  orderBy?: Array<DownloadUrlOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DownloadUrlFindManyArgs as DownloadUrlFindManyArgs };

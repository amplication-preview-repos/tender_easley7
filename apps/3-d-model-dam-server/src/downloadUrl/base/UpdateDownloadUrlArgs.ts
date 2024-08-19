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
import { DownloadUrlWhereUniqueInput } from "./DownloadUrlWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DownloadUrlUpdateInput } from "./DownloadUrlUpdateInput";

@ArgsType()
class UpdateDownloadUrlArgs {
  @ApiProperty({
    required: true,
    type: () => DownloadUrlWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DownloadUrlWhereUniqueInput)
  @Field(() => DownloadUrlWhereUniqueInput, { nullable: false })
  where!: DownloadUrlWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DownloadUrlUpdateInput,
  })
  @ValidateNested()
  @Type(() => DownloadUrlUpdateInput)
  @Field(() => DownloadUrlUpdateInput, { nullable: false })
  data!: DownloadUrlUpdateInput;
}

export { UpdateDownloadUrlArgs as UpdateDownloadUrlArgs };

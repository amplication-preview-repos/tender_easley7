import * as graphql from "@nestjs/graphql";
import { UpdateModelInput } from "../modelManagement/UpdateModelInput";
import { ModelManagementService } from "./modelmanagement.service";

export class ModelManagementResolver {
  constructor(protected readonly service: ModelManagementService) {}

  @graphql.Mutation(() => UpdateModelInput)
  async UpdateModelWithSameUrl(
    @graphql.Args()
    args: UpdateModelInput
  ): Promise<UpdateModelInput> {
    return this.service.UpdateModelWithSameUrl(args);
  }
}

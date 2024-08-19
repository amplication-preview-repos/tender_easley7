import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ModelManagementService } from "./modelmanagement.service";
import { UpdateModelInput } from "../modelManagement/UpdateModelInput";

@swagger.ApiTags("modelManagements")
@common.Controller("modelManagements")
export class ModelManagementController {
  constructor(protected readonly service: ModelManagementService) {}

  @common.Patch("/:id/update")
  @swagger.ApiOkResponse({
    type: UpdateModelInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateModelWithSameUrl(
    @common.Body()
    body: UpdateModelInput
  ): Promise<UpdateModelInput> {
        return this.service.UpdateModelWithSameUrl(body);
      }
}

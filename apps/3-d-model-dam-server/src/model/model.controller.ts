import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModelService } from "./model.service";
import { ModelControllerBase } from "./base/model.controller.base";

@swagger.ApiTags("models")
@common.Controller("models")
export class ModelController extends ModelControllerBase {
  constructor(
    protected readonly service: ModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

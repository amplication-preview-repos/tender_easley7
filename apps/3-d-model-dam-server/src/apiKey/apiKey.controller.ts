import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiKeyService } from "./apiKey.service";
import { ApiKeyControllerBase } from "./base/apiKey.controller.base";

@swagger.ApiTags("apiKeys")
@common.Controller("apiKeys")
export class ApiKeyController extends ApiKeyControllerBase {
  constructor(
    protected readonly service: ApiKeyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

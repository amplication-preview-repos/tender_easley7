import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DownloadUrlService } from "./downloadUrl.service";
import { DownloadUrlControllerBase } from "./base/downloadUrl.controller.base";

@swagger.ApiTags("downloadUrls")
@common.Controller("downloadUrls")
export class DownloadUrlController extends DownloadUrlControllerBase {
  constructor(
    protected readonly service: DownloadUrlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

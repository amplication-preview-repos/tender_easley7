import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DownloadUrlResolverBase } from "./base/downloadUrl.resolver.base";
import { DownloadUrl } from "./base/DownloadUrl";
import { DownloadUrlService } from "./downloadUrl.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DownloadUrl)
export class DownloadUrlResolver extends DownloadUrlResolverBase {
  constructor(
    protected readonly service: DownloadUrlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

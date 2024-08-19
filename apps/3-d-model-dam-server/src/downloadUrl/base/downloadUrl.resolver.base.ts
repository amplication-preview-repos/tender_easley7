/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DownloadUrl } from "./DownloadUrl";
import { DownloadUrlCountArgs } from "./DownloadUrlCountArgs";
import { DownloadUrlFindManyArgs } from "./DownloadUrlFindManyArgs";
import { DownloadUrlFindUniqueArgs } from "./DownloadUrlFindUniqueArgs";
import { CreateDownloadUrlArgs } from "./CreateDownloadUrlArgs";
import { UpdateDownloadUrlArgs } from "./UpdateDownloadUrlArgs";
import { DeleteDownloadUrlArgs } from "./DeleteDownloadUrlArgs";
import { ApiKey } from "../../apiKey/base/ApiKey";
import { Model } from "../../model/base/Model";
import { DownloadUrlService } from "../downloadUrl.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DownloadUrl)
export class DownloadUrlResolverBase {
  constructor(
    protected readonly service: DownloadUrlService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DownloadUrl",
    action: "read",
    possession: "any",
  })
  async _downloadUrlsMeta(
    @graphql.Args() args: DownloadUrlCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DownloadUrl])
  @nestAccessControl.UseRoles({
    resource: "DownloadUrl",
    action: "read",
    possession: "any",
  })
  async downloadUrls(
    @graphql.Args() args: DownloadUrlFindManyArgs
  ): Promise<DownloadUrl[]> {
    return this.service.downloadUrls(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DownloadUrl, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DownloadUrl",
    action: "read",
    possession: "own",
  })
  async downloadUrl(
    @graphql.Args() args: DownloadUrlFindUniqueArgs
  ): Promise<DownloadUrl | null> {
    const result = await this.service.downloadUrl(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DownloadUrl)
  @nestAccessControl.UseRoles({
    resource: "DownloadUrl",
    action: "create",
    possession: "any",
  })
  async createDownloadUrl(
    @graphql.Args() args: CreateDownloadUrlArgs
  ): Promise<DownloadUrl> {
    return await this.service.createDownloadUrl({
      ...args,
      data: {
        ...args.data,

        apiKey: args.data.apiKey
          ? {
              connect: args.data.apiKey,
            }
          : undefined,

        model: args.data.model
          ? {
              connect: args.data.model,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DownloadUrl)
  @nestAccessControl.UseRoles({
    resource: "DownloadUrl",
    action: "update",
    possession: "any",
  })
  async updateDownloadUrl(
    @graphql.Args() args: UpdateDownloadUrlArgs
  ): Promise<DownloadUrl | null> {
    try {
      return await this.service.updateDownloadUrl({
        ...args,
        data: {
          ...args.data,

          apiKey: args.data.apiKey
            ? {
                connect: args.data.apiKey,
              }
            : undefined,

          model: args.data.model
            ? {
                connect: args.data.model,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DownloadUrl)
  @nestAccessControl.UseRoles({
    resource: "DownloadUrl",
    action: "delete",
    possession: "any",
  })
  async deleteDownloadUrl(
    @graphql.Args() args: DeleteDownloadUrlArgs
  ): Promise<DownloadUrl | null> {
    try {
      return await this.service.deleteDownloadUrl(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ApiKey, {
    nullable: true,
    name: "apiKey",
  })
  @nestAccessControl.UseRoles({
    resource: "ApiKey",
    action: "read",
    possession: "any",
  })
  async getApiKey(
    @graphql.Parent() parent: DownloadUrl
  ): Promise<ApiKey | null> {
    const result = await this.service.getApiKey(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Model, {
    nullable: true,
    name: "model",
  })
  @nestAccessControl.UseRoles({
    resource: "Model",
    action: "read",
    possession: "any",
  })
  async getModel(@graphql.Parent() parent: DownloadUrl): Promise<Model | null> {
    const result = await this.service.getModel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
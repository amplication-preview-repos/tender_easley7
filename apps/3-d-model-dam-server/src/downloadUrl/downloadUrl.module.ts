import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DownloadUrlModuleBase } from "./base/downloadUrl.module.base";
import { DownloadUrlService } from "./downloadUrl.service";
import { DownloadUrlController } from "./downloadUrl.controller";
import { DownloadUrlResolver } from "./downloadUrl.resolver";

@Module({
  imports: [DownloadUrlModuleBase, forwardRef(() => AuthModule)],
  controllers: [DownloadUrlController],
  providers: [DownloadUrlService, DownloadUrlResolver],
  exports: [DownloadUrlService],
})
export class DownloadUrlModule {}

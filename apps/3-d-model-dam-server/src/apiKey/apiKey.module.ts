import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiKeyModuleBase } from "./base/apiKey.module.base";
import { ApiKeyService } from "./apiKey.service";
import { ApiKeyController } from "./apiKey.controller";
import { ApiKeyResolver } from "./apiKey.resolver";

@Module({
  imports: [ApiKeyModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiKeyController],
  providers: [ApiKeyService, ApiKeyResolver],
  exports: [ApiKeyService],
})
export class ApiKeyModule {}

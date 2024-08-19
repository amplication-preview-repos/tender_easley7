import { Module } from "@nestjs/common";
import { ModelManagementService } from "./modelmanagement.service";
import { ModelManagementController } from "./modelmanagement.controller";
import { ModelManagementResolver } from "./modelmanagement.resolver";

@Module({
  controllers: [ModelManagementController],
  providers: [ModelManagementService, ModelManagementResolver],
  exports: [ModelManagementService],
})
export class ModelManagementModule {}

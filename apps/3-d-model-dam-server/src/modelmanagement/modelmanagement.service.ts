import { Injectable } from "@nestjs/common";
import { UpdateModelInput } from "../modelManagement/UpdateModelInput";

@Injectable()
export class ModelManagementService {
  constructor() {}
  async UpdateModelWithSameUrl(args: UpdateModelInput): Promise<UpdateModelInput> {
    throw new Error("Not implemented");
  }
}

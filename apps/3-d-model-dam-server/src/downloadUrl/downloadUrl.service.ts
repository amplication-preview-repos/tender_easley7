import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DownloadUrlServiceBase } from "./base/downloadUrl.service.base";

@Injectable()
export class DownloadUrlService extends DownloadUrlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

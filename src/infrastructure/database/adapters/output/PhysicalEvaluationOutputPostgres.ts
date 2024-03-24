import { PhysicalEvaluationDTO } from "../jpa/dto/PhysicalEvaluationDTO";
import { AppDataSource } from '../../data-source';
import { Repository } from 'typeorm';
import { PhysicalEvaluation } from "../../../../domain/entity/PhysicalEvaluation";
import { PhysicalEvaluationDtoToPhysicalEvaluation } from "./converters/PhysicalEvaluationDtoToPhysicalEvaluation";

export class PhysicalEvaluationOutputPostgres {
    repository: Repository<PhysicalEvaluationDTO>;
    constructor() {
      this.repository = AppDataSource.getRepository(PhysicalEvaluationDTO);
    }

    async savePhysicalEvaluation(physicalEvaluation: PhysicalEvaluation): Promise<PhysicalEvaluation> {
      const physicalEvaluationDto = await this.repository.save(this.toDto(physicalEvaluation));
      return PhysicalEvaluationDtoToPhysicalEvaluation.convert(physicalEvaluationDto);
    }

    async getAllPhysicalEvaluationByUserId(userId: number): Promise<PhysicalEvaluation[]> {
      return await this.repository
          // .createQueryBuilder()
          // .select("physicalEvaluationDto")
          // .from(PhysicalEvaluationDTO, "physicalEvaluationDto")
          // .where("physicalEvaluation.userId = :userId", {userId}).getMany();
      .query(`select * from physical_evaluation_dto ped where ped.userId = ${userId}`);
    }

    private toDto(physicalEvaluation: PhysicalEvaluation): PhysicalEvaluationDTO {
        return new PhysicalEvaluationDTO(physicalEvaluation.id, physicalEvaluation.date, physicalEvaluation.user, physicalEvaluation.weight, physicalEvaluation.chest, physicalEvaluation.abdominal, physicalEvaluation.thigh, physicalEvaluation.tricep, physicalEvaluation.subscapular,
            physicalEvaluation.suprailiac, physicalEvaluation.midaxillary, physicalEvaluation.arm, physicalEvaluation.forearm, physicalEvaluation.chestPerimeter, physicalEvaluation.waist, physicalEvaluation.hip, physicalEvaluation.leg, physicalEvaluation.calf);
    }
}
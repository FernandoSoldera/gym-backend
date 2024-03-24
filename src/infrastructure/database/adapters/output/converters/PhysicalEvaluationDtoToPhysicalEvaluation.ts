import { PhysicalEvaluation } from "../../../../../domain/entity/PhysicalEvaluation";
import { PhysicalEvaluationDTO } from "../../jpa/dto/PhysicalEvaluationDTO";

export class PhysicalEvaluationDtoToPhysicalEvaluation {
    static convert(physicalEvaluationDTO: PhysicalEvaluationDTO) {
        return new PhysicalEvaluation(physicalEvaluationDTO.id, physicalEvaluationDTO.date, physicalEvaluationDTO.user, physicalEvaluationDTO.weight, physicalEvaluationDTO.chest, physicalEvaluationDTO.abdominal, physicalEvaluationDTO.thigh, physicalEvaluationDTO.tricep, physicalEvaluationDTO.subscapular,
            physicalEvaluationDTO.suprailiac, physicalEvaluationDTO.midaxillary, physicalEvaluationDTO.arm, physicalEvaluationDTO.forearm, physicalEvaluationDTO.chestPerimeter, physicalEvaluationDTO.waist, physicalEvaluationDTO.hip, physicalEvaluationDTO.leg, physicalEvaluationDTO.calf);
    }
}
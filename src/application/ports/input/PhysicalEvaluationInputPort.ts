import { PhysicalEvaluation } from "../../../domain/entity/PhysicalEvaluation";
import { PhysicalEvaluationRequest } from "../../../domain/requests/PhysicalEvaluationRequest";
import { PhysicalEvaluationOutputPostgres } from "../../../infrastructure/database/adapters/output/PhysicalEvaluationOutputPostgres";
import { UserOutputPostgres } from "../../../infrastructure/database/adapters/output/UserOutputPostgres";

export class PhysicalEvaluationInputPort {
    physicalEvaluationOutputPostgres: PhysicalEvaluationOutputPostgres;
    userOutputPostgres: UserOutputPostgres;
    constructor() {
      this.physicalEvaluationOutputPostgres = new PhysicalEvaluationOutputPostgres();
      this.userOutputPostgres = new UserOutputPostgres();
    }

    async savePhysicalEvaluation(physicalEvaluationRequest: PhysicalEvaluationRequest, userId: number): Promise<PhysicalEvaluation> {
        const user = await this.userOutputPostgres.getUserById(userId);

        const physicalEvaluation = new PhysicalEvaluation(0, new Date(), user, physicalEvaluationRequest.weight, physicalEvaluationRequest.chest, physicalEvaluationRequest.abdominal, physicalEvaluationRequest.thigh, physicalEvaluationRequest.tricep, physicalEvaluationRequest.subscapular,
            physicalEvaluationRequest.suprailiac, physicalEvaluationRequest.midaxillary, physicalEvaluationRequest.arm, physicalEvaluationRequest.forearm, physicalEvaluationRequest.chestPerimeter, physicalEvaluationRequest.waist, physicalEvaluationRequest.hip, physicalEvaluationRequest.leg, physicalEvaluationRequest.calf);

        return await this.physicalEvaluationOutputPostgres.savePhysicalEvaluation(physicalEvaluation);
    }

    async getAllPhysicalEvaluationByUserId(userId: number): Promise<PhysicalEvaluation[]> {
        return await this.getAllPhysicalEvaluationByUserId(userId);
    }
}
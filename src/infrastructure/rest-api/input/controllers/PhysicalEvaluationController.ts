import { Request, Response, Router } from 'express';
import { PhysicalEvaluationInputPort } from '../../../../application/ports/input/PhysicalEvaluationInputPort';

const router = Router();

router.post('/physicalEvaluation/:userId', async (req: Request, res: Response) => {
  const physicalEvaluationInputPort = new PhysicalEvaluationInputPort();
  const response = await physicalEvaluationInputPort.savePhysicalEvaluation(req.body, parseInt(req.params.userId));

  res.status(201).json(response);
});

router.get('/physicalEvaluation/:userId', async (req: Request, res: Response) => {
    const physicalEvaluationInputPort = new PhysicalEvaluationInputPort();
    const response = await physicalEvaluationInputPort.getAllPhysicalEvaluationByUserId(parseInt(req.params.userId));
  
    res.status(200).json(response);
  });

export default router;
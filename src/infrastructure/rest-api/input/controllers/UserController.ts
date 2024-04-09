import { UserInputPort } from '../../../../application/ports/input/UserInputPort';
import { Request, Response, Router } from 'express';
import { UserToUserResponse } from '../converters/UserToUserResponse';

const router = Router();

router.post('/user', async (req: Request, res: Response) => {
  const userInputPort = new UserInputPort();
  const response = await userInputPort.saveUser(req.body);

  res.status(201).json(response);
});

router.get('/user', async (req: Request, res: Response) => {
  const userInputPort = new UserInputPort();
  var response = await userInputPort.getAllUsers();

  res.status(200).json(response);
});

router.get('/user/:id', async (req: Request, res: Response) => {
  const userInputPort = new UserInputPort();
  var response = await userInputPort.getUserById(parseInt(req.params.id));

  res.status(200).json(UserToUserResponse.convert(response));
});

router.delete('/user/:id', async (req: Request, res: Response) => {
  const userInputPort = new UserInputPort();
  await userInputPort.deleteUserById(parseInt(req.params.id));

  res.status(200).json("User deleted with success");
});

router.post('/user/login', async (req: Request, res: Response) => {
  const userInputPort = new UserInputPort();
  var response = await userInputPort.login(req.body.email, req.body.password);
  if(response !== 'Authentication failed') {
    res.status(200).json({token: response});
  } else {
    res.status(401).json({ error: response });
  }
});

export default router;

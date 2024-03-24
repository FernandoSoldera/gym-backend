import express from 'express';
import routes from './infrastructure/routes';
import cors from 'cors'

const app = express();

const corsOptions = {
  credentials: false,
  origin: ['http://localhost:3000', 'http://localhost:3001'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions))

app.use(express.json());
app.use(routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

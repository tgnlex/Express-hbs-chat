import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>').status(200);
})

export default router;

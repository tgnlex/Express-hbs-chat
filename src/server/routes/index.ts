import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
  // res.sendStatus(200);
  res.status(200).render('index');
})

router.get('/blog', (req, res) => {
  res.status(200).render('blog');
});

export default router;

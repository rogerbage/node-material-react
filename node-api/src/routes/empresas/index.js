import express from 'express';
import { loadEmpresasRouteHandler, listEmpresasRouteHandler } from "../../services/empresas";
const router = express.Router();


router.get('/load', async  (req, res) => {

  let jsonData = await loadEmpresasRouteHandler(req, res);
  res.send({
      data: jsonData,
    });
  
});

router.get('/list', async  (req, res) => {

  let jsonData = await listEmpresasRouteHandler(req, res);
  res.send({
      data: jsonData,
    });
  
});


export default router;

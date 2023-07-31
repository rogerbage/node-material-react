import HttpService from "./htttp.service";

class EmpresaService {
  // authEndpoint = process.env.API_URL;

  list = async (payload) => {
    const listEmpresaEndpoint = 'empresas/list';
    return await HttpService.get(listEmpresaEndpoint, payload);
  };



}

export default new EmpresaService();

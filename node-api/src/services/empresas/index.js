import { readFile } from 'fs/promises';
import { empresaModel } from "../../schemas/empresa.schema";


export const loadEmpresasRouteHandler = async (req, res) => {
    // const meUser = req.user;  
    // const stringId = req.user.id;
    let jsonData = await getJsonFile()
    const saves = await Promise.map(jsonData.empresas, async (empresa) => {
        const newEmpresa = new empresaModel({
            name: empresa.nome,
            codes: empresa.codigos,
            cnpj: empresa.cnpj,
            structuring_bank: empresa.banco_estruturador,
         });
        let save = await newEmpresa.save();
        console.log("Empresa: ", save);
    });
    return jsonData
}

export const listEmpresasRouteHandler = async (req, res) => {
    const empresas = await empresaModel.find({}, {}).sort({
        nome: -1
    });
    console.log(empresas);
    return empresas;
}

async function getJsonFile(){
    const json = JSON.parse(
        await readFile(
        new URL('data/empresas.json', import.meta.url)
        )
    );
    return json
}
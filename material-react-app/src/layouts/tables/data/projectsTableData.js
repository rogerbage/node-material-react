/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from 'react';
// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import empresaService from "services/empresa-service";
import htttpService from "services/htttp.service";



async function listaEmpresas(){
  
  let empresaRows = [];
  let empresaList = await empresaService.list();
  
  console.log("EmpresaList: ", empresaList);
  
  empresaList.data.map( empresa => {
    console.log(empresa.name);
    let eRow =  {
      nome: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {empresa.name}
        </MDTypography>
      ),
      codigos: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          {empresa.codes}
        </MDTypography>
      ),
      cnpj: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {empresa.cnpj}
        </MDTypography>
      ),
      banco: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {empresa.structuring_bank}
        </MDTypography>
      ),
    };
    empresaRows.push(eRow);
  });
  return empresaRows;
}


export default function data() {
  // const Project = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" variant="rounded" />
  //     <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </MDTypography>
  //   </MDBox>
  // );

  // const Progress = ({ color, value }) => (
  //   <MDBox display="flex" alignItems="center">
  //     <MDTypography variant="caption" color="text" fontWeight="medium">
  //       {value}%
  //     </MDTypography>
  //     <MDBox ml={0.5} width="9rem">
  //       <MDProgress variant="gradient" color={color} value={value} />
  //     </MDBox>
  //   </MDBox>
  // );

  const [empresaRows, setEmpresaRows] = useState([]);

  
  useEffect(() => {
    let eRow = [];
    async function getEmpresas() {
        eRow = await listaEmpresas();
        setEmpresaRows(eRow)
    }
    getEmpresas();
 }, []);

  console.log("Aqui: ", empresaRows);


  // let empresaRows = await listaEmpresas();
  // listaEmpresas().then( eRows => {
  //   empresaRows = eRows;
  // });
  // console.log("empresarows: ", empresaRows);
 


  return {
    columns: [
      { Header: "nome", accessor: "nome", width: "30%", align: "left" },
      { Header: "codigos", accessor: "codigos", align: "left" },
      { Header: "cnpj", accessor: "cnpj", align: "center" },
      { Header: "banco", accessor: "banco", align: "center" },
    ],
    rows: empresaRows,
  };
}

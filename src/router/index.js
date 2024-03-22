import Vue from "vue";
import VueRouter from "vue-router";
import InicioFonasa from "@/components/InicioFonasa.vue";
//import AtenderPacientes from "@/components/AtenderPacientes.vue";
import AtenderPaciente from "@/components/AtenderPaciente.vue";
import ConsultasMasPacientes from "@/components/ConsultasMasPacientes.vue";
import LiberarConsultas from "@/components/LiberarConsultas.vue";
import PacientesFumadores from "@/components/PacientesFumadores.vue";
import PacientesMayorRiesgo from "@/components/PacientesMayorRiesgo.vue";
import OptimizarAtencion from "@/components/OptimizarAtencion.vue";
import PacienteMasAnciano from "@/components/PacienteMasAnciano.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "InicioFonasa",
    component: InicioFonasa,
  },
  {
    path: "/atender-paciente",
    name: "AtenderPaciente",
    component: AtenderPaciente,
  },
  {
    path: "/consultas-mas-pacientes",
    name: "ConsultasMasPacientes",
    component: ConsultasMasPacientes,
  },
  {
    path: "/liberar-consultas",
    name: "LiberarConsultas",
    component: LiberarConsultas,
  },
  {
    path: "/fumadores-urgentes",
    name: "PacientesFumadores",
    component: PacientesFumadores,
  },
  {
    path: "/mayor-riesgo/:numHistoriaClinica",
    name: "PacientesMayorRiesgo",
    component: PacientesMayorRiesgo,
  },
  {
    path: "/optimizar-atencion",
    name: "OptimizarAtencion",
    component: OptimizarAtencion,
  },
  {
    path: "/mas-anciano",
    name: "PacienteMasAnciano",
    component: PacienteMasAnciano,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

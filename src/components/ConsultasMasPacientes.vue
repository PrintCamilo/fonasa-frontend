<template>
    <div>
      <h1>Consulta con más Pacientes Atendidos</h1>
      <p v-if="consultaMasPacientes">
        La consulta con más pacientes atendidos hasta el momento es:
        <br />
        Nombre: {{ consultaMasPacientes.nombre }}
        <br />
        Pacientes Atendidos: {{ consultaMasPacientes.pacientesAtendidos }}
      </p>
      <p v-else>No hay consultas con pacientes atendidos aún.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        consultaMasPacientes: null
      };
    },
    mounted() {
      this.getConsultaMasPacientes();
    },
    methods: {
      async getConsultaMasPacientes() {
        try {
          const response = await axios.get('http://localhost:3000/consultas/maspacientes');
          this.consultaMasPacientes = response.data;
        } catch (error) {
          console.error('Error al obtener consulta con más pacientes atendidos:', error);
        }
      }
    }
  };
  </script>
  
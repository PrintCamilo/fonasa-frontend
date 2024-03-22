<template>
    <div>
      <h1>Listar Pacientes Fumadores Urgentes</h1>
      <ul v-if="fumadoresUrgentes.length">
        <li v-for="(paciente, index) in fumadoresUrgentes" :key="index">
          {{ paciente.nombre }} - Edad: {{ paciente.edad }} - Tipo Edad: {{ paciente.tipoEdad }}
        </li>
      </ul>
      <p v-else>No hay pacientes fumadores que necesiten ser atendidos con urgencia.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        fumadoresUrgentes: []
      };
    },
    mounted() {
      this.getFumadoresUrgentes();
    },
    methods: {
      async getFumadoresUrgentes() {
        try {
          const response = await axios.get('http://localhost:3000/pacientes/fumadoresurgentes');
          this.fumadoresUrgentes = response.data;
        } catch (error) {
          console.error('Error al obtener pacientes fumadores urgentes:', error);
        }
      }
    }
  };
  </script>
  
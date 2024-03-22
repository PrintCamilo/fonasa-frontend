<template>
    <div>
      <h1>Paciente Más Anciano en Sala de Espera</h1>
      <div v-if="pacienteMasAnciano">
        <p>Nombre: {{ pacienteMasAnciano.nombre }}</p>
        <p>Edad: {{ pacienteMasAnciano.edad }}</p>
        <p>Tipo Edad: {{ pacienteMasAnciano.tipoEdad }}</p>
      </div>
      <p v-else>No hay pacientes en sala de espera.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pacienteMasAnciano: null
      };
    },
    mounted() {
      this.getPacienteMasAnciano();
    },
    methods: {
      async getPacienteMasAnciano() {
        try {
          const response = await axios.get('http://localhost:3000/pacientes/masanciano');
          this.pacienteMasAnciano = response.data;
        } catch (error) {
          console.error('Error al obtener paciente más anciano:', error);
        }
      }
    }
  };
  </script>
  
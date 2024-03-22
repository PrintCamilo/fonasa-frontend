<template>
    <div>
      <h1>Liberar Consultas</h1>
      <p>¿Estás seguro que deseas liberar todas las consultas ocupadas?</p>
      <button @click="liberarConsultas">Liberar Consultas</button>
      <p v-if="mensajeLiberacion">{{ mensajeLiberacion }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mensajeLiberacion: ''
      };
    },
    methods: {
      async liberarConsultas() {
        try {
          const resp = await axios.post('http://localhost:3000/consultas/liberar');
          this.mensajeLiberacion = resp.data.message;
        } catch (error) {
          console.error('Error al liberar consultas:', error);
          this.mensajeLiberacion = 'Error al liberar consultas.';
        }
      }
    }
  };
  </script>
  
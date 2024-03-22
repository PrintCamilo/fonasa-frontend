<template>
    <div>
      <h1>Listar Pacientes Mayor Riesgo</h1>
      <label for="noHistoriaClinica">Número de Historia Clínica:</label>
      <input type="text" id="noHistoriaClinica" v-model="noHistoriaClinica" />
      <button @click="listarPacientesMayorRiesgo">Buscar</button>
  
      <div v-if="pacientesMayorRiesgo.length">
        <h2>Pacientes con Mayor Riesgo</h2>
        <ul>
          <li v-for="(paciente, index) in pacientesMayorRiesgo" :key="index">
            {{ paciente.nombre }} - Edad: {{ paciente.edad }} - Riesgo: {{ paciente.riesgo }}
          </li>
        </ul>
      </div>
  
      <p v-else>No se encontraron pacientes con mayor riesgo.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        noHistoriaClinica: '',
        pacientesMayorRiesgo: []
      };
    },
    methods: {
      async listarPacientesMayorRiesgo() {
        try {
          const resp = await axios.get(`http://localhost:3000/pacientes/mayorriesgo/${this.noHistoriaClinica}`);
          this.pacientesMayorRiesgo = resp.data;
        } catch (error) {
          console.error('Error al obtener pacientes de mayor riesgo:', error);
        }
      }
    }
  };
  </script>
  
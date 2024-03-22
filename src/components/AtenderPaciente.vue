<template>
  <div>
    <h1>Atender Paciente</h1>
    <div v-if="consultas.length === 0">
      <p>No hay consultas disponibles en este momento.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="consulta in consultas" :key="consulta._id">
          <p>{{ consulta._id }}</p>
          <p>{{ consulta.estado }}</p>
          <p>{{ consulta.tipo }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AtenderPaciente",
  data() {
    return {
      consultas: [],
    };
  },
  mounted() {
    this.getConsultasDisponibles();
  },
  methods: {
    getConsultasDisponibles() {
      axios.get("http://localhost:3000/consultas/disponibles")
        .then(response => {
          this.consultas = response.data;
        })
        .catch(error => {
          console.error("Error al obtener consultas disponibles:", error);
        });
    },
  },
};
</script>


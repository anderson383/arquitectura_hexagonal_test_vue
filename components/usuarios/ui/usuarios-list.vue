<template>
  <div>
    <v-row justify="center" >
      <v-col cols="12" sm="12">
        <h1>Crear usuario</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" >
        <v-text-field outlined dense v-model="formData.nombre" label="Nombre" ></v-text-field>
        <v-text-field outlined dense v-model="formData.apellido" label="Apellido" ></v-text-field>
        <v-text-field outlined dense v-model="formData.email" label="Email" ></v-text-field>
        <v-text-field outlined dense v-model="formData.edad" label="Edad" type="number" ></v-text-field>
        <v-btn @click="submitForm" color="primary">Crear usuario</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script src="./usuarios-list.conf.ts" ></script>

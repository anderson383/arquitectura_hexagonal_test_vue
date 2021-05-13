<template>
  <div>
    <v-dialog max-width="800" v-model="dialogUser" >
      <v-card>
        <v-card-title>
          <span>CREAR USUARIO</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" >
              <v-text-field outlined dense v-model="formData.nombre" label="Nombre" ></v-text-field>
              <v-text-field outlined dense v-model="formData.apellido" label="Apellido" ></v-text-field>
              <v-text-field outlined dense v-model="formData.correo" label="Email" ></v-text-field>
              <v-text-field outlined dense v-model="formData.edad" label="Edad" type="number" ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialogUser = false" text color="primary">Cancelar</v-btn>
          <v-btn @click="saveData"  color="primary">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script src="./usuarios-create.conf.ts" ></script>

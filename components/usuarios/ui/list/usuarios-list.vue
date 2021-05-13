<template>
  <div class="mt-5">
    <v-row justify="center" align="center" >
      <v-col cols="12" sm="6">
        <h1>Crear usuario</h1>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn @click="openDialog" class="float-right" color="primary">Crear usuario</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" >
        <v-card>
          <v-card-text>
            <v-list class="p-2" nav>
              <v-list-item link v-for="item in listUser" >
                <v-list-item-content>
                  {{ item.nombre }}
                </v-list-item-content>
                <v-list-item-content>
                  {{ item.apellido }}
                </v-list-item-content>
                <v-list-item-content>
                  {{ item.correo }}
                </v-list-item-content>
                <v-list-item-content>
                  {{ item.edad }}
                </v-list-item-content>
                <v-list-item-action>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn small color="indigo" dark v-bind="attrs" v-on="on" >
                        Opciones
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="getAction(item_action.action, item.id)"  link v-for="(item_action, index) in actions" :key="index" >
                        <v-list-item-title >{{ item_action.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <usuarios-create @change_data="getUsers" ref="createuser" ></usuarios-create>
  </div>
</template>
<script src="./usuarios-list.conf.ts" ></script>

<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h2>
            Toppings 🧀
            <b-button size="sm" variant="success" v-on:click="newToppings()"
              >New Topping</b-button
            >
          </h2>
          <b-list-group>
            <draggable :list="toppings" group="toppings">
              <b-list-group-item
                v-for="topping in toppings"
                v-bind:key="topping.key"
                >{{ topping.name }}</b-list-group-item
              >
            </draggable>
          </b-list-group>
        </b-col>
        <b-col>
          <h2>
            Pizza 🍕
            <b-button size="sm" variant="success" v-on:click="newPizza()"
              >New Pizza</b-button
            >
          </h2>
          <b-list-group>
            <draggable :list="pizzas" group="pizzas">
              <b-card
                v-for="pizza in pizzas"
                v-bind:key="pizza.id"
                :title="pizza.name"
              >
                <draggable :list="pizza.toppings" group="toppings">
                  <b-list-group-item
                    v-for="topping in pizza.toppings"
                    v-bind:key="topping.id"
                    >{{ topping.name }}</b-list-group-item
                  >
                </draggable>
              </b-card>
            </draggable>
          </b-list-group>
        </b-col>
        <b-col>
          <h2>Ready for pickup</h2>
          <b-list-group>
            <draggable :list="pickups" group="pizzas">
              <b-card
                v-for="pizza in pickups"
                v-bind:key="pizza.id"
                :title="pizza.name"
              ></b-card>
            </draggable>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import draggable from "vuedraggable";
import Pizza, { Topping } from "@/interfaces/pizza";
import { getRandomTopping } from "@/common/toppings";

export default Vue.extend({
  name: "home",
  components: {
    draggable
  },
  data: function() {
    return {
      id: 0,
      pizzas: [] as Pizza[],
      toppings: [] as Topping[],
      pickups: [] as Pizza[]
    };
  },
  methods: {
    newPizza: function(): void {
      this.pizzas.push({
        id: this.id++,
        name: "MyPizza",
        toppings: [
          {
            name: "pizza dough",
            id: this.id++
          },
          {
            name: "Tomato sauce",
            id: this.id++
          }
        ]
      });
    },
    newToppings: function(): void {
      this.toppings.push(getRandomTopping());
    }
  }
});
</script>

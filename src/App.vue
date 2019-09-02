<template>
  <v-app>

    <v-content>
      <HelloWorld/>
      <Switcher />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Switcher from './components/Switcher';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Switcher
  },
  data: () => ({
    //
  }),
};
</script>

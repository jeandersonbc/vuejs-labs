<template>
<ul class="list-group">
    <server v-for="index in 5"></server>
</ul>
</template>

<script>
import Server from './Server.vue';

export default {
    components: {
        "server": Server
    }
}
</script>

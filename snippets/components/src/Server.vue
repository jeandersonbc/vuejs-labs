<template>
    <li class="list-group-item">Server #{{ id }}</li>
</template>

<script>
var counter = 1;

export default {
    data: function() {
        return {
            id: counter++
        }
    }
}
</script>

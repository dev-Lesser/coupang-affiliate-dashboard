<template>
     <v-card>
        <v-img :src="img" />
        <v-card-title>{{title}}</v-card-title>
        <v-card-subtitle>
            <v-chip class="ma-1" v-for="i,key in hashtags" :key="key" label color="indigo" small outlined>#{{i}}</v-chip>
        </v-card-subtitle>
    </v-card>
</template>
<script>
export default ({
    props: {
        img: String,
        title: String,
        hashtags: Array,
    },
})
</script>
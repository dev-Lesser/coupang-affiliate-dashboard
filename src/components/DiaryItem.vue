<template>
<v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md8>
            <v-card >
                <v-card-actions style="display:flex;align-items:center;" >
                    <v-card-title>{{ $route.query.title }}</v-card-title>
                    <v-spacer/>
                    <v-card-subtitle>글쓴이 : {{ $route.query.author }}</v-card-subtitle>
                    <v-card-subtitle>기록 : {{ $route.query.date }}</v-card-subtitle>
                </v-card-actions>
                <v-divider />
                <v-card-subtitle>안녕하세요?????</v-card-subtitle>
                
            </v-card>
            </v-flex>
        </v-layout>
</v-container>
</template>
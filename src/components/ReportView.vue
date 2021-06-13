<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-title>집들이</v-card-title>
                    <v-card-title>분석보고서입니다.</v-card-title>
                    <v-card-title>{{ $route.params.id }}</v-card-title>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout wrap>

        </v-layout>
    </v-container>
</template>

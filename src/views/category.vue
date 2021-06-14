<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10>
                <v-card class="pa-3 ma-3">
                    <v-card-subtitle>가전 디지털 베스트 5</v-card-subtitle>
                    <v-divider/>
                    <div style="display:grid;justify-content:center;">
                        <iframe src="https://ads-partners.coupang.com/widgets.html?id=491018&template=carousel&trackingCode=AF0977183&subId=&width=680&height=140" width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                    </div>
                </v-card>
                <v-card class="pa-3 ma-3">
                    <v-card-subtitle>생활용품 베스트 5</v-card-subtitle>
                    <v-divider/>
                    <div style="display:grid;justify-content:center;">
                        <iframe src="https://ads-partners.coupang.com/widgets.html?id=491088&template=carousel&trackingCode=AF0977183&subId=&width=680&height=140" width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                    </div>
                </v-card>
                <v-card class="pa-3 ma-3">
                    <v-card-subtitle>주방용품 베스트 5</v-card-subtitle>
                    <v-divider/>
                    <div style="display:grid;justify-content:center;">
                        <iframe src="https://ads-partners.coupang.com/widgets.html?id=491091&template=carousel&trackingCode=AF0977183&subId=&width=680&height=140" width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                        </div>
                </v-card>
                <v-card class="pa-3 ma-3">
                    <v-card-subtitle>홈인테리어 베스트 5</v-card-subtitle>
                    <v-divider/>
                    <div style="display:grid;justify-content:center;">
                        <iframe src="https://ads-partners.coupang.com/widgets.html?id=491095&template=carousel&trackingCode=AF0977183&subId=&width=680&height=140" width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                        </div>
                </v-card>
                <v-card class="pa-3 ma-3">
                    <v-card-subtitle>뷰티 베스트 5</v-card-subtitle>
                    <v-divider/>
                    <div style="display:grid;justify-content:center;">
                        <iframe src="https://ads-partners.coupang.com/widgets.html?id=491073&template=carousel&trackingCode=AF0977183&subId=&width=680&height=140" width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        setup() {
        },
        data() {
            return {
                tab: null,
                tabItems: [{
                        tab: '전자제품',
                        route: "/"
                    },
                    {
                        tab: '생활용품',
                        route: "/about"
                    },
                    {
                        tab: '주방용품',
                        route: "/report"
                    },
                    {
                        tab: '취미',
                        route: "/category"
                    },
                    {
                        tab: '',
                        route: "/diary"
                    },
                ],
            }
        }
    }
</script>
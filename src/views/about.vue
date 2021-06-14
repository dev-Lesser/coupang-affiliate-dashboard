<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-title>Hi 😃 👋 </v-card-title>
                    <v-card-subtitle>
                        렛하! 안녕하세요 👋 <br/><br/>
                        빅데이터 분석 기반으로
                        구매하는 상품에 대해 지표를 제시하여, 자신만의 특별한 상품을 구매할 수 있도록 저 "렛서" 가 도와드립니다. <br/>
                        
                        많이 구입한 상품들과 연관되는 키워드를 분석합니다. 워드클라우드와 네트워크맵을 보여드립니다.
                    </v-card-subtitle>
                    <v-divider />
                    <v-card-title>분석 데이터 테마</v-card-title>
                    <v-divider/>
                    
                    <v-layout wrap style="padding-left:50px;padding-right:50px;display:flex;justify-content:center;align-items:center;">
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/home_present.jpg" />
                                <v-card-subtitle><v-chip label color="indigo" small outlined>#집들이</v-chip></v-card-subtitle>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/family.jpg" />
                                <v-card-subtitle>
                                    <v-chip label color="indigo" small outlined>#부모님</v-chip>
                                    <v-chip label color="indigo" small outlined>#효도</v-chip>
                                </v-card-subtitle>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/present.jpg" />
                                <v-card-subtitle>
                                    <v-chip label color="indigo" small outlined>#생일</v-chip>
                                    <v-chip label color="indigo" small outlined>#생일선물</v-chip>
                                </v-card-subtitle>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/girlfriend.jpg" />
                                <v-card-subtitle>
                                    <v-chip label color="indigo" small outlined>#여자친구</v-chip>
                                    <v-chip label color="indigo" small outlined>#커플</v-chip>
                                </v-card-subtitle>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/present.jpg" />
                                <v-card-subtitle><v-chip label color="indigo" small outlined>#직장</v-chip></v-card-subtitle>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/wedding.jpg" />
                                <v-card-subtitle>
                                    <v-chip label color="indigo" small outlined>#결혼</v-chip>
                                    <v-chip label color="indigo" small outlined>#축하선물</v-chip>
                                </v-card-subtitle>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <v-card>
                                <v-img src="@/assets/baby.jpg" />
                                <v-card-subtitle>
                                    <v-chip label color="indigo" small outlined>#출산</v-chip>
                                    <v-chip label color="indigo" small outlined>#아기용품</v-chip>
                                </v-card-subtitle>
                            </v-card>
                        </v-flex>
                        
                    </v-layout>
                    <v-divider />
                    
              
                    
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout wrap>

        </v-layout>
    </v-container>
</template>

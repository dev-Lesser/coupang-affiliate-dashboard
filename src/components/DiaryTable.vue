<template>
<v-card>
    <v-data-table
    :items="diaryItems"
    :headers="headers"
    hide-default-footer
    fixed-header
    :items-per-page="10"
    >
    <template v-slot:body="{ items }">
        <tbody>
          <tr
            v-for="item,key in items"
            :key="key"
            
          >
            <td  ><router-link class="diary-title" :to="`/diary/${key}?title=${item.title}&author=${item.author}&date=${item.date}`">{{ item.title }}</router-link></td>
            <td class="text-center">{{ item.author }}</td>
            <td class="text-center">{{ item.date }}</td>
            <td class="text-center">{{ item.count }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
</v-card>
</template>
<script>
export default {
    setup() {
        
    },
    data(){
        return {
            headers: [
                {text:"제목",align:'start', value:'title'},
                {text:"글쓴이",align:'center',  value:'author'},
                {text:"날짜",align:'center', value:'date'},
                {text: "조회수", align:'center',value:'count'}
            ],
            diaryItems: [
                {
                    author: '렛서',
                    date: '2020-06-12',
                    title: '준비중',
                    count: 3
                },
              
            ]
        }
    }
}
</script>
<style scoped>
.diary-title{
    text-decoration:none
}
</style>
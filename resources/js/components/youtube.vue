<template>
    <div>
        <form @submit.prevent="search">
            Search
            <input v-model="searchTerm" type="text">
        </form>
        <div v-if="videos.length" class="row">
            <div class="card" v-for="video in videos" :key="video.id.videoID">
                <div class="card-body">
                    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/X1_9pWTLNWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                    <iframe
                        :src="'https://www.youtube.com/embed/'+video.id.videoID"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <a :href="'https://www.youtube.com/watch?v='+video.id.videoID">
                    {{ video.snippet.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import request from '../request'
export default ({
  data(){
    return{
        API:'AIzaSyBQg1GYhXX5PwLPtaYYa7gQfefAfsBYWR0',
        searchTerm:'',
        videos:[]
    }
  },
  methods:{
    async search(){
        const res = await request.get(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+this.searchTerm+'&key='+this.API
        );
        this.videos = res.data.items
        console.table(this.videos)
    }
  }
})
</script>

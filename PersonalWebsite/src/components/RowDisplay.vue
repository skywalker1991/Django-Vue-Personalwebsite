<template>
    <div class="RowDisplay">
        <div class="title-dis">
        <p>{{ rowTitle }}</p>
        <div class="content-control">
            <el-icon @click="moveLeft" class="arrowbutton"><ArrowLeftBold /></el-icon>
            <el-icon @click="moveRight" class="arrowbutton"><ArrowRightBold /></el-icon>
        </div>
    </div>

        <div class="row-display" :style="{ transform: `translateX(${positionX}px)` }">
            <div v-for="(row,index) in rowData" :key="index" class="row" :style="{backgroundImage:'url('+row.imgurl+')'}">
                <div class="card-text">
                    <p class="card-title">{{ row.title }}</p>
                    <p class="card-des">{{ row.des }}</p>
                </div>

            </div>
        </div>

    </div>


</template>

<script>
export default {
    props:{
        rowTitle: {
            type: String,
            default:'rowDisplay'
        },
        rowData: {
            type:Array,
            default:()=>[]
        }

    },
    data () {
        return {
            step:100,
            positionX:300,
        }
    },
    methods :{
        moveLeft () {
            if (this.positionX > 0){
                this.positionX -= this.step; 
            }  
        },
        moveRight () {
            if (this.positionX < 300){
                this.positionX += this.step;
            }
        }
    }
}

</script>

<style>
.card-text {
    display: flex;
    flex-direction: column;
    align-items: start;
}
.card-title {
    font-size: 45px;
    padding: 15px;
    margin: 0px;
    
}
.card-des {
    font-size: 15px;
    margin-left: 15px;
    margin-top:0px;
    /* text-align: justify; */
}
.RowDisplay {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #0d1116;
}
.row-display {
    position:relative;
    display: flex;
    flex-direction: row;
    transition: transform 0.5s ease;

}



.row {
    width:300px;
    max-width: 300px;
    min-width: 300px;
    aspect-ratio: 3/4;
    margin: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(50, 50, 50);
    border-radius: 10px;
    background-color: rgb(36, 36, 36);
    box-shadow: 0 4px 6px rgba(150, 148, 148, 0.1);
    font-family: Arial, sans-serif;
    transition: transform 0.2s;
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: 80px 200px;
}

.row:hover {
    transform: scale(1.1);
}

.content-control {
    display: flex;
    align-items: center;

}

.title-dis {
    font-size: 30px;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.arrowbutton {
    transition: buttontransform 0.2s
}

.arrowbutton:hover {
    transform: scale(1.1);
}
</style>
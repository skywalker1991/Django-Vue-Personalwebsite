<template>
    <div class="ColDisplay">
        <div class="title">
        <p>{{ colTitle }}</p>
    </div>
    <div v-for="(col,index) in colData" :key="index" class="section">
        <div class="left-dis">
            <div class="section-progress progress-animation">

            </div>
            <div class="section-title slide-animation">
                <p>{{ col.title }}</p>

            </div>
            <div class="section-des slide-animation">
                <p>{{ col.des }}</p>

            </div>

        </div>

        <div class="section-pic right-slide-animation">
        </div>


    </div>

    </div>

</template>


<script>
export default {
    props:{
        colTitle: {
            type: String,
            default:'colDisplay'
        },
        colData: {
            type:Array,
            default:()=>[]
        }

    },
}

</script>

<style>
.ColDisplay {
    background-color: #0d1116;
    
}
.title {
    font-size: 30px;
    margin-left: 50px;
}

.section {
    display: flex;
    justify-content: space-around;
    width:100%;
    height:300px;
    padding: 50px;
}

.left-dis {
    width: 400px;
}
.section-progress {
    position: absolute;
    width: 1px; 
    height: 300px; 
    background-color: #1260e7;
    box-shadow: 0 0 2px 2px rgba(2, 226, 251, 0.5); /* 设置发光效果 */


}
.section-title {
    font-size: 50px;
}
.section-des {
    word-break: break-all;
    margin-left: 10px;
}

.section-pic {
    width:500px;
    height:300px;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(50, 50, 50);
    border-radius: 10px;
    background-color: rgb(36, 36, 36);
    background-size: contain;
    box-shadow: 0 4px 6px rgba(150, 148, 148, 0.1);

}


@keyframes slideInLeft {
  from {
    transform: translateX(-2px);
    opacity: 0;
  }
  to {
    transform: translateX(50px);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(90px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}


@keyframes dprogress {
  from {
    transform-origin: top;
    transform: scaleY(0);
  }
  to {
    transform-origin: top;
    transform: scaleY(1);
  }
}



.slide-animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;
  animation-name: slideInLeft;
  animation-fill-mode: both;
  animation-range: entry 20% entry 200%;



}

.progress-animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;
  animation-name: dprogress;
  animation-fill-mode: both;
  
}

.right-slide-animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;
  animation-name: slideInRight;
  animation-fill-mode: both;
  animation-range: entry 70% entry 100%;
  
}
@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

</style>
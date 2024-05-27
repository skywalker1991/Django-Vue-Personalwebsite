<template>
    <div class="container"></div>   
</template>
  
  <script>
  import * as d3 from 'd3';
//   import data from '@/assets/flare-2.json'
  
  export default {
    mounted() {
      this.fetchMapData();
    },
    computed : {
      autofresh() {
        return this.$store.state.needFresh
      } 

    },
    watch: {
      autofresh(newValue, oldValue) {
        console.log('count changed:', newValue, oldValue);
        if (newValue == true) {
          this.fetchMapData();
          this.$store.commit('setneedfresh',false)
        }
        // 执行其他逻辑
      }
    },
    methods: {
      drag(simulation) {
        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }
  
        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }
  
        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
  
        return d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      },
      init(data) {
        // let windowWidth = window.innerWidth;
        // let windowHeight = window.innerHeight;  
        // // Specify the chart’s dimensions.
        // const width = windowWidth/2;
        // const height = windowHeight-60;
        // Compute the graph and start the force simulation.
        const width = 500;
        const height = 500;
        const root = d3.hierarchy(data);
        console.log(root)
        const links = root.links();
        console.log(links)
        const nodes = root.descendants();
        console.log(nodes)

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(1).strength(0.2))
            .force("charge", d3.forceManyBody().strength(-200))
            .force("x", d3.forceX())
            .force("y", d3.forceY());

        // Create the container SVG.
        d3.select(".container").selectAll('*').remove();
        const svg = d3.select(".container").append('svg')
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-width / 2, -height / 2, width*0.9, height*0.9])
            .attr("style", "max-width: 100%; height: auto;");
        
        const zoomcontainer = svg.append('g')
        
        // Append links.
        const link = zoomcontainer.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line");
        
        

        // Append nodes.
        const node = zoomcontainer.append("g")
        .selectAll("g")
            .data(nodes)
            .join("g")
            .call(this.drag(simulation));

        // Define nodes style.
        node.append("circle")
            .attr("fill", d => d.children ? "#fff" : "#000")
            .attr("stroke", d => d.children ? "#000" : "#fff" )
            .attr("r", d => d.children ? 10 : 5)

        node.append("text")
            .attr("x","5")
            .attr("y", "0.31em")
            .style("font-size", d => d.children ? "20px" : "10px" )
            .attr("fill","#fff")
            .text(d => d.data.name)


        node.on("click", (event, d) => {
          this.$emit("node-clicked", d.data);
          const currentNode = {id:d.data.id,name:d.data.name}
          console.log(currentNode)
          this.$store.commit('setcurrentnode',currentNode)
          this.newNodeFather.id = d.data.id
          this.newNodeFather.name = d.data.name
          console.log(d.data)
        });




        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("transform", d => `translate(${d.x},${d.y})`);

        });

                 // 启用缩放
        const zoom = d3.zoom()
            .scaleExtent([0.5, 32])
            .on("zoom", function(event) {
                zoomcontainer.attr("transform", event.transform);
            })

        svg.call(zoom);
      },
      async fetchMapData () {
        try {
            const response = await fetch('/api/blog/gettag/')
            const jsonData = await response.json();
            console.log(jsonData);
            this.init(jsonData[0]);
            const currentNode = {id:jsonData[0].id,name:jsonData[0].name}
            //初始化当前节点指针
            this.$store.commit('setcurrentnode',currentNode)

        } catch (error) {
            console.error(error)
        } 
      },
    },
    data() {
      return {
        newNodeValue:{
          "name":''
        },
        newNodeFather:{
          "id":'',
          "name":''
        }

      };
    },
  };
  </script>
  
  
  
<style>
.container {


}


</style>
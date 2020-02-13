// 字典
var { Dictionay } = require('./dist')
    // 封装图结构
function Graph() {
    // 属性：顶点(数组)/边(字典)
    this.vertexes = []
    this.edges = new Dictionay()

    // 添加顶点
    Graph.prototype.addVertex = function(v) {
            this.vertexes.push(v);
            this.edges.set(v, [])
        }
        // 添加边
    Graph.prototype.addEdge = function(v1, v2) {
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }

    Graph.prototype.toString = function() {
        var resultString = "";

        this.vertexes.forEach(item => {
            resultString += item + '->'
            this.edges.get(item).forEach(tepm => {
                resultString += tepm + ' '
            })
            resultString += '\n'
        })

        return resultString;
    }

    // 初始化颜色
    Graph.prototype.initializeColor = function() {
        var color = []
        this.vertexes.forEach(item => {
            color[item] = 'white'
        })
        return color
    }

    // 广度优先BFS
    Graph.prototype.bfs = function(initV) {
        var color = this.initializeColor();
        var res = [];
        var queue = [];

        queue.push(initV)

        while (queue.length != 0) {
            // 出列
            var v = queue.shift();

            var vList = this.edges.get(v)
            color[v] = 'gray'
            vList.forEach(item => {
                if (color[item] == 'white') {
                    color[item] = 'gray'
                    queue.push(item);
                }
            })

            res.push(v)
                // color[v] = 'black'
        }


        return res;
    }

    // 深度优先DFS
    Graph.prototype.dfs = function(initV, handle) {
        var color = this.initializeColor();
        // 开始递归访问
        this.dfsVisit(initV, color, handle)
    }
    Graph.prototype.dfsVisit = function(v, color, handle) {
        color[v] = 'gray'
        handle(v)
        var vList = this.edges.get(v)
        for (var i = 0; i < vList.length; i++) {
            var e = vList[i]
            if (color[e] == 'white') {
                this.dfsVisit(e, color, handle)
            }
        }
    }
    Graph.prototype.DFS = function(initV) {
        var color = this.initializeColor();
        var res = [];
        var stack = []
        stack.push(initV);
        while (stack.length != 0) {
            var v = stack.pop();
            res.push(v)
            var vList = this.edges.get(v);


        }
    }
}

var g = new Graph();

var myVertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
myVertex.forEach(item => {
    g.addVertex(item);
})

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('E', 'I')

// console.log(g.toString())
// console.log(g.bfs('A'))

var resultString = ""
g.dfs('A', function(v) {
    resultString += v + " "
})
console.log(resultString)

console.log(g.DFS('A'))
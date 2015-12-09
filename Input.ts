

import VertexMod = require('./Vertex');
import EdgeMod = require('./Edge');

var Vertex = VertexMod.Vertex;
var Edge = EdgeMod.Edge;

export class Input {
	
	edges: Array<Edge>;
	constructor() {
		this.edges.push(new Edge(new Vertex(0), new Vertex(1), 4));
		this.edges.push(new Edge(new Vertex(0), new Vertex(7), 8));
		this.edges.push(new Edge(new Vertex(1), new Vertex(7), 11));
		this.edges.push(new Edge(new Vertex(1), new Vertex(2), 8));
		this.edges.push(new Edge(new Vertex(2), new Vertex(8), 2));
		this.edges.push(new Edge(new Vertex(2), new Vertex(3), 7));
		this.edges.push(new Edge(new Vertex(2), new Vertex(5), 4));
		this.edges.push(new Edge(new Vertex(2), new Vertex(3), 7));
		this.edges.push(new Edge(new Vertex(3), new Vertex(4), 9));
		this.edges.push(new Edge(new Vertex(3), new Vertex(5), 14));
		this.edges.push(new Edge(new Vertex(4), new Vertex(5), 10));
		this.edges.push(new Edge(new Vertex(5), new Vertex(6), 2));
		this.edges.push(new Edge(new Vertex(6), new Vertex(8), 6));
		this.edges.push(new Edge(new Vertex(8), new Vertex(7), 7));
	}
	
}
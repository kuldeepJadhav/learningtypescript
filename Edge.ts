import VertexMod = require('./Vertex');
export class Edge {
	vertexFrom: VertexMod.Vertex;
	vertexTo: VertexMod.Vertex;
	distance: number;
	constructor(from, to, distance) {
		this.vertexFrom = from;
		this.vertexTo = to;
		this.distance = distance;
	}
}

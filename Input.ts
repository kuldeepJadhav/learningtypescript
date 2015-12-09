

import VertexMod = require('./Vertex');
import EdgeMod = require('./Edge');

var Vertex = VertexMod.Vertex;
var Edge = EdgeMod.Edge;
export var totalNodes = 9;
export var edges = [
	new Edge(new Vertex(0), new Vertex(1), 4),
	new Edge(new Vertex(0), new Vertex(7), 8),
	new Edge(new Vertex(1), new Vertex(7), 11),
	new Edge(new Vertex(1), new Vertex(2), 8),
	new Edge(new Vertex(2), new Vertex(8), 2),
	new Edge(new Vertex(2), new Vertex(3), 7),
	new Edge(new Vertex(2), new Vertex(5), 4),
	new Edge(new Vertex(2), new Vertex(3), 7),
	new Edge(new Vertex(3), new Vertex(4), 9),
	new Edge(new Vertex(3), new Vertex(5), 14),
	new Edge(new Vertex(4), new Vertex(5), 10),
	new Edge(new Vertex(5), new Vertex(6), 2),
	new Edge(new Vertex(6), new Vertex(8), 6),
	new Edge(new Vertex(8), new Vertex(7), 7)
];


	
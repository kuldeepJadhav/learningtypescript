import PrimsMod = require('./Prims');
import InputMod = require('./Input');
(() => {
	console.log('Starting algo!!!');
	var edges = InputMod.edges;
	var totalNode = InputMod.totalNodes;
	var primObj = new PrimsMod.Prims();
	var output = primObj.findMinimumSpanningTree(edges, totalNode);
	console.log('Minimun Spanning tree is ', output);
})();


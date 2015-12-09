
import InputMod = require('./Input');
import OutputMod = require('./Output');
var Output = OutputMod.Output;
export class Prims {
	output = [];
	prims() {
		var self = this;
		var edges = InputMod.edges;
		if (!edges) {
			throw 'Please provide edges for the graph!!!!';
		}
		var visitedEdges: number[] = [];
		console.log('edges provided are ', edges);
		var totalNodes = InputMod.totalNodes;
		visitedEdges.push(edges[0].vertexFrom.id);
		for (var nodeCounter = 0; nodeCounter < totalNodes; nodeCounter++) {
			var miniDist = 999;
			var nextToNode = null;
			var nextFromNode = null;
			visitedEdges.forEach((item) => {
				var nodeId = item;
				
				edges.forEach((edge) => {
					if (nodeId === edge.vertexFrom.id) {
						var from = nodeId;
						var to = edge.vertexTo.id;

						if (visitedEdges.indexOf(from) !== -1 && visitedEdges.indexOf(to) !== -1) {
							return;
						}

						var distance = edge.distance;

						if(distance < miniDist) {
							miniDist = distance;
							nextToNode = to;
							nextFromNode = from;
						}
					}

	
				});



			});
			visitedEdges.push(nextToNode);
			self.output.push(new Output(nextFromNode, nextToNode, miniDist));

		}

		console.log('Algo ran ', visitedEdges, self.output);


	}
}
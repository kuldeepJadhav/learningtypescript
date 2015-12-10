

import OutputMod = require('./Output');
import MinimumSpanningMod = require('./MinimumSpanning');
var Output = OutputMod.Output;
export class Prims implements MinimumSpanningMod.MinimumSpanning {
	output = [];
	findMinimumSpanningTree(edges, totalNodes) {
		var self = this;
		
		if (!edges) {
			throw 'Please provide edges for the graph!!!!';
		}
		var visitedEdges: number[] = [];
		console.log('edges provided are ', edges);
		
		visitedEdges.push(edges[0].vertexFrom.id);
		for (var nodeCounter = 0; nodeCounter < totalNodes-1; nodeCounter++) {
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

		
		return self.output;

	}
}
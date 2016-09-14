let featureObj = {};

window.onload = function() {

    var socket = io.connect('http://127.0.0.1:3000');

		socket.on('features', function (data) {
			console.log(data);
			featureObj = data;
			generatePage(); // Once we've retrieved features lets generate the page
		});
}

		console.log(featureObj[0].newDashboard.flag);
		if (featureObj[0].newDashboard.flag){
			displayNewDash();
		} else {
			displayOldDash();
		}
}


	let fancy_new_dash_template = `
		<div id="fancy-new-dash">
			<div class="container">
				<div class="text-center jumbotron">
					<h1>I'm the new dash</h1>
					<p style="color:blue">Check me out</p>
				</div>
			</div>
		</div>
	`
	$('#app').html(fancy_new_dash_template);
}

	let old_dash_template = `
		<div id="old-dash">
			<div class="container">
				<div class="text-center jumbotron">
					<h1>Boring Old Dash</h1>
					<p style="color:red">Check me out</p>
				</div>
			</div>
		</div>
	`
	$('#app').html(old_dash_template);
}

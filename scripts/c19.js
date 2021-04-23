const table = document.querySelector('#c19-cont');
const errtxt = document.querySelector('#error');
const err_rsn = document.querySelector('#error_reason');
const errtxtf = document.querySelector('#errorf');
const err_rsnf = document.querySelector('#error_reasonf');
const fact_cont = document.querySelector('#fact-cont');
const buffering = document.querySelector('#buffering')
fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7cad409761msh19acefbb9bc31e7p15bcdejsn611feb4ea2da",
		"x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
	}
})
	.then(response => {
		return response.json();
	})
	.then((datas) => {
		console.log(datas);
		buffering.innerHTML = null;
		table.innerHTML = "<tr><th><i class=\"fas fa-globe-americas\"></i> Region</th><th>Active Cases</th><th>New Cases</th><th>New Deaths</th><th>Total Cases</th><th>Total Deaths</th><th>Total Recovered</th><th><i class=\"far fa-clock\"></i> Updated On</th></tr>"
		datas.forEach(data => {

			console.log(data.Country_text);
			const c19_cont = document.createElement('tr');
			const region = document.createElement('td');
			const act_cases = document.createElement('td');
			const new_cases = document.createElement('td');
			const new_dths = document.createElement('td');
			const total_cases = document.createElement('td');
			const total_deaths = document.createElement('td');
			const total_recoverd = document.createElement('td');
			const updated_on = document.createElement('td');
			table.appendChild(c19_cont);
			region.innerText = data.Country_text;
			c19_cont.appendChild(region);
			act_cases.innerText = data["Active Cases_text"];
			c19_cont.appendChild(act_cases);
			new_cases.innerText = data["New Cases_text"];
			c19_cont.appendChild(new_cases);
			new_dths.innerText = data["New Deaths_text"];
			c19_cont.appendChild(new_dths);
			total_cases.innerText = data["Total Cases_text"];
			c19_cont.appendChild(total_cases);
			total_deaths.innerText = data["Total Deaths_text"];
			c19_cont.appendChild(total_deaths);
			total_recoverd.innerText = data["Total Recovered_text"];
			c19_cont.appendChild(total_recoverd);
			updated_on.innerText = data["Last Update"];
			c19_cont.appendChild(updated_on);

		})
	})
	.catch(err => {
		console.error(err);
		buffering.innerHTML = null;
		errtxt.innerText = "Sorry Could not Fetch Data";
		err_rsn.innerText += err;

	});

fetch("others/fact_ckecker.json")
	.then(res => {
		return res.json();
	})
	.then(res => {
		console.log(res)
		res.forEach(data => {
			const heading = document.createElement('h1');
			const para1 = document.createElement('p');
			const para2 = document.createElement('p');
			const para3 = document.createElement('p');

			heading.innerText = data.Heading;
			fact_cont.appendChild(heading);
			para1.innerText = data.Para1;
			fact_cont.appendChild(para1);
			para2.innerText = data.Para2;
			fact_cont.appendChild(para2);

		})

	})
	.then(err => {
		console.log(err);
		err_rsnf.innerText += err;
	})
<div>
    <label for="origin">Origin: </label>
    <input type="text" id="origin" placeholder="Enter origin city">

    <label for="destination">Destination: </label>
    <input type="text" id="destination" placeholder="Enter destination city">

    <label for="ways">Ways: </label>
    <input type="number" id="ways" placeholder="Enter number of ways">

    <label for="people">People: </label>
    <input type="number" id="people" placeholder="Enter number of people">

    <button onclick="calculateEmissions()">Calculate Emissions</button>
</div>

<!-- Results will be displayed here -->
<div id="results-container"></div>

<script>
    async function calculateEmissions() {
        const originInput = document.getElementById("origin").value;
        const destinationInput = document.getElementById("destination").value;
        const waysInput = document.getElementById("ways").value;
        const peopleInput = document.getElementById("people").value;
        
        const payload = {
            "from": originInput,
            "to": destinationInput,
            "ways": waysInput,
            "people": peopleInput,
            "language": "en",
            "title": "Your custom title here",
            "transport_types": ["flying", "public-transport"]
        };

        const headers = {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "68eac826aemshb59465bf854ed05p11a73ajsn8d54798d0035",
            "X-RapidAPI-Host": "travel-co2-climate-carbon-emissions.p.rapidapi.com"
        };

        try {
            const response = await fetch("https://travel-co2-climate-carbon-emissions.p.rapidapi.com/api/v1/simpletrips", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            // Display results on the page
            const resultsContainer = document.getElementById("results-container");
            resultsContainer.innerHTML = ""; // Clear previous results

            data.forEach(function (result) {
                // Process and display results
                // ...
            });
        } catch (error) {
            console.error("Error fetching CO2 emissions:", error);
            // Handle errors
        }
    }
</script>

let apiData = [];
        function fetchApiData() {
            var xhr = new XMLHttpRequest();
            var url = 'https://670b6ebcac6860a6c2cc036a.mockapi.io/users_data/users';
            console.log(url);
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                if (xhr.status === 200) {
                    apiData = xhr.response;
                    displayData(apiData);
                } else {
                    document.getElementById('apiData').innerHTML = '<p>Error fetching data.</p>';
                }
            };
            xhr.send();
        }
        function displayData(data) {
            var output = '';
            data.forEach(function(item){
                output += `<tr>
                                <td class="td">${item.id}</td>
                                <td class="td">${item.name}</td>
                                <td class="td">${item.city}</td>
                                <td class="td">${item.course}</td>
                                <td class="td">${item.roll_number}</td>
                            </tr>`;
            });
            
            document.getElementById('apiData').innerHTML = output;
        }
        function filterData() {
            var searchQuery = document.getElementById('search').value.toLowerCase();
            var filteredData = apiData.filter(function (item) {
                return item.name.toLowerCase().includes(searchQuery);
            });
            displaySuggestions(filteredData);
        }
        function displaySuggestions(data) {
            var output = '';

            data.forEach(function (item) {
                output += `
                    <div class="suggestion-item" onclick="selectSuggestion('${item.name}')">
                        ${item.name}
                    </div>
                `;
            });
            document.getElementById('searchResult').innerHTML = output;
        }
        function selectSuggestion(name) {
            document.getElementById('search').value = name;
            document.getElementById('searchResult').innerHTML = '';
            filterData();
        }
        fetchApiData();




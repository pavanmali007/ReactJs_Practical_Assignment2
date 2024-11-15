let displayedItems = 0;
const itemsToShow = 3;
function loadMoreData(data) {
    const container = document.getElementById('data-container');
    for (let i = displayedItems; i < displayedItems + itemsToShow && i < data.length; i++) {
      const item = data[i];
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
      container.appendChild(itemDiv);
    }
    displayedItems += itemsToShow;
    if (displayedItems >= data.length) {
      document.getElementById('load-more').style.display = 'none';
    }
  }

  function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            loadMoreData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

  const loadMoreBtn = document.getElementById('load-more');
  loadMoreBtn.addEventListener('click', () => {
    fetchData();
  });

  document.addEventListener('DOMContentLoaded', fetchData());


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
      const data = JSON.parse(this.response);
      const global = data.Global;
                
      const info = document.getElementById('data');
      info.innerHTML = `<td>${global.TotalConfirmed}</td>
                        <td>${global.NewConfirmed}</td>
                        <td>${global.TotalDeaths}</td>
                        <td>${global.NewDeaths}</td>
                        <td>${global.TotalRecovered}</td>
                        <td>${global.NewRecovered}</td>`;
                        
    function getTime(){
        const time = new Date(data.Date);
        const timeData = time.toGMTString();
        document.getElementById('time-info').innerHTML = timeData;
    }
    getTime();                
  }
});
xhr.open("GET", "https://api.covid19api.com/summary");
xhr.send();
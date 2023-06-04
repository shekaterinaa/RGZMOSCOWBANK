function stockPrice() {
    let date = ['02.07.2020', '03.07.2020', '06.07.2020', '07.07.2020', '08.07.2020',
                '09.07.2020', '10.07.2020', '13.07.2020', '14.07.2020'];
    let price = [0.850, 0.872, 0.866, 0.870	, 0.860	, 0.838, 0.774, 0.722, 0.698];
    let diff = ['-', (price[0]-price[1]).toFixed(2), (price[1]-price[2]).toFixed(2), (price[2]-price[3]).toFixed(2), 
                (price[3]-price[4]).toFixed(2), (price[4]-price[5]).toFixed(2), (price[5]-price[6]).toFixed(2), 
                (price[6]-price[7]).toFixed(2), (price[7]-price[8]).toFixed(2)];
    let table = document.getElementById('stock-price');

    for (let i = 0; i < date.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = date[i];
        td2.innerHTML = price[i];
        td3.innerHTML = diff[i];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);     
    }

    let sum=0;
            let k=0;
            for (let i = 0; i < price.length; i++) {
                sum = sum + price[i];
                k+=1;
            }
            let average = sum / price.length;
            document.getElementById('average-price').innerHTML = '<b>Среднее значение: </b>' + average;

            let sum2=0;
            for(let q=0; q < price.length; q++) {
                sum2 = (Math.abs(price[q] - average))**2;
            }
            let srdotk = Math.sqrt( sum2 / k);

            document.getElementById('srdotk').innerHTML = '<b>Среднеквадратическое отклонение: </b>' + srdotk.toFixed(2);

            let max = 0;
            let min = price[0];
            for (let i = 0; i < price.length; i++) {
                if (max<price[i]) {
                    max = price[i];
                }
                else if (min>price[i]) {
                    min = price[i];
                    }
            }
            document.getElementById('min').innerHTML = '<b>Минимальное значение: </b>' + min;
            document.getElementById('max').innerHTML = '<b>Максимальное значение: </b>' + max;
        }
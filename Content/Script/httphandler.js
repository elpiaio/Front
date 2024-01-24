async function HttpPost(url, param, callback) {
  const apiUrl = "https://localhost:7141/api/" + url;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // You can add other headers if needed
    },
    body: JSON.stringify(param),
  };


 fetch(apiUrl, requestOptions).then((sucess) => {
    callback(sucess.json())
  }).catch((error) => {
    console.log(error)
  })
}



async function HttpGet(url, param, callback) {

  var myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  await fetch("https://localhost:7141/api/Produto/RetornandoProdutos", requestOptions)
    .then(response => response.text())
    .then(result => callback(result))
    .catch(error => console.log('error', error));
}

//////////////// tentando usar o fetch kkkk

async function HttpGetHome(url){
  const response = await fetch(url);
  
  console.log(response);

  // Aguarda a conversão da resposta para formato JSON
  const data = await response.json();

  // Exibe no console os dados convertidos para JSON
  console.log(data);
  return data;
}

const getProducts = async () => {
    let response = await fetch("https://kodemia-24g-default-rtdb.firebaseio.com/products/.json");
    let data = await response.json();
    return data;
  };
  
 /* const getProductById = async (id) => {
    let response = await fetch(`https://kodemia-24g-default-rtdb.firebaseio.com/products/`);
    let data = await response.json();
    return data;
  };*/
  
  export { getProducts };
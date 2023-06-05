function getData() {
    let htmlProduct = '';
    localStorage.setItem('product', JSON.stringify(product));
    for (var i = 0; i < product.length; i++) {
        htmlProduct += `
        <figure class="col-sm-3 figure">
          <a href="pages/product.html">
            <img src="img/${product[i].img}" class="figure-img img-fluid rounded" alt="..." width="100%">
            <div class="align-items-center d-flex justify-content">
              <h6 class="text-truncated">${product[i].name} </h6>
              <h5 class="text-danger">${product[i].price}</h5>
            </div>
            <figcaption class="figure-caption">A caption for the above image.</figcaption>
          </a>
        </figure>
        `
        document.getElementById('showCart').innerHTML += htmlProduct;
    }
    
}
getData();
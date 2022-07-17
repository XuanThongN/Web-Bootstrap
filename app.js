// Load sản phẩm
let productList = [
  {
    id: 1,
    name: "AERO 15 OLED XD (i7-11800H | RTX3070)",
    price: "59,990,000",
    img: "./img/product-img/img-product-1-1.webp",
    img_sub: "./img/product-img/img-product-1-2.webp"
  },
  {
    id: 2,
    name: "AERO 16 XE5 (i7-12700H | RTX 3070Ti Q | 16GB | 2TB)",
    price: "73,990,000",
    img: "./img/product-img/img-product-3-1.webp",
    img_sub: "./img/product-img/img-product-3-2.png"
  },
  {
    id: 3,
    name: "AERO 15 OLED YD (i7-11800H | RTX3080 )",
    price: "76,990,000",
    img: "./img/product-img/img-product-2-1.webp",
    img_sub: "./img/product-img/img-product-2-2.webp"
  },
  {
    id: 4,
    name: "AERO 17 KE5 (i7-12700H | RTX 3060 | 16GB | 1TB Gen4)",
    price: "68,990,000",
    img: "./img/product-img/img-product-4-1.png",
    img_sub: "./img/product-img/img-product-4-2.png"
  },
  {
    id: 5,
    name: "AERO 5 KE4 (DDR4) (i7-127000H | RTX 3060P | 16GB | 1TB)",
    price: "49,990,000",
    img: "./img/product-img/img-product-5-1.png",
    img_sub: "./img/product-img/img-product-5-2.png"
  },
  {
    id: 6,
    name: "AORUS 15 XE4 (DDR4) (i7-12700H | RTX 3070Ti P | 16GB | 1TB)",
    price: "52,990,000",
    img: "./img/product-img/img-product-6-1.png",
    img_sub: "./img/product-img/img-product-6-2.png"
  },
  {
    id: 7,
    name: "AORUS 15P YD (i7-11800H | RTX3080)",
    price: "73,990,000",
    img: "./img/product-img/img-product-7-1.png",
    img_sub: "./img/product-img/img-product-7-2.png"
  },
  {
    id: 8,
    name: "AORUS 17 XE4 (i7-12700H | RTX 3070Ti P | 16GB | 1TB)",
    price: "53,990,000",
    img: "./img/product-img/img-product-8-1.png",
    img_sub: "./img/product-img/img-product-8-2.png"
  },
  {
    id: 9,
    name: "AORUS 17 XE5 (DDR5) (i7-12700H | RTX 3070Ti P | 16GB | 1TB)",
    price: "54,990,000",
    img: "./img/product-img/img-product-9-1.png",
    img_sub: "./img/product-img/img-product-9-2.png"
  },
  {
    id: 10,
    name: "AORUS 5 KE4 (DDR4-3200) (i7-12700H | RTX 3060 | 16GB | 1TB)",
    price: "38,990,000",
    img: "./img/product-img/img-product-10-1.png",
    img_sub: "./img/product-img/img-product-10-2.png"
  },
];
let products = document.querySelector('.card-group')
let productContent = document.querySelector(".product-content");
function loadProducts(arr) {
  productContent.innerHTML = "";
  iProduct(arr)
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    productContent.innerHTML += `
        <div class="modal product-modal fade" id="product-content-modal-${
          e.id
        }" tabindex="-1"
                            aria-labelledby="productLabel">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content overflow-hidden">
                                <button type="button" class="btn-close position-absolute end-0 top-0 p-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="modal-body overflow-auto row">
                                        
                                            
                                        <div class="col-lg-5 product-preview">
                                            <div id="nxt-${
                                              e.id
                                            }" class="carousel slide" data-bs-ride="true">
                                                <div id="thumbnail" class="carousel-indicators row">
                                                    <button type="button" data-bs-target="#nxt-${
                                                      e.id
                                                    }" data-bs-slide-to="0"
                                                        class="col-3 active" aria-current="true" aria-label="Slide 1">
                                                        <img class="d-block w-100"
                                                            src="${e.img}"
                                                            class="img-fluid" />
                                                    </button>
                                                    <button type="button" data-bs-target="#nxt-${
                                                      e.id
                                                    }" data-bs-slide-to="1"
                                                        aria-label="Slide 2" class="col-3">
                                                        <img class="d-block w-100"
                                                            src="./img/product-preview/product-1-2.webp"
                                                            class="img-fluid" />
                                                    </button>
                                                    <button type="button" data-bs-target="#nxt-${
                                                      e.id
                                                    }" data-bs-slide-to="2"
                                                        aria-label="Slide 3" class="col-3">
                                                        <img class="d-block w-100"
                                                            src="./img/product-preview/product-1-3.webp"
                                                            class="img-fluid" />
                                                    </button>
                                                    <button type="button" data-bs-target="#nxt-${
                                                      e.id
                                                    }" data-bs-slide-to="3"
                                                        aria-label="Slide 4" class="col-3">
                                                        <img class="d-block w-100"
                                                            src="./img/product-preview/product-1-4.webp"
                                                            class="img-fluid" />
                                                    </button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="${e.img}"
                                                            class="d-block w-100 product-main-img" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="./img/product-preview/product-1-2.webp"
                                                            class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="./img/product-preview/product-1-3.webp"
                                                            class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="./img/product-preview/product-1-4.webp"
                                                            class="d-block w-100" alt="...">
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button"
                                                    data-bs-target="#nxt-${
                                                      e.id
                                                    }" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button"
                                                    data-bs-target="#nxt-${
                                                      e.id
                                                    }" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-lg-7 product-detail mt-5 mt-lg-0">
                                            <div class="product-detail-title">
                                                <div class="product-name text-primary text-uppercase fw-bold">${
                                                  e.name
                                                }</div>
                                                <div class="dropdown-divider"></div>
                                                <div class="product-price text-danger fw-bold">${e.price} ₫</div>
                                            </div>
                                            <div class="row product-detail-control text-center my-2 mx-auto flex-nowrap">
                                                
                                                <a class="col-sm-8 add-to-cart btn btn-primary text-uppercase fs-6"
                                                    href="#" role="button" data-bs-toggle="modal" data-bs-dismiss="#product-content-modal-${e.id}">Thêm vào giỏ hàng</a>
                                            </div>
                                            <div class="product-detail-description">
                                                <h6
                                                    class="product-description-header text-uppercase fw-bold text-muted">
                                                    MÔ
                                                    TẢ</h6>
                                                <div class="product-description-content">
                                                    <p>AERO 15 được trang bị Intel® Core™ i7-11800H thế hệ thứ 11, giúp
                                                        điểm
                                                        hiệu suất của AERO tăng ấn tượng, lên đến 25%. Trong thị trường
                                                        máy
                                                        tính xách tay đầy cạnh tranh hiện nay, dòng AERO đã nhắm đến
                                                        phân
                                                        khúc riêng dành cho nhà sáng tạo với việc cung cấp lợi thế về
                                                        màn
                                                        hình OLED cùng hiệu chuẩn màu kép duy nhất được chứng nhận trên
                                                        thế
                                                        giới và hiệu suất cực cao, nhằm đạt được lợi thế cạnh tranh cũng
                                                        như
                                                        đáp ứng đúng nhu cầu của nhóm đối tượng này.
                                                        <br>
                                                        Bên cạnh đó AERO 15 còn được trang bị VGA NVIDIA GeForce RTX
                                                        3070 vô
                                                        cùng mạnh mẽ. Giúp đáp ứng hoàn hảo mọi nhu cầu làm việc và giải
                                                        trí
                                                        của bạn.
                                                        <br>
                                                        Thông số chi tiết AERO 15 OLED XD
                                                    </p>
                                                    <table class="table table-bordered border-dark">
                                                        <thead class="table-primary">
                                                            <tr>
                                                                <th scope="col">Model</th>
                                                                <th scope="col">AERO 15 OLED XD</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" class="table-warning">Stock code</th>
                                                                <td>AERO 15 OLED XD-73S1624GH</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">OS</th>
                                                                <td>Windows 10 Home</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">CPU</th>
                                                                <td>11th Gen Intel® Core™ i7-11800H (2.3GHz~4.6GHz)</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">Display</th>
                                                                <td>
                                                                    15.6" Thin Bezel UHD 3840x2160 Samsung AMOLED
                                                                    Display
                                                                    (VESA DisplayHDR 400 True Black, 100% DCI-P3)
                                                                    *X-Rite™ Color Calibrated & Pantone® Validated</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">System Memory</th>
                                                                <td>8GB*2

                                                                    2x DDR4 Slots (DDR4-3200, Max 64GB)</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">Chipset</th>
                                                                <td>
                                                                    Mobile Intel® HM570 Express Chipset</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">Video Graphics
                                                                </th>
                                                                <td>
                                                                    Intel® UHD Graphics
                                                                    NVIDIA® GeForce RTX™ 3070 Laptop GPU 8GB GDDR6
                                                                    Boost Clock 1290 MHz, Maximum Graphics Power 105 W
                                                                    NVIDIA Max-Q Technologies:
                                                                    Dynamic Boost 2.0, Resizable BAR, and Optimus™
                                                                    Technology.</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">Storage</th>
                                                                <td>
                                                                    2x M.2 SSD slots (Type 2280, supports 1x NVMe PCIe
                                                                    Gen3
                                                                    & SATA/ 1x NVMe PCIe Gen4)</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="table-warning">Keyboard Type</th>
                                                                <td>
                                                                    GIGABYTE Fusion RGB Per-Key Backlit Keyboard</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
  }
}
function iProduct(arr){
  products.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    products.innerHTML += `
    <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#product-content-modal-${e.id}"
    class="col-sm-4 col-md-3 colfix-20 colfix-50 product-item card" data-aos="flip-up" data-aso-duration="2000">
    <img src="${e.img}"
        onmouseover="src='${e.img_sub}'"
        onmouseout="src='${e.img}'"
        class="card-img product-img" alt="${e.name}">
    <div class="card-body product-info">
        <p class="card-title product-name">${e.name}</p>
        <p class="card-text product-price">${e.price}₫</p>
    </div>
</a>`
}
}
window.onload = loadProducts(productList)
//Sắp xếp theo giá
sortSelect(productList)
function sortSelect(arr) {
  let sort =  document.querySelector('.select-sort')
  sort.addEventListener('change', function () {
    sort.value==1?sortPriceAscending(arr):sort.value==2?sortPriceDeclining(arr):sortDefault(arr)
    iProduct(arr)
  })  
}
function sortDefault(arr) {
  arr.sort(function(a,b) {
return a.id - b.id
  })
}
function sortPriceAscending(arr) {
  arr.sort(function(a,b) {
    return Number(a.price.replaceAll(',',''))-Number(b.price.replaceAll(',',''))
})
}
function sortPriceDeclining(arr) {
  arr.sort(function(a,b) {
    return Number(b.price.replaceAll(',',''))-Number(a.price.replaceAll(',',''))
})
}


// Voucher giảm giá
let vouchers = {
    giam10 : 10,
    giam20: 20,
    giam50: 50,
    giam90: 90
}
function voucherApply (arr) {
  let value = document.querySelector('.cart-voucher-input').value
  if(arr[value]) return arr[value]
  return 0
}

let voucherInput = document.getElementsByClassName("cart-voucher-input")[0];
let vaildVoucher = document.querySelector('.valid-voucher')
let invaildVoucher = document.querySelector('.invalid-voucher')
voucherInput.addEventListener('input', function () {
  if(voucherInput.value!=''){
    if(voucherApply(vouchers)==0){
    invaildVoucher.style.display='block'
    vaildVoucher.style.display='none'
    } else {
    invaildVoucher.style.display='none'
    vaildVoucher.style.display='block'
  }
  }else {
    invaildVoucher.style.display='none'
    vaildVoucher.style.display='none'

  }
  
  updateCart()
})
updateCart();

// xóa sản phẩm
function deleteCart(a){
let parent = a.parentElement.parentElement.parentElement
parent.remove()
updateCart()

}

// Cập nhật giỏ hàng
function updateCart() {
  let cart_item_list = document.getElementsByClassName('cart-item');
  let cart_modal_content = document.querySelector('#form-cart-modal .modal-dialog')
  let show_noItems = document.querySelector('.form-cart-noItems')
  let hide_cart = document.querySelectorAll('#form-cart-modal .modal-content > div:not(.modal-header)')
  let total = 0;
  let cartQtt = 0;
  if (cart_item_list.length > 0) {
    show_noItems.style.visibility ='hidden';
    cart_modal_content.classList.add('modal-fullscreen')
    hide_cart.forEach(a=>{a.style.visibility='visible'})
    for (let i = 0; i < cart_item_list.length; i++) {
      let cart_item = cart_item_list[i];
      let price_item = cart_item.querySelector('.cart-item-price');
      let quantity_item = cart_item.querySelector('.cart-quantity-input');
      let price = parseFloat(price_item.innerText.replaceAll(',',''));
      let quantity = quantity_item.value;
      total += price * quantity;
      cartQtt += Number(quantity);
    }
  } else {
    cart_modal_content.classList.remove('modal-fullscreen')
    show_noItems.style.visibility ='visible';
    hide_cart.forEach(a=>{a.style.visibility='hidden'})

  }
let getVoucher = voucherApply(vouchers);
let appliedVoucher = total*getVoucher/100;
let finalTotal = total-appliedVoucher;
  document.querySelector('.badge').innerHTML = cartQtt;
  document.querySelector('.cart-total-price').innerText = total.toLocaleString() + "";
  document.querySelector('.cart-total-voucher-title').innerText = 'Giảm giá ('+getVoucher.toString() +'%) :'
  document.querySelector('.cart-total-voucher-price').innerText = '- '+appliedVoucher.toLocaleString();
  document.querySelector('.cart-total-final-price').innerText = finalTotal.toLocaleString() +'đ'
 }

// Edit số lượng sản phẩm
document.querySelector('.control-cart').addEventListener('click',updateQuantity)
function updateQuantity(){
  let quantity_input = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantity_input.length; i++) {
  let input = quantity_input[i];
  input.addEventListener('change', function (event) {
   input = event.target
    if (isNaN(input.value) || Number(input.value)<1) {
      input.value = 1
    }
    updateCart();
  });
}
}
// Thêm/bớt số lượng
function addOne(event) {
  let counter = event.target.parentElement.getElementsByClassName("cart-quantity-input")[0]
counter.value = Number(counter.value) + 1
updateCart()
}
function minusOne(event) {
  let counter = event.target.parentElement.getElementsByClassName("cart-quantity-input")[0]
  counter.value = Number(counter.value) -  1
    if (counter.value < 1) {
    counter.value = 1;
  }
updateCart()
}


//Thêm sản phẩm vào giỏ hàng
let add_cart = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < add_cart.length; i++) {
  let add = add_cart[i];
  add.addEventListener("click", function (event) {
    let button, product, img, title, price;
    button = event.target;
    product = button.parentElement.parentElement;
    img = product.parentElement.querySelector('.product-main-img').src;
    title = product.querySelector('.product-name').innerText;
    price = product.querySelector('.product-price').innerText;
    addItemToCart(title, price, img);
    updateCart();
  });
}
function addItemToCart(title, price, img) {
  let cartItems = document.querySelector(".cart-items");
  let cart_title = cartItems.getElementsByClassName("cart-item-name");
  for (let i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      // alert("Sản phẩm đã có trong giỏ hàng!");
      createToast(toastList.error)
      return;
    }
  }
  cartItems.innerHTML+=`
    <div class="cart-item row w-100 align-items-center my-1 py-3 flex-nowrap border-bottom g-0">
                <div class="col-3 me-2 d-flex justify-content-end">
                    <img class="cart-item-img border" src="${img}">
                </div>
                
                <div class="col-9 cart-item-content position-relative">
                    <div class="cart-item-name fw-bold text-uppercase text-start">${title}</div>
                    <div class="d-flex my-2  ">
                    
                    <div class="col-12 col-md-8 quantity  d-flex align-items-center me-2 flex-wrap flex-sm-nowrap">
                    <div class="d-flex border" style="width:9rem">
                    <button class="minus btn fw-bold col-4 p-0 border-end" onclick="minusOne(event)">-</button>
                              <input class="col-3 cart-quantity-input fw-bold text-center p-0 mx-1 border-0" type="text" value="1">
                              <button class="col-4 btn fw-bold p-0 border-start" onclick="addOne(event)">+</button>
                    </div>
                        <div class="col-10 col-sm-6 cart-item-price ms-2 text-start">${price} </div>
                    </div>
                    <button class="cart-item-remove btn btn-sm btn-danger position-absolute bottom-0 end-0" onclick="deleteCart(this)" >
                    <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>`;
            createToast(toastList.success)
            
  
}
  // Check đã hoàn thành form địa chỉ giao hàng?
  let invaild =   document.querySelectorAll('#form-cart-modal .invalid-tooltip')
  let submit = document.querySelector('#form-cart-modal .save')
  let btnPurchase = document.querySelector('.btn-purchase')
  function checkInvaild() {
    for (let i = 0; i < invaild.length; i++) {
        let e = invaild[i];
        if(getComputedStyle(e).display!='none') return true
      }
      return false
  }
  // Disabled nút thanh toán? 
  function disabledBtnPurchase(){
    checkInvaild()?btnPurchase.disabled=true:btnPurchase.disabled=false
  }

// Clear giỏ hàng
document.querySelector('.btn-purchase').addEventListener('click',clearCart)
  function clearCart() {
    let items = document.querySelector('.cart-items')
    while(items.firstChild) {
      items.removeChild(items.firstChild)
    }
    updateCart()
  }

  // Validation form
 
  (() => {
    'use strict'
  const forms = document.querySelectorAll('.needs-validation')
   Array.from(forms).forEach(form => {
    form.addEventListener('submit', function(event){
      event.preventDefault() //Fix lỗi submit refresh trang
    })

      form.addEventListener('input', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          
        }
        form.classList.add('was-validated')
        disabledBtnPurchase()
      },false)
      
    })
  })()

 
// Scroll to top
function scrollToTop() {
  window.scrollTo(0,0)
}
// Set header trên cùng & btn-to-top
window.addEventListener('scroll', function(){
  let header = document.querySelector('header');
  let headerInfo = this.document.querySelector('.header-info')
  let btn = document.querySelector('.btn-scrollToTop');
  if(window.scrollY>header.offsetHeight-50) {
    headerInfo.style.display='none'
    header.setAttribute('style',
    'position: fixed; animation: down .5s linear; z-index:99; transition: all .5s linear')
  }else {
    headerInfo.style.display='block'
    header.setAttribute('style','')

  }
    window.scrollY>screen.height?btn.style.transform='translate(-10%,-10%)':btn.style.transform='translate(110%,-10%)'
  })


let toastList = {
  success: {type: 'alert-success',
          icon: 'bi-check-circle-fill',
          mess: 'Thành công!!! Đã thêm vào giỏ hàng.',
          bg: 'bg-success' },
  error: {type: 'alert-danger',
          icon: 'bi-exclamation-triangle',
          mess: 'Ồ!!! Sản phẩm đã có trong giỏ hàng.',
          bg: 'bg-danger' }
}
// Toast container
function createToast(t) {
  let container
   if(!document.querySelector('.toast-container')) {
    container = document.createElement('div')
    container.setAttribute('class','toast-container d-flex flex-column fixed-top')
    document.body.appendChild(container)
  }else {
    container = document.querySelector('.toast-container')
  }
  let toast = document.createElement('div')
  toast.innerHTML = `<div class="toast border-0  align-items-center fade"  role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="0">
  <span class="edge ${t.bg} close"></span>
  <div class="d-flex ${t.type} rounded h-100">
    <div class="toast-body rounded-start align-items-center d-flex  fw-bolder">
      <i class="bi ${t.icon} fs-4 me-2"></i>
      ${t.mess}
    </div>
    <button type="button" class="btn-close btn-close-black me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`
  container.appendChild(toast) //Dùng appendChild thay cho ".innerHTML +=" vì ".innerHTML +=" tạo ra nhiều bản sao trùng css 
  let toasts  = document.querySelectorAll('.toast')
  if(toasts){
    for (let i = 0; i < toasts.length; i++) {
    let last = toasts[toasts.length - 1];
    last.classList.add('show','hide_slow')
    delay(time = 4500,last)
  }
  }
  
}
delay = (time,t) =>{
  setTimeout(() => {
    if(t){
      t.classList.remove('show')
      t.parentElement.parentElement.removeChild(t.parentElement)
    }
  }, time+=200);
}

if (document.readyState == 'loading') {
      document.addEventListener('DOMContentLoaded', ready)
} else {
      ready()
}

function ready() {
      var addToCartButtons = document.getElementsByClassName('shopItemButton');
      for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i];
            button.addEventListener('click', addToCartClicked);
      }
}

function addToCartClicked(event) {
      var button = event.target;
      var shopItem = button.parentElement;
      var title = shopItem.getElementsByClassName('shopTitle')[0].innerText;
      var price = shopItem.getElementsByClassName('shopItemPrice')[0].innerText;
      addItemToCart(title, price);
      // updateCartTotal();
}

function addItemToCart(title, price) {
      addedTitle = title;
      addedPrice = price;
      var cartRow = document.createElement('div');
      cartRow.classList.add('cartRow');

      var cartItems = document.getElementsByClassName('cartItems')[0];
      var cartItemNames = document.getElementsByClassName('cartItemTitle');

      for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                  alert('Du har allerede valgt dette produkt');
                  return;
            }
      }

      // var cartRowContents = '<div class="cartItem cartColumn"><span class="cartItemTitle">' + addedTitle + '</span></div><span class="cartPrice cartColumn">' + addedPrice + '</span><br><br><button class="btn btn-dark" onclick="tableType()">Vælg bordtype</button>';
      // cartRow.innerHTML = cartRowContents;
      // cartItems.append(cartRow);
      document.getElementsByClassName("cartItemTitle")[0].innerText = addedTitle;
      document.getElementsByClassName("cartItemPrice")[0].innerText = addedPrice;
      document.getElementsByClassName("cartRowBtn")[0].innerHTML = '<button class="btn btn-dark" onclick="tableType()">Vælg bordtype</button>';
}

function tableType() {
      var x = document.getElementById("cartPickTableId");
      x.style.display = "block";
}

function typeOne() {
      var cartInputValuesDiv = document.createElement("div");
      cartInputValuesDiv.setAttribute("id", "cartInputs");
      cartInputValuesDiv.innerHTML = "<p>Du har valgt Vinkelbordplade, indsæt venligst værdier:</p>";
      document.getElementById("cartInputValues").appendChild(cartInputValuesDiv);

      var cartTypeInputs = document.createElement("div");
      cartTypeInputs.setAttribute("id", "cartTypeForm");
      cartTypeInputs.innerHTML = "Værdi 1 (mm): <input type='number' name='værdi1' id='værdi1Id' required>" + "<br>" + "Værdi 2 (mm): <input type='number' name='værdi2' id='værdi2Id' required>" + "<br>" + "<button class='btn btn-dark' onclick='calcValuesOne()'>Beregn</button>";
      document.getElementById("cartInputValues").appendChild(cartTypeInputs);
}

function calcValuesOne() {
      Value1 = parseInt(document.getElementById("værdi1Id").value);
      Value2 = parseInt(document.getElementById("værdi2Id").value);

      if (isNaN(parseFloat(Value1)) || isNaN(parseFloat(Value2))) {
            alert("Please insert values higher than 0");
      } else {
            var cartCalculatedValues = document.createElement("div");
            cartCalculatedValues.setAttribute("id", "inputValues");
            cartCalculatedValues.innerHTML = "Længde: " + Value1 + "<br>" + "Bredde: " + Value2 + "<br>";
            document.getElementById("cartCalcValues").appendChild(cartCalculatedValues);
      }

      var calculationSection = document.createElement("div");
      calculationSection.setAttribute("id", "calculatedValues");
      var calculation = (Value1 * Value2) * addedPrice;
      calculationSection.innerHTML = "Total pris: kr " + calculation + ".- i alt";
      document.getElementById("calculatedValueId").appendChild(calculationSection);
}

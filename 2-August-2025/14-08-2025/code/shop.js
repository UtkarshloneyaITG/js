`
        const types = document.getElementById("types");
        const category = document.getElementById("category");
        const container = document.getElementById("container");
        let currentCategory = "allcategory";
        let currentType = "alltypes"
        const shopItems = [

            { name: "Slim Fit Jeans", category: "Men", type: "jeans", price: 1200 },
            { name: "Casual T-shirt", category: "Men", type: "tshirt", price: 600 },
            { name: "Formal Shirt", category: "Men", type: "shirt", price: 1100 },
            { name: "Track Pant", category: "Men", type: "pant", price: 900 },
            { name: "Printed T-shirt", category: "Women", type: "tshirt", price: 750 },
            { name: "Denim Jeans", category: "Women", type: "jeans", price: 1500 },
            { name: "Combo Pack", category: "Men", type: "mix", price: 2000 },
            { name: "Kids Shorts", category: "Kids", type: "pant", price: 500 },
            { name: "Girls Frock", category: "Kids", type: "mix", price: 800 },
            { name: "Oversized Hoodie", category: "Women", type: "tshirt", price: 1300 },
            { name: "Cargo Pants", category: "Men", type: "pant", price: 1400 },
            { name: "Polka Dot Shirt", category: "Women", type: "shirt", price: 1000 },
            { name: "Running Shorts", category: "Men", type: "pant", price: 800 },
            { name: "Ankle Jeans", category: "Women", type: "jeans", price: 1600 },
            { name: "Winter Combo", category: "Women", type: "mix", price: 2200 },
            { name: "Boys T-shirt", category: "Kids", type: "tshirt", price: 450 },
            { name: "School Uniform", category: "Kids", type: "shirt", price: 950 },
            { name: "Ethnic Set", category: "Women", type: "mix", price: 1800 },
            { name: "Linen Shirt", category: "Men", type: "shirt", price: 1250 },
            { name: "Gym Wear Pack", category: "Men", type: "mix", price: 2400 },
        ];


        function renderItems(items) {
            container.innerHTML = "";
            items.forEach(product => {
                const card = document.createElement("div");
                card.setAttribute("class", "card");
                card.innerHTML = `
                  <h2>${product.name}</h2>
                  <p> ${product.category}</p>
                  <p> ${product.type}</p>
                  <p> ${product.price}</p>
                `
                container.appendChild(card);
            });
        }

        function filterDataWithCategoryAndType(selectCategory, selectType) {
            const filterdata = shopItems.filter((product) => {
                const isMatchCategory = product.category === selectCategory || currentCategory == "allcategory";
const isMatchType = product.type === selectType || currentType == "alltypes";

// return isMatchCategory && isMatchType;
if (isMatchCategory && isMatchType) return true
    return false;
})
renderItems(filterdata);
}

category.addEventListener("change", (event) => {
currentCategory = event.target.value;
            filterDataWithCategoryAndType(currentCategory, currentType);
})
        types.addEventListener("change", (event) => {
currentType = event.target.value;
filterDataWithCategoryAndType(currentCategory, currentType);
})
renderItems(shopItems)

`
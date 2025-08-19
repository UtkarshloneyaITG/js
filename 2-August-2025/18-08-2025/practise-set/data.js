console.log('data script is running')

let products = []

async function data(){
  try {
    let resolve = await fetch('https://dummyjson.com/products')
    let data = await resolve.json()
    products = data.products;
    console.log(products)

  } catch (error) {
    console.error(error)
  }
}

data()
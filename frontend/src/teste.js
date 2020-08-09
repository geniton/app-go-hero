const arr = ["@genitonLima", "@genitonLima", "@jersicaLima", "gaelLima"]

function count(counted) {
  const count = {}

  counted.forEach((arroba) => {
     count[arroba] = (count[arroba] || 0) + 1
  })

  return count

}

function sort(counted) {
  for(prop in counted) {
    console.log(counted[prop])
    console.log(prop)
  }

}



sort(count(arr))

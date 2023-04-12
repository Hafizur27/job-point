const addToDb = id => {
    let appliedJob = {}
  
    const storedJob = localStorage.getItem('shopping-cart')
    if (storedJob) {
      appliedJob = JSON.parse(storedJob)
    }
  
    const quantity = appliedJob[id]
    if (quantity) {
      const newQuantity = quantity + 1
      appliedJob[id] = newQuantity
    } else {
      appliedJob[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(appliedJob))
  }
  
  const getStoredJob = () => {
    let appliedJob = {}
    const storedJob = localStorage.getItem('shopping-cart')
    if (storedJob) {
      appliedJob = JSON.parse(storedJob)
    }
    return appliedJob
  }
  
  const removeFromDb = id => {
    const storedJob = localStorage.getItem('shopping-cart')
    if (storedJob) {
      const appliedJob = JSON.parse(storedJob)
      if (id in appliedJob) {
        delete appliedJob[id]
        localStorage.setItem('shopping-cart', JSON.stringify(appliedJob))
      }
    }
  }
  
  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
  }
  
  export { addToDb, getStoredJob, removeFromDb, deleteShoppingCart }
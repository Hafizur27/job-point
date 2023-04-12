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
  
  export { addToDb, getStoredJob}
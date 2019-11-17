function fibonacci(n) {
  if (n < 0) throw new RangeError('the 1st parameter (n) must be greater than zero')
  if (n === 0 || n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const nums = [0, 1, 2, 3, 5, 8]

nums.forEach((num) => {
  console.log(`${num}: `, fibonacci(num))
})

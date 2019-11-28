def fact(n):
  if n > 1:
    return fact(n-1)*n
  return 1

print(fact(8)) 
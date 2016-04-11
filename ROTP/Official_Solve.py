def minimumFlips(pancakes):
  groupedHeight = 1 + pancakes.count('-+') + pancakes.count('+-')
  if pancakes.endswith('-'):
    return groupedHeight
  else:
    return groupedHeight - 1

t = int(raw_input())
for i in xrange(1, t + 1):
	n = raw_input()
	print "Case #{0}: {1}".format(i, minimumFlips(n))
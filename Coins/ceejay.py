import math
def is_prime(n):
	notPr = []
	for i in range(3, n):
		if n % i == 0:
			notPr.append(i)
			return notPr
			break
	return notPr

def coinster(j, n):
	toRet = ""
	curr_jc = bin(int(("1" + "0" * (j - 2) + "1"), 2))
	for cases in xrange(n+1):
		listio = []
		base_list = [int(curr_jc[2:], i) for i in range(2, 11)]

		for element in base_list:
			if is_prime(element):
				not_prime = is_prime(element)
				for el in not_prime:
					listio.append(el)

		curr_jc = bin(int(curr_jc[2:], 2) + 2)
		if len(listio) == len(base_list):
			actual = [x for x in str(curr_jc[2:])]
			l_act = [str(a) for a in listio]
			actual = ''.join(actual)
			l_act = ' '.join(l_act)
			toRet += "\n"+actual+ ' ' +l_act
	return toRet

t = int(raw_input())
for i in xrange(1, t + 1):
	n,j = [int(s) for s in raw_input().split(" ")]
	print "Case #{0}: {1}".format(i, coinster(n,j))
# for문 사용해서 3333부터 9999까지 숫자중에 1234 배수의 합계를 구하는 코드

total = 0
for i in range(3333, 9999):
    if i % 1234 == 0:
        total += i

print(total)
# 40722 출력



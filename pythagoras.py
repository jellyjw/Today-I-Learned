# Assignment Number...: 01
# Student ID..........: 20102379
# Student Name........: 장지우
# File Name...........: pythagoras.py
# Program Description.:

a = int(input('직각을 낀 첫 번째 변의 길이를 입력하세요 : '))
b = int(input('직각을 낀 두 번째 변의 길이를 입력하세요 : '))
c = (a**2+b**2)

x = int((a*b)/2)
y = int(c**(1/2))

print("넓이는 {}, 빗변의 길이는 {} 입니다.".format(x,y))
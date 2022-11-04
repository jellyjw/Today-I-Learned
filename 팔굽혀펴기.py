# Assignment Number...: 03
# Student ID..........: 20102379
# Student Name........: 장지우
# File Name...........: 팔굽혀펴기.py


# 남학생은 10번 이상을 해야 '합격'이고 아니면 '불합격'
# 여학생은 8번 이상을 해야 '합격'이고 아니면 '불합격'

x = input('성별(F/M)을 입력하세요:').lower()
y = int(input('팔굽혀펴기 횟수를 입력하세요:'))

if x == 'm' and y >= 10 :
    print('합격')
elif x == 'm' and y < 10 :
    print('불합격')
elif x == 'f' and y >= 8 :
    print('합격')
elif x == 'f' and y < 8 :
    print('불합격')
else :
    print('성별(F/M) 입력이 잘못되었습니다.')
# Assignment Number...: 05
# Student ID..........: 20102379
# Student Name........: 장지우
# File Name...........: 계산기 구현하기.py

def calculator(operator, integer1, integer2):
    if operator == 'add':
        return integer1 + integer2
    elif operator == 'sub':
        return integer1 - integer2
    elif operator == 'mul':
        return integer1 * integer2
    elif operator == 'div':
        return integer1 / integer2
    else:
        print(operator, 'is not supported.')


calculator('addition', 3, 5)
calculator('add', 3, 5)
calculator('sub', 7, 8)
calculator('mul', 11, 2)
calculator('div', 7, 3)
calculator('add', '3', '5')
calculator('add', [1, 2], [3, 4])


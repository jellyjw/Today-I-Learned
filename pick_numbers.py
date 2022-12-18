
data = [1, 2.5, 3, '4', 5, 6, 'seven', (8, 9.9), -2, 11]
numbers = [1, 2, 3, 4, 5, '1', '2']

def pick_numbers(list):
    total = 0
    for i in list:
        if type(i) == int or type(i) == float:
           total += i

    return total


print(pick_numbers(data)) # 26.5 출력 확인
print(pick_numbers(numbers)) # 15 출력 확인


